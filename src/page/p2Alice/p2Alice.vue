<template>
  	<div class="box" :style="{ height: boxHeight() }">
      <div class="pading">
        <div class="box-head animated pulse"></div>
        <div class="kuang">
          <div class="kuang-left" ></div>
          <div class="kuang-right" ></div>
        </div>
        <router-link to="/p3Alice">
          <div class="box-buttom animated pulse" ></div>
        </router-link>
      </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import $ from "jquery";
export default {
    data(){
        return {

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
          "setMusic",
      ]),
      boxHeight(){
        return $(window).height()+'px';
      }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .box{
      position: fixed;
      height: 100%;
      width: 100%;
      // width: rem(640);
      // height: rem(1136);
      background: url(../../images/p2Alice.png) no-repeat center / 100% 100%;
      .pading{
        padding-top: rem(70);
        .box-head{
          width: rem(370);
          height: rem(100);
          background: url(../../images/p2Alice-title.png) no-repeat center / cover;
          margin: 0 auto;
          animation-iteration-count: infinite;
        }
        .kuang{
          position: relative;
          height: rem(680);
          .kuang-left{
            width: rem(238);
            height: rem(607);
            background: url(../../images/p2Alice-alice.png) no-repeat center / cover;
            position: absolute;
            top: rem(30);
            left: rem(70);
          }
          .kuang-right{
            width: rem(245);
            height: rem(320);
            background: url(../../images/p2Alice-jieshao.png) no-repeat center / cover;
            position: absolute;
            top: rem(110);
            right: rem(80);
          }
        }
        .box-buttom{
          background: url(../../images/p2Alice-button.png) no-repeat center / cover;
          width: rem(312);
          height: rem(89);
          // margin: rem(5) auto 0;
          animation-iteration-count: infinite;
          position:absolute;
          left: 50%;
          margin-left: rem(-156);
          bottom: rem(70);
        }
      }
    }
</style>
