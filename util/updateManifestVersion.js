
const fs = require('fs').promises;


(function(versionType) {
  console.log('Took version level ' + versionType);
  var regEx = /(version)(\"(\s)*:(\s)*\")((([0-9])+\.?)*)/g;
  return new Promise(function(resolve,reject) {
    resolve(fs.readFile('./src/manifest.json', 'utf8'));
  })
  .then(function(manifestText) {
    if (typeof manifestText == 'string' && manifestText.length > 0) {
      return {fileText: manifestText, hit: manifestText.match(regEx)};
    } else {
      throw new Error('Got empty or non-string');
    }
  })
  .then(function(blob) {
    if(!blob.hit) {
      throw new Error('No version found.');
    } else {
      var vNumbers = blob.hit[0].match(/([\d]+)/g);
      let v = versionType;
      var newVersion = '';
      if ((v == null || v == undefined) || (typeof vNumbers[2] == 'string' && (v == 'hotfix' || v == '3'))) {
        vNumbers[2] = String(Number(vNumbers[2])+1);
      } else if(typeof vNumbers[0] == 'string' && (v == 'major' || v == '1')) {
        vNumbers[0] = String(Number(vNumbers[0])+1);
      } else if (typeof vNumbers[1] == 'string' && (v == 'minor' || v == '2')) {
        vNumbers[1] = String(Number(vNumbers[1])+1);
      } else {
        throw new Error('Tried to change non-existing version level');
      }
    }

    return {hit: blob.hit, fileText: blob.fileText, numbers: vNumbers};
  })
  .then(function(blob) {
    var newVersion = 'version" : "';
    for(inum in blob.numbers) {
      newVersion += blob.numbers[inum] + '.';
    }
    newVersion = newVersion.slice(0, -1);

    var newText = blob.fileText.replace(regEx, newVersion);


    return newText;
  })
  .then(function(writeMe) {
    return fs.writeFile('./src/manifest.json',writeMe)
    .then((function(results) {
      if(results && results.err) {
        throw new Error(results.err);
      }
    }))
  })
  .catch((err) => {
    console.log(err);
    return '1';
  })
})(process.argv[2]);
