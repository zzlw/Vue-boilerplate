<template>
  	<div class="box" :style="{ height: boxHeight() }">
      <div class="box-head animated pulse"></div>
      <div class="kuang">
        <div :class="['kuang-box kuang-right',{ 'active': activeState=='/p2Eric' }]" @click="activeClick( '/p2Eric' )">
          <div class="kuang-con eric"></div>
        </div>
        <div :class="['kuang-box kuang-left',{ 'active': activeState=='/p2Alice' }]" @click="activeClick( '/p2Alice' )">
          <div class="kuang-con alice"></div>
        </div>
      </div>
      <div class="box-buttom animated pulse" @click="routerClick" ></div>
      <transition name="ta">
        <div class="tabox" v-if="taState"> 你还没有选择你的 Ta 噢！ </div>
      </transition>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import $ from "jquery";
export default {
    data(){
      return {
        activeState: "",  //true 是 left   false 是 right
        taState: false,
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
        let that= this;
        if(this.activeState){
          this.$router.push({ path: this.activeState });
        }else{
          this.taState= true;
          setTimeout(function() {
            that.taState= false;
          }, 2000);
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
      width: 100%;
      .box-head{
        margin-top: rem(60);
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
            z-index: -1;
            overflow: hidden;
            &.eric{
              background: url(../../assets/eric.jpeg) no-repeat center / cover;
            }
            &.alice{
              background: url(../../assets/alice.jpeg) no-repeat center / cover;
            }
          }
          &.active{
            width: rem(262);
            height: rem(359);
            background: url(../../images/home-hover.png) no-repeat center / cover;
          }
        }
        .kuang-left{
          // background: url(../../images/home1.png) no-repeat center / cover;
        }
        .kuang-right{

        }
      }
      .box-buttom{
        background: url(../../images/home4.png) no-repeat center / cover;
        width: rem(302);
        height: rem(86);
        animation-iteration-count: infinite;
        position:absolute;
        left: 50%;
        margin-left: rem(-151);
        bottom: rem(70);
      }
      .tabox{
        padding: rem(50) rem(30);
        position:absolute;
        top:50%;
        left:50%;
        border-radius: 5px;
        transform:translate(-50%,-50%);
        background: rgba(253,80,97,1);
        font-size: rem(30);
        color: #fff;
        line-height: 1.5;
        transition: all .5s;
      }
    }

    .ta-enter-active{

      // transform: scale(1,1);
      opacity: 1;
      // transform:translate(0,0) scale(1,1);  //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }
    .ta-enter{
      // transform: scale(0,0);
      opacity: 0;
      // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
    }

    .ta-leave-active{
      // transition: transform .5s;
      // transform: scale(0,0);
      opacity: 0;
      // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .ta-leave{
      // transform: scale(1,1);
      opacity: 1;
      // transform: translate(0,0) scale(1,1); //left
    }
</style>
