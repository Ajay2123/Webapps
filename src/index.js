(function () {
   'use strict';

   var
      router = require('router'),
      appData = require('appData');


   router.get('/', function (req, res) {
      const UNIQUE_ID = new Date().getTime();

      var startNumber = appData.get('startNumber'),
         endNumber = appData.get('endNumber'),
         duration = appData.get('duration'),
         css = appData.get('css');

      res.render('/', {
         UNIQUE_ID: UNIQUE_ID,
         startNumber:startNumber,
         endNumber: endNumber,
         duration: duration,
         css: css

      });
   });
}());