<template>
  <transition name="isMusic">
    <div class="my-music play" @click="isPlay" v-show="isMusic.show">
      <div class="my-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-music-copy"></use>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
import $ from "jquery";
import {mapState, mapActions} from 'vuex'
export default {
  props:["isMusic","isClick"],
  data () {
    return {
      play: true,
      isMusicPlay: false,
    }
  },
  beforeUpdate: function () {
    // this.isPlay();
  },
  components:{

  },
  mounted(){

  },
  methods:{
    isPlay(){
      let el= $("#my-music-audio")[0];
      if( el ){

        if( this.isMusicPlay){

          $("#my-music-audio")[0].play();
          $(".my-music").addClass("play");
        }else{
          // console.log(this.isMusic.play,3)
          $("#my-music-audio")[0].pause();
          $(".my-music").removeClass("play");
        }

        this.isMusicPlay= !this.isMusicPlay
      }
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
