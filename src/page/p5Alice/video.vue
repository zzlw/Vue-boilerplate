<template>
  	<div ref="videoPlay" id="videoPlayBox" class="box" :style="{ height: heights }"  >
      <video :src="zhubo" id="videoPlay" class="myVideo" width="100%" height="100%" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" preload="auto"></video>
    </div>
</template>

<script>
import $ from "jquery";
import zhubo from "../../assets/Alice-动画合成.mp4"
// import alice from "../../assets/alice.jpeg"
export default {
    // props:["height"],
    data(){
        return {
          data: {},
          zhubo,
          // alice,
          mask: true,
          state: false,
          heights: $(window).height()+'px',
        }
    },

	  mounted(){
      let that= this;
      $(window).resize(function() {
        that.height= that.boxHeight();
        // console.log( $("#videoPlayBox").css("transform") );
        // $("#videoPlayBox").css({
        //   transform: scale(1.2,1.3);
        // })
      });

    },

    components:{

    },

    computed:{

    },

    methods:{
      boxHeight(){
        return $(window).height()+'px';
      },
      videoPlay(){
        let videoPlay= $('#videoPlay')[0];
        if(videoPlay.paused){
          videoPlay.play();
        }else{
          videoPlay.pause();
        }
      }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .box{
      position: absolute;
      width: 100%;
      top: 0;
      overflow: hidden;
      background: url(../../assets/alice.jpeg) no-repeat center / cover;
      transform: scale(1.2,1.3);
    }
    .bounce-enter-active{
      transition: transform .3s;
      transform: scale(1,1);
      // transform:translate(0,0) scale(1,1);  //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }
    .bounce-enter{
      transform: scale(0,0);
      // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
    }

    .bounce-leave-active{
      transition: transform .3s;
      transform: scale(0,0);
      // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .bounce-leave{
      transform: scale(1,1);
      // transform: translate(0,0) scale(1,1); //left
    }

</style>
