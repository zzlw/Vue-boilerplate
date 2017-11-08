<template>
  	<div class="box my-video-xingxing" id="danmu" :style="{ height: boxHeight() }" >
      <my-video></my-video>
      <!-- <div class="boxvideo animated pulse">
      </div> -->
      <!-- <div class="xing"></div> -->
      <!-- <div id="danmu" style="position: relative; width: 100%; height: 100%; background-color: rgba(0,0,0,0.2)"></div> -->

      <div class="box-bottom">
        <div class="box-bottom-box" @click="liwuClick('#icon-liwu2',true,11,14,'qiaokeli')">
          <div class="box-bottom-box-top one">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qiaokeli"></use>
            </svg>
          </div>
          <div class="box-bottom-box-bottom">巧克力</div>
        </div>
        <div class="box-bottom-box" @click="liwuClick('#icon-hongbao-copy',true,0,4,'cunkuan')">
          <div class="box-bottom-box-top tow">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hongbao"></use>
            </svg>
          </div>
          <div class="box-bottom-box-bottom">50万存款</div>
        </div>
        <div class="box-bottom-box" @click="liwuClick('#icon-meiguihua1',true,4,8,'meigui')">
          <div class="box-bottom-box-top three">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meiguihua"></use>
            </svg>
          </div>
          <div class="box-bottom-box-bottom">玫瑰花</div>
        </div>
      </div>
      <div class="box-bottomRight">
        <div class="bbrc">
          <div class="area"></div>
          <div class="bbrco good" @click="dz">
            <mo />
          </div>
          <div class="bbrco-text">Love</div>
        </div>
      </div>
      <!-- <div class="box-left animated pulse" @click="popup">
        <div class="box-leftBox-top tow">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liwu"></use>
          </svg>
        </div>
        <div class="box-leftBox-bottom">主播有礼</div>
      </div> -->
      <mobutton :popup="popup"></mobutton>
      <!-- <div class="item1">
        <div class="item1-box" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meiguihua1"></use>
          </svg>
        </div>
        <div class="item1-text">{{ `玫瑰 + ${liwuVuex.meigui}` }}</div>
      </div>
      <div class="item1 a1" :style="{ top: this.rem(190),left: this.rem(340) }">
        <div class="item1-box" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiaokeli-copy"></use>
          </svg>
        </div>
        <div class="item1-text">{{ `巧克力 + ${liwuVuex.qiaokeli}` }}</div>
      </div>
      <div class="item1 a2" :style="{ top: this.rem(280),left: this.rem(355) }">
        <div class="item1-box" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hongbao-copy"></use>
          </svg>
        </div>
        <div class="item1-text">{{ `存款 + ${liwuVuex.cunkuan}` }}</div>
      </div> -->
      <!-- <div class="item1 a2 name" :style="{ top: this.rem(593),left: this.rem(153) }">
        <div class="item1-box">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meiguihua-copy"></use>
          </svg>
        </div>
        <div class="item1-title">采集微信名</div>
        <div class="item1-text">你的业绩我承包了和他分手吧跟我走！</div>
      </div> -->
      <div class="boxtop">
        <div class="box-head-bg"></div>
        <div class="box-head-left"></div>
        <div class="box-head-lBox">
          <div class="userBox">
            <div class="left" ></div>
            <div class="right">
              <div class="top">{{ name }}</div>
              <div class="bottom"><span id="sjnv-length" >{{ number }}</span> 人</div>
            </div>
          </div>
        </div>
        <div class="box-head-right">
          <ul class="imgbox" id="weixinImgNv">
           <li class="img"  v-for="(item, index) in imgDate" :key="index" >
              <img class="nv"  :src="item" width="100%" height="100%" :style="{ display: 'block' }" />
            </li>
          </ul>
        </div>
      </div>
      <liwu v-for="(item, index) in liwuData" :data="liwuData" :item="item" :mask="item.data+index"  class="liwu" :key="index+item.data" v-if="item.state" >
        <svg :key="index+item.data" slot="icon"  class="icon" aria-hidden="true">
          <use  :xlink:href="item.data"></use>
        </svg>
      </liwu>
      <transition name="bounce">
        <div class="popup1" v-show="popup1State">
          <div class="popup1-con">
            <div class="popup1-con-text">
              <div class="popup1-con-text-bg">
                <div class="pctb1-text">
                  <div class="pctb1-text-img animated pulse"></div>
                </div>
                <div class="pctb1-title">
                  <div class="pctb1-title-img animated pulse"></div>
                </div>
                <div class="pctb1-button" onClick="window.appConfig.liwuDypOnClick()">
                  <a class="pctb1-button-img animated pulse"></a>
                </div>
                <div class="gb" @click="popup1">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="popup1-con-icon">
              <div class="popup1-con-icon-img animated pulse"></div>

            </div>

          </div>

        </div>
      </transition>
      <transition name="bounce2">
        <div class="popup2" v-show="popup2State">
          <div class="popup2-con">
            <div class="popup2-con-text">
              <div class="popup2-con-text-bg">
                <div class="pctb2-text">
                  <div class="pctb2-text-img animated pulse"></div>
                </div>
                <div class="pctb2-title">
                  <div class="pctb2-title-img animated pulse"></div>
                </div>
                <div class="pctb2-button" onClick="window.appConfig.liwuOnClick()">
                  <a class="pctb2-button-img animated pulse"></a>
                </div>
                <div class="gb" @click="popup2">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="popup2-con-icon">
              <div class="popup2-con-icon-img animated pulse"></div>

            </div>

          </div>
        </div>
      </transition>
      <transition name="liwuta">
        <div class="liwutabox" v-if="taState"> 亲，对我温柔点. </div>
      </transition>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import liwu from 'components/liwu/liwu'
