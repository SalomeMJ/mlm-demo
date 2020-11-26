<template>
  <div style="position:relative;height:100%;">
    <div class="conHead">
      <picker-time />
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="conCen mt-20">
      <div v-for="(item, index) in projectList" :key="index" class="conItem" @click="enterProject(item)">
        <div class="item-top">
          <span class="fs-16 fw-bold text-grey-0 ver-middle">{{ item.projectName }}</span>
        </div>
        <div class="item-cen">
          <div class="item-cen-top mt-10 mb-10">
            <el-tag v-if="!item.projectPrimary">公开</el-tag>
            <el-tag v-if="item.projectPrimary" type="warning">私有</el-tag>
          </div>
          <div class="item-cen-cen fs-12 fw-400 text-grey-0">
            {{ item.projectDesc }}
          </div>
          <div class="item-bottom fs-12 fw-400 text-grey-3">
            <div class="pull-left">
              <i class="icon iconfont iconxiangmu1 mr-5" />{{ item.projectNum }}
              <i class="icon iconfont iconchengyuan mr-5 ml-20" />{{ item.memberNum }}
            </div>
            <div class="pull-right">
              <i class="icon iconfont iconHistory mr-5 ver-middle" /><span class="ver-middle">{{ item.creatTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />

  </div>
</template>

<script>
import PickerTime from '@/components/PickerTime/index'
import { getProjectLibrary } from '@/api/project-library/projectLibrary'

export default {
  name: 'ProjectList',
  components: { PickerTime },
  data() {
    return {
      options: [
        {
          value: '',
          label: '全部'
        }, {
          value: false,
          label: '公开'
        }, {
          value: true,
          label: '私有'
        }],
      value: '',
      input: '',
      projectList: []
    }
  },
  watch: {
    'value': function(newVal, oldVal) {
      const arr = []
      for (const item of this.totalProject) {
        if (item.projectPrimary === newVal) {
          arr.push(item)
        }
      }
      this.projectList = newVal === '' ? this.totalProject : arr
    }
    // 'input': function(newVal, oldVal) {
    //   // const arr = []
    //   // for (const item of this.totalProject) {
    //   //   console.log(Object.keys(item))
    //   //   if (Object.values(item).indexOf(newVal) >= 0) {
    //   //     arr.push(item)
    //   //   }
    //   // }
    //   // console.log(arr)
    //   // this.projectList = newVal === '' ? this.totalProject : arr
    // }
  },
  created() {
  },
  mounted() {
    this.getProjectList()
  },
  methods: {
    getProjectList() {
      getProjectLibrary().then((res) => {
        this.totalProject = res.data.projectList
        this.projectList = res.data.projectList
      })
    },
    enterProject(item) {
      localStorage.setItem('activeTab', 0)
      this.$router.push({ path: '/project-library/project-detail', query: { projectName: item.projectName, projectPrimary: item.projectPrimary }})
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-select >>> .el-input--medium .el-input__inner {
      width: 124px;
  }
  .el-select{
    vertical-align: middle;
  }
  .el-input--prefix{
    width: 160px;
    float: right;
    vertical-align: middle;
  }
  .conCen{
    display: grid;
    grid-template-columns: repeat(auto-fit, 346px);
    grid-gap:20px 20px;
    // border:1px solid red;
    div.conItem{
      width: 100%;
      height: 150px;
      background: #FFFFFF;
      border-radius: 5px;
      padding: 10px;
      position: relative;
      .item-bottom{
        height: 20px;
        position: absolute;
        width: 94%;
        bottom: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    div.conItem:hover{
      box-shadow: 0px 0px 9px 5px rgba(171, 183, 195, 0.5);
      cursor: pointer;
    }
  }
  @media only screen and (min-width:1280px) and (max-width:1440px) {
  .conCen{
      grid-template-columns: repeat(auto-fit, 278px);
    }
  }
    @media only screen and (min-width:1440px) and (max-width:1920px) {
  .conCen{
      grid-template-columns: repeat(auto-fit, 318px);
    }
  }
     @media only screen and (min-width:1920px) {
  .conCen{
      grid-template-columns: repeat(auto-fit, 346px);
    }
  }
 </style>
