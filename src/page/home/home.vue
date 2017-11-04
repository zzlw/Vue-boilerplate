<template>
  	<div class="box" :style="{ height: boxHeight() }">
      <div class="box-head animated pulse"></div>
      <div class="kuang">
        <div :class="['kuang-box kuang-right',{ 'active': activeState=='/p2Alice' }]" @click="activeClick( '/p2Alice' )">
          <div class="kuang-con"></div>
        </div>
        <div :class="['kuang-box kuang-left',{ 'active': activeState=='/p5Alice' }]" @click="activeClick( '/p5Alice' )">
          <div class="kuang-con"></div>
        </div>
      </div>
      <div class="box-buttom animated pulse" @click="routerClick" ></div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import $ from "jquery";
export default {
    data(){
      return {
        activeState: "",  //true 是 left   false 是 right
      }
    },

	  mounted(){
      this.getLoading();
      this.setMusic({
        show: true,
        play: true,
      });


    },

    components:{

    },

    computed:{

    },

    methods:{
      ...mapActions([
          'getLoading',
          'setMusic',
      ]),
      activeClick(path){
        this.activeState= path;
      },
      routerClick(){
        if(this.activeState){
          this.$router.push({ path: this.activeState });
        }
      },
      boxHeight(){
        return $(window).height()+'px';
      },

    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .box{
      position: fixed;
      height: 100%;
      width: 100%;
      padding-top: rem(60);
      .box-head{
        width: rem(640);
        height: rem(360);
        background: url(../../images/home1.png) no-repeat center / cover;
        animation-iteration-count: infinite;
      }
      .kuang{
        padding: rem(35) rem(15);
        display: flex;
        justify-content: space-around;
        .kuang-box{
          width: rem(261);
          height: rem(359);
          background: url(../../images/home2.png) no-repeat center / cover;
          position: relative;
          .kuang-con{
            position: absolute;
            width: rem(246);
            height: rem(349);
            border-radius: rem(25);
            top: rem(5);
            left: rem(5);
            background: url(../../images/home1.png) no-repeat center / cover;
            z-index: -1;
            overflow: hidden;
          }
          &.active{
            width: rem(262);
            height: rem(359);
            background: url(../../images/home-hover.png) no-repeat center / cover;
          }
        }
        .kuang-left{

        }
        .kuang-right{

        }
      }
      .box-buttom{
        background: url(../../images/home4.png) no-repeat center / cover;
        width: rem(302);
        height: rem(86);
        margin: rem(40) auto 0;
        animation-iteration-count: infinite;
      }
    }
</style>
