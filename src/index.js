(function () {
   'use strict';

   var
      router = require('router'),
      appData = require('appData');


   router.get('/', function (req, res) {
      const UNIQUE_ID = new Date().getTime();

      var number = appData.get('Number'),
         css = appData.get('css'),
         duration = appData.get('Duration');
     
      res.render('/', {
         UNIQUE_ID: UNIQUE_ID,
         Number: number,
         css: css,
         Duration: duration,

      });
   });
}());