<template>
  	<div ref="videoPlay" class="box" :style="{ height: boxHeight() }"  >
      <video :src="zhubo" id="videoPlay" controls class="myVideo" autoplay x5-playsinline="" playsinline webkit-playsinline="" poster="" preload="auto"></video>

    </div>
</template>

<script>
import $ from "jquery";
import zhubo from "../../assets/淋雨一直走.mp4"
export default {
    data(){
        return {
          data: {},
          zhubo,
          mask: true,
        }
    },

	  mounted(){

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
        // console.log($('#videoPlay')[0]);
         let videoPlay= $('#videoPlay')[0]

        if(videoPlay.paused){
          videoPlay.play();
        }else{
          videoPlay.pause();
        }

        // $(".videoPlay")[0].pause();
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
      background: url(../../images/p5Alice.png) no-repeat center / cover;
      .myVideo{
        width: 100%;
        height: 100%;
      }
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
