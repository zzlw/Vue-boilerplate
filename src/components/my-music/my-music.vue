<template>
  <transition name="bounce">
    <div class="my-music" v-show="isMusic.show">
      <audio id="my-music-audio" preload loop>
        <source :src="lyyzz" type="audio/mp3" />
      </audio>
    </div>
  </transition>
</template>

<script>
import $ from "jquery";
import lyyzz from "../../assets/lyyzz.mp3";
import {mapState, mapActions} from 'vuex'
export default {
  props:["isMusic"],
  data () {
    return {
      msg: '加载中...',
      lyyzz,
      state: false,
    }
  },
  components:{
    // moLoding,
  },
  mounted(){
    let that= this;
    // var audio;
    // function loadAudio(src, callback) {
    //     audio = new Audio(src);
    //     audio.onloadedmetadata = callback;
    //     audio.src = src;
    // }

    // var audioUrl = lyyzz;//音频路径
    // //调用方法
    // loadAudio(audioUrl,function(){
    //     // $('#music').attr("src",audioUrl);
    //     // alert("加载完成");
    //     audio.play();
    // });

    var audio = $("#my-music-audio")[0];
    console.log(that.isMusic,342342)
    if( !this.state ){
      audio.onloadedmetadata=function() {
        that.state= true;

        if(that.isMusic.play){
          audio.play();
        }else{
          audio.pause();
        }

      }
    }else{
      if(that.isMusic.play){

        audio.play();
      }else{
        audio.pause();
      }
    }




  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .is-loading{
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ff4961;
    overflow: hidden;
  }
  // .bounce-enter-active{
  //   transition: opacity .3s;
  //   opacity: 1;
  // }
  // .bounce-enter{
  //    opacity: 0;
  // }

  .bounce-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .bounce-leave{
    opacity: 1;
  }

</style>
