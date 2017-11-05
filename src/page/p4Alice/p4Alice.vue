<template>
  	<div class="box" :style="{ height: boxHeight() }">
      <div class="pading">
        <div class="box-head animated pulse"></div>
        <div class="kuang animated pulse"></div>
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
      background: url(../../images/p3Alice.png) no-repeat center / 100% 100%;
      .pading{
        padding-top: rem(150);
        .box-head{
          width: rem(510);
          height: rem(177);
          background: url(../../images/p4Alice-title.png) no-repeat center / cover;
          margin: 0 auto;
          animation-iteration-count: infinite;
        }
        .kuang{
          width: rem(304);
          height: rem(364);
          background: url(../../images/p4Alice-alice.png) no-repeat center / cover;
          margin: rem(70) auto 0;
          animation-iteration-count: infinite;
        }
      }
    }
</style>
