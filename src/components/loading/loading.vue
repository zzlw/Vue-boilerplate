<template>
  <transition name="loading">
    <div class="is-loading" :style="{ height: boxHeight() }" v-show="isLoading">
      <mo-loding></mo-loding>
    </div>
  </transition>
</template>

<script>
import moLoding from "./moLoding.vue";
import $ from "jquery";
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
  methods:{
    boxHeight(){
      return $(window).height()+'px';
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .is-loading{
    position: absolute;
    width: 100%;
    background: #ff4961;
  }
  // .bounce-enter-active{
  //   transition: opacity .3s;
  //   opacity: 1;
  // }
  // .bounce-enter{
  //    opacity: 0;
  // }

  .loading-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .loading-leave{
    opacity: 1;
  }

</style>
