<template>
  <div class="loding-zdy character" :class="className"></div>
</template>

<script>
import mojs from "mo-js";
import MojsPlayer from 'mojs-player';
import $ from "jquery";
export default {
    data(){
        return {
          className: "mojs" + new Date().getTime()
        }
    },

    updated(){

    },

	  mounted(){
      this.moPlay();
    },

    components:{

    },

    computed:{

    },

    methods:{
      moPlay(){

        let parent= `.${this.className}`;

        const COLORS = {
          RED:      '#FD5061',
          YELLOW:   '#FFCEA5',
          BLACK:    '#29363B',
          WHITE:    'white',
          VINOUS:   '#A50710'
        }

        const burst1 = new mojs.Burst({
          parent,
          left: 0, top: 0,
          count:          8,
          radius:         { 50: 150 },
          children: {
            shape:        'line',
            stroke:       [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
            scale:        1,
            scaleX:       { 1 : 0 },
            // pathScale:    'rand(.5, 1.25)',
            degreeShift:  'rand(-90, 90)',
            radius:       'rand(20, 40)',
            // duration:     200,
            delay:        'rand(0, 150)',
            isForce3d:    true
          }
        });

        const largeBurst = new mojs.Burst({
          parent,
          left: 0, top: 0,
          count:          4,
          radius:         0,
          angle:         45,
          radius:        { 0: 450  },
          children: {
            shape:        'line',
            stroke:       '#4ACAD9',
            scale:        1,
            scaleX:       { 1 : 0 },
            radius:       100,
            duration:     450,
            isForce3d:    true,
            easing:       'cubic.inout'
          }
        });

        const CIRCLE_OPTS = {
          left: 0, top: 0,
          scale:      { 0: 1 },
        }

        const largeCircle = new mojs.Shape({
          parent,
          ...CIRCLE_OPTS,
          fill:       'none',
          stroke:     'white',
          strokeWidth: 4,
          opacity:    { .25 : 0 },
          radius:     250,
          duration:   600,
        });

        const smallCircle = new mojs.Shape({
          parent,
          ...CIRCLE_OPTS,
          fill:       'white',
          opacity:    { .5 : 0 },
          radius:     30,
        });



        const timeline = new mojs.Timeline({
          onComplete () { timeline.replay(); },
        });

        timeline.add(
          burst1,
          largeBurst,
          largeCircle,
          smallCircle,
        );

        timeline.play();
        // new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true,isHidden: true });

      }
    },
}

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
.character {
  color: white;
  font-size: 68px;
  text-align: center;
  line-height: .475;
  font-family: Oswald, monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 自身宽度和高度的一半
  border: 1px solid red;
}

</style>
