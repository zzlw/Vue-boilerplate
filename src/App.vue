<template>
  <div>
    <headTop/>
    <router-view/>
  </div>
</template>

<script>
import headTop from 'components/header/header';

export default {
  components:{
      headTop
  },
}
</script>

<style>
@import './style/common';

</style>
