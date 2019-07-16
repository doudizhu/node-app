<template lang='pug'>
  .index
    HeadNav
    router-view
</template>

<script>
import HeadNav from '../components/HeadNav'
export default {
  components:{
    HeadNav
  }
}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
