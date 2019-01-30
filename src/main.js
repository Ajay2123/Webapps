define(function(require) {
   'use strict';

   var
      _          = require('underscore'),
      Component  = require('Component'),
      template   = require('/template/main');

      return Component.extend({
         template: template,
         
         filterState: function(state) {
       
            return _.extend({}, {

               UNIQUE_ID: state.UNIQUE_ID,
               startNumber:state.startNumber,
               endNumber: state.endNumber,
               duration: state.duration,
               css: state.css
      
            });
         }
      });
   });
   