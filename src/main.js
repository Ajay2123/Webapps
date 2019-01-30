define(function(require) {
   'use strict';

   var
      _          = require('underscore'),
      Component  = require('Component'),
      template   = require('/template/main');

      return Component.extend({
         onRendered: function () {
            console.log('this.state.Duration in Main.js', this.state.Duration);

         },

         template: template,
         
         filterState: function(state) {
       
            return _.extend({}, {
               UNIQUE_ID:state.UNIQUE_ID,
               Number: state.Number,
               css:state.css,
               Duration:state.Duration,
            });
         }
      });
   });
   