import moLoding from "components/liwu/moLoding"
import p5AliceIcon from "../../images/p5Alice-icon.png"
import p5AliceIcon2 from "../../images/p5Alice-icon2.png"
import mobutton from "./mobutton.vue";
import mo from "./mo.vue";
import myVideo from "./video.vue";
import danmu from "./danmu.js";
import $ from "jquery";
export default {
    data(){
      var that = this;
      return {
        imgDate: [p5AliceIcon,p5AliceIcon,p5AliceIcon,p5AliceIcon,p5AliceIcon],
        name: "Alice",
        number: "12521",
        popup1State: false,
        popup2State: false,
        p5AliceIcon,
        liwuData: [],
        video: null,
        progressFlag: null,
        taState: false,
        maskPlay: true,
      }
    },

    created(){
      this.setMusic({
        show: false,
        // play: false
      });

    },



    beforeUpdate: function () {

    },

    updated(){


    },

	  async mounted(){


      let _this= this;
      _this.getLoading();


      // let dzfn= ()=>{
      //   setTimeout(function() {
      //     _this.dz();
      //     dzfn();
      //   }, 600);
      // }
      // dzfn();
      // this.video = document.getElementById("videoPlay");   //视频盒子




      //请求弹幕数据
      // this.barrager();

      // window.appConfig.weixinImgNv( ( data )=>{

      //   _this.imgDate= data.imgs;
      //   _this.number= data.num;

      // } );

    },

    components:{
      mo,
      liwu,
      moLoding,
      myVideo,
      mobutton,
    },

    computed:{
      ...mapState([
          'liwuVuex',
          'userImg',
      ]),

    },

    methods:{
      ...mapActions([
          'getLoading',
          "setMusic",
          "setLiwu",
          "getUserImg",
      ]),
      boxHeight(){
        return $(window).height()+'px';
      },
      popup(){
        let sj= Math.floor(Math.random()*2)+1;
        // let sj= 2;
        this[`popup${sj}State`]= !this[`popup${sj}State`];
      },
      popup1(){
        this.popup1State= !this.popup1State;
      },
      popup2(){
        this.popup2State= !this.popup2State;
      },
      dz(){
        //al icons
        let icons= [
          "icon-jieri",
          "icon-li",
          "icon-pingguo",
          "icon-caomei1",
          "icon-music",
          "icon-dangao1",
          "icon-mmp",
          "icon-xing1",
          "icon-yueliang2",
          "icon-dianying",
          "icon-meinv-copy",
          "icon-yinle1",
          "icon-yinle",
          "icon-logon",
          "icon--qiqiu",
          "icon--ainilihe",
          "icon-zuanjie-",
          "icon-dangao",
          "icon-xin2",
          "icon-yueliang1",
          "icon-keep",
          "icon-xing",
          "icon-liwu3",
          "icon-feiji",
          "icon-liwu2",
          "icon-xiangjiao",
          "icon-caomei",
          "icon-liwu1",
          "icon-yueliang",
          "icon-liwu-copy",
          "icon-hua",
          "icon-meiguihua1",
          "icon-037",
        ];
        let sjIcons= icons[ Math.floor(Math.random()*icons.length) ];

        var height = $(window).height();
        var width = $(window).width();
        var num = Math.floor(Math.random() * 3 + 1);
        var rand = parseInt(Math.random() * (width*1));
        let el = $("<div src="+ p5AliceIcon + " class='dz' ><svg class='icon' aria-hidden='true'><use xlink:href=" + `#${ sjIcons }` + "></use></svg><div/>");
        $(".box-bottom").before( el );
        el.stop().animate({
            bottom: this.rem(height-200),
            opacity: .3,
            left: this.rem(rand+260),
        },1500,"linear",function(){
            $(this).remove();
        });
      },
      liwuClick(data,state,start= 0,end= this.video.duration,liwuName ) {

        let that = this;

        let video= this.video;
        let progressFlag= this.progressFlag;
        if ( video.paused && that.maskPlay ){
            that.maskPlay= false;

            switch (liwuName) {

              case "meigui":

                that.setLiwu({
                  meigui: that.liwuVuex.meigui+1
                })
                break;
              case "qiaokeli":
                that.setLiwu({
                  qiaokeli: that.liwuVuex.qiaokeli+1
                })
                break;
              case "cunkuan":
                that.setLiwu({
                  cunkuan: that.liwuVuex.cunkuan+1
                })
                break;

              default:
                break;
            }


            that.enhanceVideoSeek(start,end);
            that.liwuMin(data,state);
        }else{
          that.taState= true;
          setTimeout(function() {
            that.taState= false;
          }, 2000);
        }



      },
      liwuMin(data,state){
        let that = this;
        let obj = {
          data,
          state,
        };
        that.liwuData.push(obj);
      },
      enhanceVideoSeek(start,end){
        let that= this;
        let video= this.video;
        let progressFlag= this.progressFlag;


        video.currentTime= start;
        video.play();


        let _currentTime= setInterval(()=>{
          if(video.currentTime==start){

            clearInterval(_currentTime);

            progressFlag= setInterval(()=>{
              if(video.currentTime>=end){
                video.currentTime= 0;

                let _dsq= setInterval(()=>{
                  if(video.currentTime==0){

                    video.pause();
                    clearInterval(_dsq);
                    clearInterval(progressFlag);
                    that.maskPlay= true;

                  }else{
                    video.currentTime= 0;
                  }
                },30)

              }
            },30)

          }else{
            video.currentTime= start;
          }
        },30)

      },
      barrager(){

        setInterval(()=>{

          var num = Math.floor(Math.random() * danmu.length);

          $('#danmu').barrager({img:danmu[num].img,info:danmu[num].text,title:danmu[num].title});
        },3000)

      }
    }
}

