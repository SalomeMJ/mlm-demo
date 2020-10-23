<template>
  <div>
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
      <div v-for="(item, index) in projectList" :key="index" class="conItem">
        <div class="item-top">
          <span class="fs-16 fw-bold text-grey-0 ver-middle">{{ item.projectName }}</span>
          <i class="icon iconfont iconxiangqing doingColor pull-right cursor-pointer fs-20  ver-middle" />
        </div>
        <div class="item-cen">
          <div class="item-cen-top mt-10 mb-10">
            <el-tag v-if="!item.projectPrimary">公开</el-tag>
            <el-tag v-if="item.projectPrimary" type="warning">私有</el-tag>
          </div>
          <div class="item-cen-cen fs-12 fw-400 text-grey-0">
            msssss
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
  </div>
</template>

<script>
import PickerTime from '@/components/PickerTime/index'
import { getProjectLibrary } from '@/api/projectLibrary'

export default {
  name: 'ProjectLibrary',
  components: { PickerTime },
  data() {
    return {
      options: [{
        value: '1',
        label: '公开'
      }, {
        value: '2',
        label: '私有'
      }],
      value: '1',
      input: '',
      projectList: []
    }
  },
  created() {
  },
  mounted() {
    this.getProjectList()
  },
  methods: {
    getProjectList() {
      getProjectLibrary().then((res) => {
        this.projectList = res.data.projectList
      })
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
    grid-template-columns: repeat(auto-fit, 319px);
    grid-gap:20px 20px;
    // border:1px solid red;
    div.conItem{
      width: 100%;
      height: 150px;
      background: #FFFFFF;
      box-shadow: 0px 0px 9px 5px rgba(171, 183, 195, 0.5);
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
  }
 </style>
