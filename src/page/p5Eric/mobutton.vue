<template>
  <div class="box-left animated pulse " @click="popup" >
    <div class="box-leftBox-top tow">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liwu"></use>
      </svg>
    </div>
    <div class="box-leftBox-bottom">主播有礼</div>
    <div class="sdfdfdsfsdfsfsd"></div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import mojs from "mo-js";
import $ from "jquery";
export default {
    props:["popup"],
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
          let timeline = new mojs.Timeline({
          onComplete () { timeline.replay(); },
        });

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
        // this.el.addEventListener("click", function () {
          // vibration();
          // self.options.onCheck();
          self.timeline().replay();
          // self.checked = !self.checked;
        // });
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
      var items = [].slice.call(document.querySelectorAll('.sdfdfdsfsdfsfsd'));

      function init() {
        /* Icon 1 */

        var el1 = items[0];
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
  // .grid__item{
  //   width: 100%;
  //   height: 100%;
  // }

  .box-left{
    position: absolute;
    width: rem(120);
    height: rem(149);
    top: rem(340);
    right: rem(24);
    animation-iteration-count: infinite;
    // background: #fff;
    text-align: center;
    line-height: 1.5;
    font-size: rem(40);
    .box-leftBox-top{
      width: rem(110);
      height: rem(110);
      border-radius: 50%;
      // background: url(../../images/p5Alice-icon111.png) no-repeat center / cover;
      background: #f39700;
      margin: 0 auto;
      text-align: center;
      font-size: rem(80);
      line-height: 1.3;
    }
    .box-leftBox-bottom{
      width: rem(120);
      height: rem(36);
      border-radius: rem(15);
      background: #fff;
      margin-top: rem(10);
      font-size: rem(18);
      color: #3d3c38;
      text-align: center;
      line-height: rem(36);
      position: absolute;
      bottom: rem(22);
    }
    .sdfdfdsfsdfsfsd{
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: rem(150);
      transform: scale(1.4,1.4);
      z-index: -1;
      top: rem(-10);
    }
  }
</style>
