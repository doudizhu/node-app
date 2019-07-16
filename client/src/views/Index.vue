<template lang='pug'>
  .index
    HeadNav
    LeftMenu
    router-view
</template>

<script>
import HeadNav from '../components/HeadNav'
import LeftMenu from '../components/LeftMenu'
export default {
  components:{
    HeadNav,
    LeftMenu,
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
