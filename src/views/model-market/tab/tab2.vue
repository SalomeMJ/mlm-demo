<template>
  <div class="border-radius-5 bg-white modelTab" :style="{'height':activeName=='first'?'calc(100% - 41px)':'100%'}">
    <el-tabs id="tabs" v-model="activeName" class="h100" type="border-card" @tab-click="handleClick">
      <el-select v-model="model" class="mr-15 ml-5" placeholder="请选择">
        <el-option
          v-for="item in modelList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-tab-pane label="稳定性分析" name="first" class="overflow-y-auto" />
      <div v-if="activeName=='first'" class="tabCon  h100"><tab1 /></div>
      <el-tab-pane label="特征分析" name="second" />
      <div v-if="activeName=='second'" class="tabCon"><tab2 /></div>
      <el-tab-pane label="审批结果分析" name="third" />
      <div v-if="activeName=='third'" class="tabCon"><tab3 /></div>
      <el-tab-pane label="模型效果分析" name="four" />
      <div v-if="activeName=='four'" class="tabCon"><tab4 /></div>
    </el-tabs>
    <!-- <p v-if="model===''" class="noData">请先选择策略、模型</p> -->
  </div>
</template>

<script>
import { getModelStrategy } from '@/api/model-market/model-strategy'
import Tab1 from './monitor-summary/tab1/index'
import Tab2 from './monitor-summary/tab2/index'
import Tab3 from './monitor-summary/tab3/index'
import Tab4 from './monitor-summary/tab4/index'
export default {
  name: 'ModelMarket',
  components: { Tab1, Tab2, Tab3, Tab4 },
  data() {
    return {
      activeName: 'first',
      strategyList: null,
      strategy: '',
      strategySearch: '',
      modelList: '',
      model: '',
      modelSearch: ''
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    strategyFilter(val) {
      this.value = val
      if (val) {
        this.strategyList = this.strategyListCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.strategyList = this.strategyListCopy
      }
    },
    modelFilter(val) {
      this.value = val
      if (val) {
        this.modelList = this.modelListCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.modelList = this.modelListCopy
      }
    },
    initData() {
      getModelStrategy().then(response => {
        this.strategyList = response.data.strategylist
        this.modelList = response.data.modellist
        this.model = this.modelList[0].label
      })
    },
    handleClick(tab, event) {
    },
    initOptions(e) {
      this.values = e
    }
  }
}
</script>

<style lang="scss" scoped>
.modelTab{
  height:calc(100% - 45px);
  border-radius: 3px;
>>> .el-tabs .el-tabs__header{
    border-bottom:1px solid #d9d9d9 !important;
  }
  .el-tabs--border-card{
    box-shadow:none !important;
  }
  >>>.el-tabs .el-tabs__nav .el-tabs__item{
    width: 120px !important;
    height: 32px !important;
    background: #F6F6F6 !important;
    border-radius:0 !important;
    font-size: 14px !important;
    font-family: PingFangSC-Regular, PingFang SC !important;
    font-weight: 400;
    color: #999999 !important;
    border-right:1px solid #d9d9d9 !important;
    margin: 0 !important;
  }
  >>>.el-tabs .el-tabs__nav .el-tabs__item.is-active{
      border: 1px solid #00a0e9 !important;
      border-bottom:2px solid #fff !important;
      height: 32px !important;
    border-bottom: 1px solid none !important;
    border-radius:0 !important;
    color: #00a0e9 !important;
    background-color: #fff !important;
  }
  >>>.el-tabs .el-tabs__nav .el-tabs__item:first-child{
    border-top-left-radius: 3px !important;
  }
}

p.noData{
  text-align: center;
   position: absolute;
   top: 50%;
    width: 100%;
    font-size: 14px;
}
.el-tabs{
  height: calc(100% - 52px);
  >>>.el-tabs__content{
    height: calc(100% - 52px);
    // border: 1px solid red;
    overflow-y: auto;
    padding-bottom: 10px;
    padding-top: 20px;
    .tabCon{
      height: calc(100% - 52px);
    }
  }
}
 </style>
