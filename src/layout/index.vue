<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <el-container class="system-container" width="100%" height="100%">
        <el-header height="60px">
          <Headbar />
        </el-header>
        <el-container>
          <el-aside width="66px" padding="0px">
            <navbar @updateTitles="updateTitle" />
          </el-aside>
          <el-main>
            <nav-title v-if="titles != 'Dashboard'" :titles="titles" />
            <app-main :style="{'height': titles != 'Dashboard' ? 'calc(100% - 48px)': '100%','background': titles !== 'Dashboard'&& titles !== '监控中心' ? '#fff': 'transparent'}" />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Headbar, NavTitle } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import { getNav } from '@/api/nav'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Headbar,
    NavTitle
  },
  mixins: [ResizeMixin],
  data() {
    return {
      menu: null,
      systemMenu: null,
      titles: null,
      test: {
        data: 1,
        set: null
      }
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    // ...mapGetters([
    //   'isOnline'
    // ]),
    classObj() {
      return {
        // hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    this.getMenu()
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    getMenu() {
      this.test.set = function(res) {
        this.test.data = res === undefined ? 1 : res
      }
      getNav().then((response) => {
        this.systemMenu = response.data
        this.menu = this.isOnline ? response.data.onlineMenu : response.data.offlineMenu
        this.titles = this.menu.name === 'Dashboard' ? this.menu[0].child[0].name : 'Dashboard'
      })
    },
    updateTitle(e) {
      this.titles = e
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .el-main{
    padding: 0;
  }
  .app-main{
    padding: 20px;
    overflow: hidden;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  .system-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    list-style: none;
  }
  .el-header, .el-footer {
    color:#333;
   height: 60px;
   line-height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.15);
    padding-left: 0;
    padding-top: 0;
  }
  .el-header >>> .grid-content.inline-block{
    width: 66px;
    height: 60px;
    background: #272B31;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #4B5F76;
    text-shadow: 0px 0px 9px #000000;
  }
  .el-aside {
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
    color: #fff;
    padding: 0;
    margin-bottom: 0;
    background: #272b32;
  }
  .el-main {
    background-color: #eee;
    color: #333;
    box-shadow: 0 4px 10px rgba(0,0,0,.1);
  }
  // .app-main >>> .el-tabs__header{
    // padding: 28px;
    // background-color: #fff;
    // box-shadow: 0 4px 10px rgba(0,0,0,.1);
    // border-bottom-left-radius: 10px;
    //  border-bottom-right-radius: 10px;
    //  .el-tabs__item{
    //    width: 240px;
    //    height: 32px;
    //    line-height: 32px;
    //    text-align: center;
    //  }
    //  .is-active{
    //    color:#fff;
    //  }
    //  .el-tabs__active-bar {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    //   background-color: #00a0e9;
    //   width: 240px;
    //   z-index: 0;
    // }
  // }
</style>
