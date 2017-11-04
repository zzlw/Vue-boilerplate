<template>
  <div>
    <div id="wrapper">
      <div id="scroller">
        <router-view/>
      </div>
    </div>
    <my-music :isMusic="isMusic"></my-music>
    <my-loading :isLoading="isLoading"></my-loading>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import myLoading from 'components/loading/loading';
import myMusic from 'components/my-music/my-music';
import IScroll from 'iscroll/build/iscroll-probe';

export default {
  components:{
      myLoading,
      myMusic,
  },
  data() {
    return {
      sl: null,
    };
  },
  mounted() {
    console.log(this.isMusic,3)
    // eslint-disable-next-line
    let that= this;
    setTimeout(()=>{
      that.$nextTick(function () {
        that.initScroll();
      });
    },200)
  },
  computed: {
    ...mapState({
      'isLoading': 'loading',
      "isMusic": "isMusic",
    }),
  },
  props: {
    // show: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  methods: {
    initScroll() {
      this.sl = new IScroll('#wrapper', {
        scrollX: false,
        scrollY: true,
        mouseWheel: true,
        momentum: false,
        // snap: '.dp-item',
        probeType: 3,
      });
      this.sl.on('scroll', function scroll() {
        // console.log(this.y >> 0);
      });
      this.sl.on('scrollEnd', function scrollEnd() {
        // console.log(this);
      });
    },
  },
}
</script>

<style lang="scss">
@import './style/common';
@import './style/mixin';

#wrapper {
  position: absolute;
	z-index: 0;
	top: 0;
	bottom: 0;
  left: 0;
  right: 0;
	background: #fff;
  overflow: hidden;
}

#scroller {
  position: absolute;
	z-index: 0;
	width: 100%;
	transform: translateZ(0);
	user-select: none;
  text-size-adjust: none;
}

div.dz{
  width:rem(50);
  height: rem(50);
  position: absolute;
  bottom: rem(120);
  left:rem(520);
  font-size: rem(60);
  opacity: 1;
  // position: absolute;
  // width: rem(80);
  // height: rem(128);
  // bottom: rem(50);
  // right: rem(50);
}
</style>
