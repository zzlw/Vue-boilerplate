<template>
  <transition name="bounce">
    <div class="is-loading" v-show="isLoading">
      <mo-loding></mo-loding>
    </div>
  </transition>
</template>

<script>
import moLoding from "./moLoding.vue";
export default {
  props: ['isLoading'],
  data () {
    return {
      msg: '加载中...',
    }
  },
  components:{
    moLoding,
  },
  mounted(){

  },
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
