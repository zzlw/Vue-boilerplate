<template>
  	<div class="box" :style="{ height: boxHeight() }">
      <div class="pading">
        <div class="box-head animated pulse"></div>
        <div class="kuang animated pulse"></div>
        <div class="box-buttom animated pulse" >
          <router-link to="/p4Eric">
            <div class="box-buttom-left animated pulse" ></div>
          </router-link>
          <router-link to="/p5Eric">
            <div class="box-buttom-right animated pulse" ></div>
          </router-link>
        </div>
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
      background: url(../../images/p3Alice.jpg) no-repeat center / 100% 100%;
      .pading{
        padding-top: rem(130);
        .box-head{
          width: rem(521);
          height: rem(122);
          background: url(../../images/eric-text1.png) no-repeat center / cover;
          margin: 0 auto;
          animation-iteration-count: infinite;
        }
        .kuang{
          width: rem(300);
          height: rem(391);
          background: url(../../images/Eric-renwu.png) no-repeat center / cover;
          margin: rem(90) auto 0;
          animation-iteration-count: infinite;
        }
        .box-buttom{
          position: relative;
          height: rem(200);
          animation-iteration-count: infinite;
          .box-buttom-left{
            width: rem(177);
            height: rem(87);
            position: absolute;
            left: rem(65);
            top: rem(130);
            background: url(../../images/fenshouba.png) no-repeat center / cover;
          }
          .box-buttom-right{
            width: rem(294);
            height: rem(87);
            position: absolute;
            right: rem(65);
            top: rem(130);
            background: url(../../images/nanihaohaojiaban.png) no-repeat center / cover;
          }
        }
      }
    }
</style>
