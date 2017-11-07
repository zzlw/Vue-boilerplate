<template>
  	<div class="danmusdfdsf" :style="{ height: boxHeight() }" >
      {{this.userImg}}
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

import p5AliceIcon2 from "../../images/p5Alice-icon.png"

import $ from "jquery";
export default {
    props:["userImg"],
    data(){
      return {
        taState: false,
      }
    },

    created(){

    },



    beforeUpdate() {
      //弹幕数据
      this.barrager();
    },

    updated(){

      // console.log(this.userImg.data.author.loginname,2342324)
    },

	  mounted(){
      console.log(this.userImg,2342324)
    },

    components:{

    },

    computed:{

    },

    methods:{
      boxHeight(){
        return $(window).height()+'px';
      },
      barrager(){
        let that= this;

        // console.log(this.userImg.data.author.loginname,2342324)
        // console.log( that.userImg,234234242423 );
        // setInterval(()=>{


          $('#danmu').barrager({img:p5AliceIcon2,info:"看着不错。。。。",title:"年轻人"});

        // },2000)

        // that.userImg.data.map(( item )=>{
        //   $('#danmu').barrager({img:p5AliceIcon2,info:"看着不错。。。。",title:"年轻人"});
        // })

      }
    }
}

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .danmusdfdsf{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>
