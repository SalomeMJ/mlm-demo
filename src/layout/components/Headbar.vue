<template>
  <el-row>
    <el-col :span="20">
      <div class="grid-content bg-purple inline-block"><i class="icon iconfont icon1207-zhongying-slogan-fanbai1" style="font-size:22px;" /></div>
    </el-col>
    <el-col :span="4">
      <i class="icon iconfont iconxiaolingdang fs-22 mr-20 fw-bold" />
      <i class="icon iconfont iconedit mr-20 fw-bold" />
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">
            <i class="icon iconfont iconFemale" style="vertival-align:top;" />
            <span>admin</span>
          </template>
          <el-menu-item index="1-1" @click="logout()">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Head',
  components: { },
  props: {

  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-menu-demo{
    display: inline-block;
    vertical-align: middle;
    width: 67px;
  }
  .el-col-4{
    text-align: right;
  }
  i{
    vertical-align: middle;
  }
  li >>> .el-submenu__title{
    padding: 0;
    span {
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
    }
    i{
      vertical-align: top;
    }
  }
  li >>> .el-icon-arrow-down{
    display: none;
  }
</style>
