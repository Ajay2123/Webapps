define(function (require) {
   'use strict';

   var
      _ = require('underscore'),
      $ = require('jquery'),
      Component = require('Component'),
      template = require('/template/name'),
      countScript = require('/module/common/countScript');



   return Component.extend({

      onRendered: function () {
         var _startNumber = this.state.startNumber;
         var _endNumber = this.state.endNumber;
         var target = (this.state.UNIQUE_ID);
         var _duration = this.state.duration;
         var targetTWithStringValue = target.toString();

         /* 
         $number.waypoint(function(){
            console.log('Entered Waypoints');
         },{offset:'50%'}) */
         
         var waypoint = new Waypoint({
            element: document.getElementById(targetTWithStringValue),
            handler: function (direction) {
               var demo, options;
                                        /*(targetid,startVal,endValue,decimals, duration, options) */
               demo = new countScript.CountUp(targetTWithStringValue, _startNumber, _endNumber, 0, _duration, options);
               if (!demo.error) {
                  demo.start();
               } else {
                  console.error(demo.error);
               }
               this.destroy()
            },
            offset: '95%',
         })
      },


      template: template,
      filterState: function (state) {
        
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
