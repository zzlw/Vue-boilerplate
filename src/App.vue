<template>
    <!-- <div id="wrapper" > -->
      <!-- <div id="scroller"> -->
        <div class="templateBox">
          <router-view/>
          <my-music :isMusic="isMusic" :isClick="isClick"></my-music>
          <my-loading :isLoading="isLoading"></my-loading>
        </div>
      <!-- </div> -->
    <!-- </div> -->
</template>

<script>
import $ from "jquery";
import { mapState, mapActions } from "vuex";
import myLoading from "components/loading/loading";
import myMusic from "components/my-music/my-music";
// import IScroll from "iscroll/build/iscroll-probe";

export default {
  components: {
    myLoading,
    myMusic
  },
  data() {
    return {
      sl: null
    };
  },
  mounted() {
    let that = this;
    // setTimeout(() => {
    //   that.$nextTick(function() {
    //     that.initScroll();
    //   });
    // }, 200);
  },
  computed: {
    ...mapState({
      isLoading: "loading",
      isMusic: "isMusic"
    })
  },
  props: {},
  methods: {
    ...mapActions(["setMusic"]),
    // initScroll() {
    //   this.sl = new IScroll("#wrapper", {
    //     scrollX: false,
    //     scrollY: true,
    //     mouseWheel: true,
    //     momentum: false,
    //     probeType: 3,
    //     click: true
    //   });
    //   this.sl.on("scroll", function scroll() {
    //     // console.log(this.y >> 0);
    //   });
    //   this.sl.on("scrollEnd", function scrollEnd() {
    //     // console.log(this);
    //   });
    // },
    isClick() {
      this.setMusic({
        play: !this.isMusic.play
      });

      // console.log(this.isMusic.play, 23423);
    },
    boxHeight() {
      return $(window).height() + "px";
    }
  }
};
</script>

<style lang="scss">
@import "./style/common";
@import "./style/mixin";
@import "./style/barrager";

// #wrapper {

// }

// #scroller {
//   position: absolute;
//   z-index: 0;
//   width: 100%;
//   transform: translateZ(0);
//   user-select: none;
//   text-size-adjust: none;
// }
.templateBox{
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  overflow: hidden;
}

div.dz {
  width: rem(50);
  height: rem(50);
  position: absolute;
  bottom: rem(120);
  left: rem(520);
  font-size: rem(60);
  opacity: 1;
  // position: absolute;
  // width: rem(80);
  // height: rem(128);
  // bottom: rem(50);
  // right: rem(50);
}

.my-music {
  position: absolute;
  top: rem(50);
  right: rem(50);
  overflow: hidden;
  width: rem(80);
  height: rem(80);
  border-radius: 50%;
  background: #ff4961;
  opacity: 0.7;
  .my-box {
    margin-top: rem(17);
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: rem(50);
  }
  &.play {
    animation: my-music 2s infinite linear;
    @keyframes my-music {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}



.isMusic-enter-active {
  transition: opacity 0.3s;
  opacity: 1;
}
.isMusic-enter {
  opacity: 0;
}

.isMusic-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}

.isMusic-leave {
  opacity: 1;
}
</style>
