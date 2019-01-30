(function () {
   'use strict';

   var
      router = require('router'),
      appData = require('appData');


   router.get('/', function (req, res) {
      const UNIQUE_ID = new Date().getTime();

      var Number = appData.get('Number'),
         css = appData.get('css'),
         Duration = appData.get('Duration'),
         styleValue = appData.get('styleValue');
     
      res.render('/', {
         UNIQUE_ID: UNIQUE_ID,
         Number: Number,
         css: css,
         Duration: Duration,

      });
   });
}());