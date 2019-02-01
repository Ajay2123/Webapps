define(function (require) {
   'use strict';

   var
      _ = require('underscore'),
      Component = require('Component'),
      template = require('/template/main');

   return Component.extend({
      onRendered: function () {
/* 
         for (i = 0; i < fontSize; i++) {
            console.log('fontList[', i, ']=', fontList[i]);
         }
 */
      },
      template: template,

      filterState: function (state) {

         return _.extend({}, {

            UNIQUE_ID: state.UNIQUE_ID,
            startNumber: state.startNumber,
            endNumber: state.endNumber,
            duration: state.duration,
            css: state.css,
          
         });
      }
   });
});
