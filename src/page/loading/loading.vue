<template>
  <div class="is-loading" :style="{ height: boxHeight() }">
    <mo-loding :toLink="loadingRouter"></mo-loding>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
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
    this.getLoading();
    this.getMusic();
  },
  methods:{
    ...mapActions([
        'getLoading',
        "getMusic",
    ]),
    boxHeight(){
      return $(window).height()+'px';
    },
    loadingRouter(){
      this.$router.push({ path: '/home'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .is-loading{
    width: rem(640);
  }

</style>
