<template>
  <div class="grid__item">
    <div class="icobutton icobutton--thumbs-up box">
      <div class="fa">
        <svg id="mojs-xin-icon" class="icon" aria-hidden="true">
          <use xlink:href="#icon-xin"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import mojs from "mo-js";
import $ from "jquery";
export default {
    data(){
        return {

        }
    },

	  mounted(){
      let _this= this;

      // function extend(a, b) {
      //   for (var key in b) {
      //     if (b.hasOwnProperty(key)) {
      //       a[key] = b[key];
      //     }
      //   }
      //   return a;
      // }

      function Animocon(el, options) {
        let _this = this;
        this.el = el;
        // this.options = extend({}, this.options);
        // extend(this.options, options);
        this.options = options;

        // this.checked = false;

        _this.timeline= ()=>{
          let timeline = new mojs.Timeline();

          let sj= `tweens1`;

          for (var i = 0, len = _this.options[sj].length; i < len; ++i) {
            timeline.add(_this.options[sj][i]);
          }

          return timeline;
        }

        //Vibration接口用于在浏览器中发出命令，使得设备振动。
        function vibration(){
          if (navigator.vibrate) {
              navigator.vibrate(15);
          } else if (navigator.webkitVibrate) {
              navigator.webkitVibrate(15);
          }
        }


        var self = this;
        this.el.addEventListener("click", function () {
          vibration();
          self.options.onCheck();
          self.timeline().replay();
          // self.checked = !self.checked;
        });
      }

      // Animocon.prototype.options = {
      //   tweens: [
      //     new mojs.Burst({
      //       shape: 'circle',
      //       isRunLess: true
      //     })
      //   ],
      //   onCheck: function () { console.log(23423); return false; },
      //   onUnCheck: function () { return false; }
      // };

      // grid items:
      var items = [].slice.call(document.querySelectorAll('.grid__item'));

      function init() {
        /* Icon 1 */

        var el1 = items[0].querySelector('.icobutton'), el1span = el1.querySelector('div');
        var scaleCurve4 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        var scaleCurve8 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        new Animocon(el1, {
          tweens1 : [
            // burst animation
            new mojs.Burst({
              parent: 		el1,
              count: 			6,
              radius: 		{40:90},
              children: {
                fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
                opacity: 		0.6,
                scale: 			1,
                radius:     { 7: 0 },
                duration: 	1500,
                delay: 			300,
                easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            // ring animation
            new mojs.Shape({
              parent: 			el1,
              type: 				'circle',
              scale:        { 0: 1 },
              radius: 			50,
              fill: 				'transparent',
              stroke: 			'#988ADE',
              strokeWidth: 	{35:0},
              opacity: 			0.6,
              duration:  		750,
              easing: 			mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            // icon scale animation
            new mojs.Tween({
              duration : 1100,
              onUpdate: function(progress) {
                if(progress > 0.3) {
                  var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
                  el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                }
                else {
                  el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
                }
              }
            })
          ],
          onCheck: function () {
            el1.style.color = '#988ADE';
          },
          onUnCheck: function () {
            el1.style.color = '#C0C1C3';
          }

        });
      }

      init();

    },

    components:{

    },

    computed:{

    },

    methods:{

    },
}

</script>

<style lang="scss" >
  @import '../../style/mixin';
  @import './icons.scss';
</style>
