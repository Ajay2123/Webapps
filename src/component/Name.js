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
 
         var Number = this.state.Number;
         console.log('received duration', this.state.Number);
         var Target = (this.state.UNIQUE_ID);
         var _Duration = this.state.Duration;

         console.log('received duration',this.state.Duration);
         console.log('received duration',_Duration);


         var _number = Target.toString();

         /* 
         $number.waypoint(function(){
            console.log('Entered Waypoints');
         },{offset:'50%'}) */
         
         var waypoint = new Waypoint({
            element: document.getElementById(_number),
            handler: function (direction) {
               var demo, options;
                                        /*(targetid,startVal,endValue,decimals, duration, options) */
               demo = new countScript.CountUp(_number, 0, Number, 0, _Duration, options);
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
            Number: state.Number,
            css: state.css,
            Duration:state.Duration,
         });
      }
   });


});
