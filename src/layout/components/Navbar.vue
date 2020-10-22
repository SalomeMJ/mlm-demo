<template>
  <div class="navbar">
    <span id="place" />
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <router-link v-for="(item, index) in linkList" :key="index" :to="item.path">
        <el-menu-item :index="index.toString()">
          <i class="icon iconfont" :class="item.icon" /><span>{{ item.name }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      isCollapse: false,
      linkList: [
        { path: '/model-market', icon: 'iconmonititor', name: '模型大盘' },
        { path: '/nuclearsign-center', icon: 'iconmonititor', name: '核签中心' },
        { path: '/project-library', icon: 'iconmonititor', name: '项目库' },
        { path: '/model-library', icon: 'iconmonititor', name: '模型库' }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    background: #272B32;
  }
  .el-menu-vertical-demo{
     background-color: transparent;
     border: none;
  }
  .el-menu-item{
    height: 32px;
    line-height:30px;
    margin-bottom: 20px;
  }
  .el-menu-item >>> span,.el-menu-item >>> i {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255,255,255,0.39);
    vertical-align: top;
  }
  .el-menu-item >>> i{
    font-weight: normal;
    margin-right: 20px;
    margin-top: 5px;
  }
  .router-link-active .el-menu-item{
    background: #00A0E9;
    border-radius: 66px 0px 0px 66px;
  }
  .router-link-active .el-menu-item >>>span,.router-link-active .el-menu-item >>>i{
    color: rgba(255,255,255,1);
  }
  .el-menu-item:hover{
    background: #00A0E9;
    border-radius: 66px 0px 0px 66px;
    span, i{
 color: rgba(255,255,255,1);
    }
  }
  .el-menu-item >>> .router-link-active span,.el-menu-item >>> .router-link-active i{
    color:#fff;

  }
  #place{
    display: inline-block;
    width: 100%;
    height: 1px;
  }
</style>
