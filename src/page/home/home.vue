<template>
  	<div>
        <h1>我是df一个导航</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
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
        reload(){
            window.location.reload();
        }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
</style>
