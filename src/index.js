(function () {
   'use strict';

   var
      router = require('router'),
      ResourceLocatorUtil = require('ResourceLocatorUtil'),
      appData = require('appData'),
      fontRepository = ResourceLocatorUtil.getFontRepository();
      
      router.get('/', function (req, res) {
         const UNIQUE_ID = new Date().getTime();
         
         
         var startNumber = appData.get('startNumber'),
         endNumber = appData.get('endNumber'),
         duration = appData.get('duration'),
         css = appData.get('css');
         font= fontRepository.getSelectorName();
         

         

      res.render('/', {
         UNIQUE_ID: UNIQUE_ID,
         startNumber: startNumber,
         endNumber: endNumber,
         duration: duration,
         css: css,
         font:font,
         

      });
   });
}());