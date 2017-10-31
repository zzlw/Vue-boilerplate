<template>
  <h3 class="hello">{{ msg }}</h3>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue-boilerplate'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin';
  .hello{
    text-align: center;
    font-size: rem(64);
    line-height: 3;
  }
</style>