</script>

<style lang="scss" scoped>
@import "../../style/mixin";
.box {
  position: absolute;
  width: 100%;
  .boxvideo {
    position: absolute;
    width: rem(199);
    height: rem(599);
    background: url(../../images/p5Alice-alice.png) no-repeat center / cover;
    animation-iteration-count: infinite;
    top: rem(260);
    left: rem(210);
  }
  .box-bottom {
    position: absolute;
    width: rem(415);
    height: rem(149);
    bottom: rem(40);
    left: rem(60);
    display: flex;
    justify-content: space-between;
    .box-bottom-box {
      width: rem(120);
      height: rem(149);
      .box-bottom-box-top {
        width: rem(110);
        height: rem(110);
        border-radius: 50%;
        background: url(../../images/p5Alice-icon111.png) no-repeat center /
          cover;
        margin: 0 auto;
        text-align: center;
        font-size: rem(80);
        line-height: 1.3;
      }
      .box-bottom-box-bottom {
        width: rem(120);
        height: rem(28);
        border-radius: rem(15);
        background: #fff;
        margin-top: rem(10);
        font-size: rem(18);
        color: #3d3c38;
        text-align: center;
        line-height: rem(28);
      }
    }
  }
  .box-bottomRight {
    position: absolute;
    width: rem(80);
    height: rem(128);
    bottom: rem(50);
    right: rem(50);
    .bbrc {
      width: rem(80);
      .bbrco {
        height: rem(80);
        border-radius: 50%;
        background: url(../../images/p5Alice-icon111.png) no-repeat center /
          cover;
        margin: 0 auto;
        text-align: center;
        line-height: 1.5;
        font-size: rem(20);

        // i{
        //   font-style: normal;
        // }
      }
      .bbrco-text {
        font-size: rem(18);
        color: #ea3372;
        text-align: center;
        line-height: rem(28);
      }
    }
  }
  .box-left {
    position: absolute;
    width: rem(120);
    height: rem(149);
    top: rem(340);
    right: rem(24);
    animation-iteration-count: infinite;
    .box-leftBox-top {
      width: rem(110);
      height: rem(110);
      border-radius: 50%;
      // background: url(../../images/p5Alice-icon111.png) no-repeat center / cover;
      background: #f39700;
      margin: 0 auto;
      text-align: center;
      font-size: rem(80);
      line-height: 1.3;
    }
    .box-leftBox-bottom {
      width: rem(120);
      height: rem(36);
      border-radius: rem(15);
      background: #fff;
      margin-top: rem(10);
      font-size: rem(18);
      color: #3d3c38;
      text-align: center;
      line-height: rem(36);
      position: absolute;
      bottom: rem(22);
    }
  }
  .item1 {
    position: absolute;
    overflow: hidden;
    height: rem(96);
    top: rem(200);
    left: rem(55);
    .item1-box {
      float: left;
      width: rem(60);
      height: rem(60);
      border-radius: 50%;
      background: #fff;
      text-align: center;
      font-size: rem(55);
      line-height: 1;
    }
    .item1-text {
      float: left;
      border-radius: rem(15);
      background: #fff;
      font-size: rem(18);
      color: #3d3c38;
      line-height: rem(36);
      padding: 0 rem(16);
      margin: rem(10) 0 0 rem(10);
    }
    &.name {
      .item1-title {
        float: left;
        padding: 0 rem(16);
        font-size: rem(18);
        color: #fff;
        line-height: rem(28);
        margin: rem(0) 0 0 0;
        color: #f97596;
      }
      .item1-text {
        margin: rem(0) 0 0 rem(10);
        line-height: rem(28);
        min-width: rem(240);
        max-width: rem(380);
        max-height: rem(28);
        overflow: hidden;
      }
    }
  }
  .boxtop {
    position: absolute;
    width: 100%;
    height: rem(92);
    top: rem(40);
    .box-head-bg {
      position: absolute;
      width: 100%;
      height: rem(92);
      opacity: 0.4;
      background: #000;
      top: 0;
      left: 0;
    }
    .box-head-left {
      position: absolute;
      width: rem(212);
      height: rem(92);
      left: 0;
      top: 0;
      background: #000;
      opacity: 0.7;
      border-radius: 0 rem(50) rem(50) 0;
    }
    .box-head-lBox {
      position: absolute;
      width: rem(212);
      height: rem(92);
      left: 0;
      top: 0;
      .userBox {
        overflow: hidden;
        .left {
          float: left;
          width: rem(75);
          height: rem(75);
          margin-top: rem(7.5);
          margin-left: rem(7);
          background: url(../../images/p5Alice-icon2.png) no-repeat center /
            cover;
        }
        .right {
          float: right;
          margin: rem(11) rem(24) 0 0;
          .top {
            font-size: rem(30);
            line-height: 1.4;
            font-weight: bold;
            color: #fff;
          }
          .bottom {
            font-size: rem(16);
            line-height: 1.4;
            font-weight: 400;
            color: #fff;
          }
        }
      }
    }
    .box-head-right {
      position: absolute;
      width: rem(430);
      height: rem(70);
      right: 0;
      top: rem(10);
      overflow: hidden;
      .imgbox {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .img {
          border: none;
          width: rem(71);
          height: rem(70);
          margin-left: rem(14);
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
  .popup1 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    .popup1-con {
      width: rem(600);
      height: rem(925);
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin: auto;
      .popup1-con-text {
        width: rem(600);
        height: rem(843);
        transform: translateY(rem(82));
        .popup1-con-text-bg {
          width: 100%;
          height: 100%;
          background: url(../../images/p5Alice-popup.png) no-repeat center /
            cover;
          animation-iteration-count: infinite;
          .pctb1-text {
            width: rem(393);
            height: rem(112);
            position: relative;
            top: rem(300);
            transform: translateY(-50%);
            margin: auto;
            .pctb1-text-img {
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup-text.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .pctb1-title {
            width: rem(422);
            height: rem(39);
            position: relative;
            top: rem(390);
            transform: translateY(-50%);
            margin: auto;
            .pctb1-title-img {
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup-title.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .pctb1-button {
            width: rem(319);
            height: rem(88);
            position: relative;
            top: rem(480);
            transform: translateY(-50%);
            margin: auto;
            .pctb1-button-img {
              display: block;
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup-button.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .gb {
            position: relative;
            top: rem(520);
            transform: translateY(-50%);
            margin: auto;
            font-size: rem(60);
            text-align: center;
          }
        }
      }
      .popup1-con-icon {
        width: rem(254);
        height: rem(254);
        transform: translate(rem(174), rem(-843));
        .popup1-con-icon-img {
          width: 100%;
          height: 100%;
          background: url(../../images/p5Alice-user-name.png) no-repeat center /
            cover;
          animation-iteration-count: infinite;
        }
      }
    }
  }
  .popup2 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    .popup2-con {
      width: rem(600);
      height: rem(925);
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin: auto;
      .popup2-con-text {
        width: rem(600);
        height: rem(843);
        transform: translateY(rem(82));
        .popup2-con-text-bg {
          width: 100%;
          height: 100%;
          background: url(../../images/p5Alice-popup.png) no-repeat center /
            cover;
          animation-iteration-count: infinite;
          .pctb2-text {
            width: rem(488);
            height: rem(112);
            position: relative;
            top: rem(300);
            transform: translateY(-50%);
            margin: auto;
            .pctb2-text-img {
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup2-text.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .pctb2-title {
            width: rem(535);
            height: rem(39);
            position: relative;
            top: rem(390);
            transform: translateY(-50%);
            margin: auto;
            .pctb2-title-img {
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup2-title.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .pctb2-button {
            width: rem(295);
            height: rem(88);
            position: relative;
            top: rem(480);
            transform: translateY(-50%);
            margin: auto;
            .pctb2-button-img {
              display: block;
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup2-button.png) no-repeat
                center / cover;
              animation-iteration-count: infinite;
            }
          }
          .gb {
            position: relative;
            top: rem(520);
            transform: translateY(-50%);
            margin: auto;
            font-size: rem(60);
            text-align: center;
          }
        }
      }
      .popup2-con-icon {
        width: rem(254);
        height: rem(254);
        transform: translate(rem(174), rem(-843));
        .popup2-con-icon-img {
          width: 100%;
          height: 100%;
          background: url(../../images/p5Alice-user-name.png) no-repeat center /
            cover;
          animation-iteration-count: infinite;
        }
      }
    }
  }
  .liwu {
    font-size: rem(350);
    text-align: center;
  }
  .liwutabox {
    padding: rem(50) rem(30);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: rgba(253, 80, 97, 1);
    font-size: rem(30);
    color: #fff;
    line-height: 1.5;
    transition: all 0.5s;
  }
}
.bounce-enter-active {
  transition: transform 0.3s;
  transform: scale(1, 1);
  // transform:translate(0,0) scale(1,1);  //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.bounce-enter {
  transform: scale(0, 0);
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
}

.bounce-leave-active {
  transition: transform 0.3s;
  transform: scale(0, 0);
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.bounce-leave {
  transform: scale(1, 1);
  // transform: translate(0,0) scale(1,1); //left
}

.bounce2-enter-active {
  transition: transform 0.3s;
  transform: scale(1, 1);
  // transform:translate(0,0) scale(1,1);  //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.bounce2-enter {
  transform: scale(0, 0);
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
}

.bounce2-leave-active {
  transition: transform 0.3s;
  transform: scale(0, 0);
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.bounce2-leave {
  transform: scale(1, 1);
  // transform: translate(0,0) scale(1,1); //left
}

.liwuta-enter-active {
  // transform: scale(1,1);
  opacity: 1;
  // transform:translate(0,0) scale(1,1);  //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.liwuta-enter {
  // transform: scale(0,0);
  opacity: 0;
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
}

.liwuta-leave-active {
  // transition: transform .5s;
  // transform: scale(0,0);
  opacity: 0;
  // transform: translate(rem(-250),rem(-120)) scale(0,0); //left
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.liwuta-leave {
  // transform: scale(1,1);
  opacity: 1;
  // transform: translate(0,0) scale(1,1); //left
}
</style>
