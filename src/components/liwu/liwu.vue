<template>
  <!-- <transition name="bounce"> -->
    <div class="liwubox" :style="{ height: boxHeight() }">
      <moLoding></moLoding>
      <div class="com-liwu" >
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
import moLoding from "./moLoding.vue";
import $ from "jquery";
export default {
  props: ["data","item"],
  data () {
    return {
      msg: '加载中...',
      state: false,
    }
  },
  components:{
    moLoding,
  },
  mounted(){
    let _that= this;
    setTimeout(()=>{
      let index = _that.data.indexOf(_that.item);
      _that.data.splice(index, 1)
    }, 2000);
  },
  methods:{
    boxHeight(){
      return $(window).height()+"px";
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .liwubox{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    @keyframes myfirst
    {
      0% {
        opacity: 0;
        transform: rotate(0deg) scale(5,5);
      }
      30% {
        opacity: 1;
        transform: rotate(360deg) scale(1,1);
      }
      70% {
        opacity: 1;
        transform: rotate(360deg) scale(1,1);
      }
      100% {
        opacity: 0;
        transform: rotate(0deg) scale(0,0);
        display: none;
      }
    }
    animation: myfirst 1.5s;
    .com-liwu{
      width: rem(400);
      height: rem(400);
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin: auto;
      .icon{

        // transform:rotate(360deg);
        // position: relative;
        // top: 50%;
        // left: 50%;
        // transform:rotate(360deg) translate(-50%,-50%);
      }
    }
  }
  // .bounce-enter-active{
  //   transition: transform 1s;
  //   transform: rotate(360deg) scale(1,1);
  //   // transform:translate(0,0) scale(1,1);  //left
  //   transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  // }
  // .bounce-enter{
  //   transform: rotate(0deg) scale(0,0);
  //   // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
  // }

  // .bounce-leave-active{
  //   transition: transform 1s;
  //   transform: rotate(0deg) scale(0,0);
  //   // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
  //   transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  // }

  // .bounce-leave{
  //   transform: rotate(360deg) scale(1,1);
  //   // transform: translate(0,0) scale(1,1); //left
  // }

</style>
