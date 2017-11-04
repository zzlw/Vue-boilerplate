<template>
  	<div class="box" :style="{ height: boxHeight() }" >
      <div class="boxbj"></div>
      <div class="boxvideo animated pulse">
      </div>
      <div class="xing"></div>

      <div class="box-bottom">
        <div class="box-bottom-box" @click="liwuClick('#icon-liwu2',true)">
          <div class="box-bottom-box-top one">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liwu"></use>
            </svg>
          </div>
          <div class="box-bottom-box-bottom">巧克力</div>
        </div>
        <div class="box-bottom-box" @click="liwuClick('#icon-hongbao-copy',true)">
          <div class="box-bottom-box-top tow">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hongbao"></use>
            </svg>
          </div>
          <div class="box-bottom-box-bottom">50万存款</div>
        </div>
        <div class="box-bottom-box" @click="liwuClick('#icon-meiguihua1',true)">
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
            <i class="num">0</i>
          </div>
          <div class="bbrco-text">Love</div>
        </div>
      </div>
      <div class="box-left animated pulse" @click="popup">
        <div class="box-leftBox-top tow">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liwu"></use>
          </svg>
        </div>
        <div class="box-leftBox-bottom">主播有礼</div>
      </div>
      <div class="item1">
        <div class="item1-box" @click="liwuClick('#icon-caomei1',true)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caomei1"></use>
          </svg>
        </div>
        <div class="item1-text">草莓+1</div>
      </div>
      <div class="item1 a1" :style="{ top: this.rem(190),left: this.rem(340) }">
        <div class="item1-box" @click="liwuClick('#icon-feiji',true)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-feiji"></use>
          </svg>
        </div>
        <div class="item1-text">飞机+1</div>
      </div>
      <div class="item1 a2" :style="{ top: this.rem(280),left: this.rem(355) }">
        <div class="item1-box" @click="liwuClick('#icon-dangao',true)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dangao"></use>
          </svg>
        </div>
        <div class="item1-text">蛋糕+1</div>
      </div>
      <div class="item1 a2 name" :style="{ top: this.rem(593),left: this.rem(153) }">
        <div class="item1-box">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meiguihua-copy"></use>
          </svg> -->
        </div>
        <div class="item1-title">采集微信名</div>
        <div class="item1-text">你的业绩我承包了和他分手吧跟我走！</div>
      </div>
      <div class="boxtop">
        <div class="box-head-bg"></div>
        <div class="box-head-left"></div>
        <div class="box-head-lBox">
          <div class="userBox">
            <div class="left" @click="liwuClick('#icon-biaoqing_zuichun',true)"></div>
            <div class="right">
              <div class="top">{{ name }}</div>
              <div class="bottom"><span id="sj-length" ></span> 人</div>
            </div>
          </div>
        </div>
        <div class="box-head-right">
          <ul class="imgbox">
            <li class="img" @click="liwuClick('#icon-meinv',true)" v-for="(item, index) in imgDate" :key="index" :style="{ background: `url(${item}) repeat center / cover` }" ></li>
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
                <div class="pctb1-button">
                  <a class="pctb1-button-img animated pulse"></a>
                </div>
              </div>
            </div>
            <div class="popup1-con-icon">
              <div class="popup1-con-icon-img animated pulse"></div>
            </div>
          </div>
          <div class="gb" @click="popup1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
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
                <div class="pctb2-button">
                  <a class="pctb2-button-img animated pulse"></a>
                </div>
              </div>
            </div>
            <div class="popup2-con-icon">
              <div class="popup2-con-icon-img animated pulse"></div>
            </div>
          </div>
          <div class="gb" @click="popup2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
          </div>
        </div>
      </transition>


    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import liwu from 'components/liwu/liwu'
