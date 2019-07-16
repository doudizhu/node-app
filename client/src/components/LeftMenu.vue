<template lang="pug">
el-row.menu_page
  el-col(:span='12')
    el-menu(
      mode="vertical"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#409eff" 
    ).el-menu-vertical-demo
      router-link(to='/home')
        el-menu-item(index='0')
          i.fa.fa-margin.fa-server
          span(slot='title') 首页
      template(v-for='item in items')
        el-submenu(v-if='item.children', :index='item.path', :key='item.path')
          template(slot='title')
            i(:class="'fa fa-margin '+item.icon")
            span(slot='title') {{item.name}}
          router-link(v-for='(citem,cindex) in item.children', :to='citem.path', :key='cindex')
            el-menu-item(:index='citem.path')
              span(slot='title') {{citem.name}}
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          icon: 'fa-money',
          name: '资金管理',
          path: 'fund',
          children: [
            {path:'fundlist',name:'资金流水'}
          ],
        },
        {
          icon: 'fa-asterisk',
          name: '信息管理',
          path: 'info',
          children: [
            {path:'infoshow',name:'个人信息'}
          ],
        }
      ]
    }
  }
}
</script>


<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
