<template lang="pug">
  .infoshow
    el-row(type='flex' class='row-bg' justify='center')
      el-col(:span='8')
        .user
          img(:src='user.avatar').avatar
      el-col(:span='16')
        .userinfo
          .user-item
            .fa.fa-user
            span {{user.name}}
          .user-item
            .fa.fa-cog
            span {{user.idntity === 'manager' ? '管理员' : '普通员工'}}
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.getters.user
    }
  }
}
</script>


<style scoped>
.infoshow {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
