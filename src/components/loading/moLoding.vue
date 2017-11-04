<template>
  <div class="loding-zdy character" id="js-parent"></div>
</template>

<script>
import mojs from "mo-js";
import MojsPlayer from 'mojs-player';
import $ from "jquery";
export default {
    data(){
        return {

        }
    },

	  mounted(){
      this.moPlay()
    },

    components:{

    },

    computed:{

    },

    methods:{
      moPlay(){

        let parent= "#js-parent";

        const OPTS = {
          fill:           'none',
          radius:         25,
          strokeWidth:    { 50 : 0 },
          scale:          { 0: 1 },
          angle:          { 'rand(-35, -70)': 0 },
          duration:       500,
          left: 0,        top: 0,
          easing: 'cubic.out'
        };

        const circle1 = new mojs.Shape({
          parent,
          ...OPTS,
          stroke:         'cyan',
        });

        const circle2 = new mojs.Shape({
          parent,
          ...OPTS,
          radius:         { 0 : 15 },
          strokeWidth:    { 30: 0 },
          stroke:         'magenta',
          delay:          'rand(75, 150)'
        });


        const timeline = new mojs.Timeline({
          onComplete () { timeline.replay(); },
        });

        timeline.add(
          circle1, circle2,
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