import moLoding from "components/liwu/moLoding"
import p5AliceIcon from "../../images/p5Alice-icon.png"
import mo from "./mo.vue";
import $ from "jquery";
export default {
    data(){
        return {
          imgDate: [p5AliceIcon,p5AliceIcon,p5AliceIcon,p5AliceIcon,p5AliceIcon],
          name: "Alice",
          number: "12521",
          popup1State: false,
          popup2State: false,
          p5AliceIcon,
          liwuData: [],
        }
    },

	  mounted(){
      this.getLoading();
      this.getMusic();


      let _this= this;
      //观看人数波动
      let sjmax= Math.floor(Math.random()*10000000)+100000;
      let sjLength= $("#sj-length").text(sjmax);
      let time= Math.floor(Math.random()*1000)+100;
      let fn= ()=>{
        setTimeout(function() {
          let sj;
          if(Math.floor(Math.random()*2)){
            sj= parseInt(sjLength.text())+Math.floor(Math.random()*2000);
          }else{
            sj= parseInt(sjLength.text())+Math.floor(Math.random()*-300);
          }
          sjLength.text(`${sj}`);
          fn()
        }, time);
      }
      fn();

      let sjTime= Math.random()*2000
      let dzfn= ()=>{
        setTimeout(function() {
          sjTime= Math.random()*2000
          _this.dz();
          dzfn();
        }, Math.floor(Math.random()*sjTime));
      }
      dzfn();





    },

    components:{
      mo,
      liwu,
      moLoding,
    },

    computed:{
      // liwuState(){
      //   return {
      //     data: this.liwuData.data,
      //     state: this.liwuData.state,
      //   }
      // },
    },

    methods:{
      ...mapActions([
          'getLoading',
          "getMusic",
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



        //获取点赞数量
        // var number = $(".num").text();
        //点赞数量+1
        // $(".num").text(Number(number)+1);
        var height = $(window).height();
        var width = $(window).width();
        var x = 100;
        // var index = $(".xing").children('img').length;
        var num = Math.floor(Math.random() * 3 + 1);
        var rand = parseInt(Math.random() * (width*1));
        $(".xing").prepend("<div src="+ p5AliceIcon + " class='dz' ><svg class='icon' aria-hidden='true'><use xlink:href=" + `#${ sjIcons }` + "></use></svg><div/>");
        // $('img:eq('+index+')').attr("src",p5AliceIcon);
        var imgItem = $(".xing > div:first-of-type");
        imgItem.stop().animate({
            bottom: this.rem(height+100),
            opacity: .3,
            left: this.rem(rand),
        },3000,"linear",function(){
            $(this).remove();
        });
      },
      liwuClick(data,state) {
        let that = this;
        // that.liwuData.state= false;
        // console.log(data,22)
        let obj = {
          data,
          state,
        };
        this.liwuData.push(obj);


      }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .box{
      .boxbj{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: url(../../images/p5Alice.png) no-repeat center / cover;
      }
      .boxvideo{
        position: absolute;
        width: rem(199);
        height: rem(599);
        background: url(../../images/p5Alice-alice.png) no-repeat center / cover;
        animation-iteration-count: infinite;
        top: rem(260);
        left: rem(210);
      }
      .xing{
        position: absolute;
        width: 100%;
        height: 100%;
      }
      // .boxfixed{

        .box-bottom{
          position: absolute;
          width: rem(415);
          height: rem(149);
          bottom: rem(40);
          left: rem(60);
          display: flex;
          justify-content: space-between;
          .box-bottom-box{
            width: rem(120);
            height: rem(149);
            .box-bottom-box-top{
              width: rem(110);
              height: rem(110);
              border-radius: 50%;
              background: url(../../images/p5Alice-icon111.png) no-repeat center / cover;
              margin: 0 auto;
              text-align: center;
              font-size: rem(80);
              line-height: 1.3;
            }
            .box-bottom-box-bottom{
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
        .box-bottomRight{
          position: absolute;
          width: rem(80);
          height: rem(128);
          bottom: rem(50);
          right: rem(50);
          .bbrc{
            width: rem(80);
            .bbrco{
              height: rem(80);
              border-radius: 50%;
              background: url(../../images/p5Alice-icon111.png) no-repeat center / cover;
              margin: 0 auto;
              text-align: center;
              line-height: 1.5;
              font-size: rem(20);

              // i{
              //   font-style: normal;
              // }
            }
            .bbrco-text{
              font-size: rem(18);
              color: #ea3372;
              text-align: center;
              line-height: rem(28);
            }
          }
        }
        .box-left{
          position: absolute;
          width: rem(120);
          height: rem(149);
          top: rem(340);
          left: rem(24);
          animation-iteration-count: infinite;
          .box-leftBox-top{
            width: rem(110);
            height: rem(110);
            border-radius: 50%;
            background: url(../../images/p5Alice-icon111.png) no-repeat center / cover;
            margin: 0 auto;
            text-align: center;
            font-size: rem(80);
            line-height: 1.3;
          }
          .box-leftBox-bottom{
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
        .item1{
          position: absolute;
          overflow: hidden;
          height: rem(96);
          top: rem(200);
          left: rem(55);
          .item1-box{
            float: left;
            width: rem(60);
            height: rem(60);
            border-radius: 50%;
            background: #fff;
            text-align: center;
            font-size: rem(55);
            line-height: 1;
          }
          .item1-text{
            float: left;
            border-radius: rem(15);
            background: #fff;
            font-size: rem(18);
            color: #3d3c38;
            line-height: rem(36);
            padding: 0 rem(16);
            margin: rem(10) 0 0 rem(10);
          }
          &.name{
            .item1-title{
              float: left;
              padding: 0 rem(16);
              font-size: rem(18);
              color: #fff;
              line-height: rem(28);
              margin: rem(0) 0 0 0;
              color: #f97596;
            }
            .item1-text{
              margin: rem(0) 0 0 rem(10);
              line-height: rem(28);
              min-width: rem(240);
              max-width: rem(380);
              max-height: rem(28);
              overflow: hidden;
            }
          }
        }
      // }
      .boxtop{
        position: absolute;
        width: 100%;
        height: rem(92);
        top: rem(40);
        .box-head-bg{
          position: absolute;
          width: 100%;
          height: rem(92);
          opacity: .4;
          background: #000;
          top: 0;
          left: 0;
        }
        .box-head-left{
          position: absolute;
          width: rem(212);
          height: rem(92);
          left: 0;
          top: 0;
          background: #000;
          opacity: .7;
          border-radius: 0 rem(50) rem(50) 0;
        }
        .box-head-lBox{
          position: absolute;
          width: rem(212);
          height: rem(92);
          left: 0;
          top: 0;
          .userBox{
            overflow: hidden;
            .left{
              float: left;
              width: rem(75);
              height: rem(75);
              margin-top: rem(7.5);
              margin-left: rem(7);
              background: url(../../images/p5Alice-icon2.png) no-repeat center / cover;
            }
            .right{
              float: right;
              margin: rem(11) rem(24) 0 0;
              .top{
                font-size: rem(30);
                line-height: 1.4;
                font-weight: bold;
                color: #fff;
              }
              .bottom{
                font-size: rem(16);
                line-height: 1.4;
                font-weight: 400;
                color: #fff;
              }
            }
          }
        }
        .box-head-right{
          position: absolute;
          width: rem(430);
          height: rem(70);
          right: 0;
          top: rem(10);
          overflow: hidden;
          .imgbox{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .img{
              width: rem(71);
              height: rem(70);
              margin-left: rem(14);
            }
          }
        }
      }
      .popup1{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
        .popup1-con{
          width: rem(600);
          height: rem(925);
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          margin: auto;
          .popup1-con-text{
            width: rem(600);
            height: rem(843);
            transform: translateY(rem(82));
            .popup1-con-text-bg{
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup.png) no-repeat center / cover;
              animation-iteration-count: infinite;
              .pctb1-text{
                width: rem(393);
                height: rem(112);
                position: relative;
                top: rem(300);
                transform: translateY(-50%);
                margin: auto;
                .pctb1-text-img{
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup-text.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
              .pctb1-title{
                width: rem(422);
                height: rem(39);
                position: relative;
                top: rem(390);
                transform: translateY(-50%);
                margin: auto;
                .pctb1-title-img{
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup-title.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
              .pctb1-button{
                width: rem(319);
                height: rem(88);
                position: relative;
                top: rem(480);
                transform: translateY(-50%);
                margin: auto;
                .pctb1-button-img{
                  display: block;
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup-button.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
            }
          }
          .popup1-con-icon{
            width: rem(254);
            height: rem(254);
            transform: translate(rem(174),rem(-843));
            .popup1-con-icon-img{
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-user-name.png) no-repeat center / cover;
              animation-iteration-count: infinite;
            }
          }
        }
        .gb{
          position: absolute;
          right: rem(30);
          top: rem(30);
          font-size: rem(60);
        }
      }
      .popup2{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
        .popup2-con{
          width: rem(600);
          height: rem(925);
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          margin: auto;
          .popup2-con-text{
            width: rem(600);
            height: rem(843);
            transform: translateY(rem(82));
            .popup2-con-text-bg{
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-popup.png) no-repeat center / cover;
              animation-iteration-count: infinite;
              .pctb2-text{
                width: rem(488);
                height: rem(112);
                position: relative;
                top: rem(300);
                transform: translateY(-50%);
                margin: auto;
                .pctb2-text-img{
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup2-text.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
              .pctb2-title{
                width: rem(535);
                height: rem(39);
                position: relative;
                top: rem(390);
                transform: translateY(-50%);
                margin: auto;
                .pctb2-title-img{
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup2-title.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
              .pctb2-button{
                width: rem(295);
                height: rem(88);
                position: relative;
                top: rem(480);
                transform: translateY(-50%);
                margin: auto;
                .pctb2-button-img{
                  display: block;
                  width: 100%;
                  height: 100%;
                  background: url(../../images/p5Alice-popup2-button.png) no-repeat center / cover;
                  animation-iteration-count: infinite;
                }
              }
            }
          }
          .popup2-con-icon{
            width: rem(254);
            height: rem(254);
            transform: translate(rem(174),rem(-843));
            .popup2-con-icon-img{
              width: 100%;
              height: 100%;
              background: url(../../images/p5Alice-user-name.png) no-repeat center / cover;
              animation-iteration-count: infinite;
            }
          }
        }
        .gb{
          position: absolute;
          right: rem(30);
          top: rem(30);
          font-size: rem(60);
        }
      }
      .liwu{
        font-size: rem(350);
        text-align: center;
      }
    }
    .bounce-enter-active{
      transition: transform .5s;
      // transform: scale(1,1);
      transform:translate(0,0) scale(1,1);  //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }
    .bounce-enter{
      // transform: scale(0,0);
      transform: translate(rem(-250),rem(-120)) scale(0,0); //left
    }

    .bounce-leave-active{
      transition: transform .5s;
      // transform: scale(0,0);
      transform: translate(rem(-250),rem(-120)) scale(0,0); //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .bounce-leave{
      // transform: scale(1,1);
      transform: translate(0,0) scale(1,1); //left
    }

    .bounce2-enter-active{
      transition: transform .5s;
      // transform: scale(1,1);
      transform:translate(0,0) scale(1,1);  //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }
    .bounce2-enter{
      // transform: scale(0,0);
      transform: translate(rem(-250),rem(-120)) scale(0,0); //left
    }

    .bounce2-leave-active{
      transition: transform .5s;
      // transform: scale(0,0);
      transform: translate(rem(-250),rem(-120)) scale(0,0); //left
      transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .bounce2-leave{
      // transform: scale(1,1);
      transform: translate(0,0) scale(1,1); //left
    }

</style>
