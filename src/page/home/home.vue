<template>
  	<div>
      <p class="text">{{ msg }}</p>
      <p class="coding">Hosted by <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: '集成 Vuex Vue-router http* 等等，让你专注于快速构建业务！',
        }
    },

	  mounted(){
        // 获取当前城市
    },

    components:{

    },

    computed:{
        //将获取的数据按照A-Z字母开头排序

    },

    methods:{
        //点击图标刷新页面

    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .text{
      padding: rem(30);
      font-size: rem(46);
      color: #00CCFF;
      text-align: center;
    }
    .coding{
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      color: #ccc;
    }
</style>
