<template>
  <transition name="isMusic">
    <div class="my-music play" @click="isClick()" v-show="isMusic.show">
      <div class="my-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-music-copy"></use>
        </svg>
      </div>
      <!-- <audio id="my-music-audio" autoplay preload loop> -->
        <!-- <source :src="lyyzz" type="audio/mp3" />
      </audio> -->
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
      state: true,
      statePlay: false,
      audio: null,
      play: true,
    }
  },
  components:{
    // moLoding,
  },
  mounted(){
    // if( this.state ){
      this.music();
    // }

    // if( this.statePlay ){
    //   if( this.isMusic.play){
    //     this.audio.play();
    //   }else{
    //     this.audio.pause();
    //   }
    // }


    // var audio = $("#my-music-audio")[0];
    // console.log(that.isMusic,342342)
    // if( !this.state ){
    //   audio.onloadedmetadata=function() {
    //     that.state= true;

    //     if(that.isMusic.play){
    //       audio.play();
    //     }else{
    //       audio.pause();
    //     }

    //   }
    // }else{
    //   if(that.isMusic.play){

    //     audio.play();
    //   }else{
    //     audio.pause();
    //   }
    // }




  },
  methods:{
    isClick(){
      this.play= !this.play;
      if( this.statePlay ){
        if( this.play){
          this.audio.play();
          $(".my-music").addClass("play");
        }else{
          this.audio.pause();
          $(".my-music").removeClass("play");
        }
      }
    },
    music(){
      this.state= false;
      let that= this;
      var audio;
      function loadAudio(src, callback) {
          audio = new Audio(src);
          audio.onloadedmetadata = callback;
          audio.src = src;
      }

      var audioUrl = this.lyyzz;//音频路径
      //调用方法
      loadAudio(audioUrl,function(){
          // $('#music').attr("src",audioUrl);
          // alert("加载完成");
          audio.play();
          that.audio= audio;

          that.statePlay= true;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .my-music{
    position: absolute;
    top: rem(50);
    right: rem(50);
    overflow: hidden;
    width: rem(80);
    height: rem(80);
    border-radius: 50%;
    background: #ff4961;
    opacity: .7;
    .my-box{
      margin-top: rem(17);
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: rem(50);
    }
    &.play{
      animation: my-music 2s infinite linear;
      @keyframes my-music
      {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
      }
    }
  }

  .isMusic-enter-active{
    transition: opacity .3s;
    opacity: 1;
  }
  .isMusic-enter{
     opacity: 0;
  }

  .isMusic-leave-active{
    transition: opacity .3s;
    opacity: 0;
  }

  .isMusic-leave{
    opacity: 1;
  }

</style>
