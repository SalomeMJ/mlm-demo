<template>
  <div style="height:calc(100% - 41px);" class="p-30">
    <div class="selectOption">
      <div>
        <span class="fw-600 mr-10">策略</span>
        <el-select v-model="strategy">
          <el-input
            id="el-input1"
            v-model="strategySearch"
            type="text"
            @input="strategyFilter"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" />
          </el-input>
          <el-option v-for="item in strategyList" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>
        <span class="fw-600 mr-10">模型</span>
        <el-select v-model="model" :disabled="strategy===''?true:false">
          <el-input
            id="el-input2"
            v-model="modelSearch"
            type="text"
            @input="modelFilter"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" />
          </el-input>
          <el-option v-for="item in modelList" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="modelSummary h100">
      <el-tabs id="tabs" v-model="activeName" class="h100" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="模型稳定性分析" name="first" class="overflow-y-auto" />
        <div v-if="activeName=='first'" class="tabCon"><tab1 /></div>
        <el-tab-pane label="特征分析" name="second" />
        <div v-if="activeName=='second'" class="tabCon"><tab2 /></div>
        <el-tab-pane label="审批结果分析" name="third" />
        <div v-if="activeName=='third'" class="tabCon"><tab3 /></div>
        <el-tab-pane label="模型效果分析" name="four" />
        <div v-if="activeName=='four'" class="tabCon"><tab4 /></div>
      </el-tabs>
      <p v-if="model===''" class="noData">请先选择策略、模型</p>
    </div>
  </div>
</template>

<script>
import { getModelStrategy } from '@/api/monitor-model/model-strategy'
import Tab1 from './tab1/index'
import Tab2 from './tab2/index'
import Tab3 from './tab3/index'
import Tab4 from './tab4/index'

export default {
  name: 'MonitorSummary',
  components: { Tab1, Tab2, Tab3, Tab4 },
  props: {

  },
  data() {
    return {
      strategyList: null,
      strategy: '',
      strategySearch: '',
      modelList: '',
      model: '',
      modelSearch: '',
      activeName: ''
    }
  },
  computed: {
  },
  watch: {
    model: function(newVal, oldVal) {
      if (newVal !== '') {
        this.activeName = 'first'
      }
    }
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
p.noData{
  text-align: center;
   position: absolute;
   top: 50%;
    width: 100%;
    font-size: 14px;
}
  #timetile >>> .el-range-editor.el-input__inner{
    width: 68%;
  }
  .el-input--medium {
    width: 95%;
    margin-left: 2.5%;
  }
  .el-input--medium >>> .el-input__suffix{
    right: 15px;
  }
  .selectOption{
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr 1fr 1.6fr;
  }
  .el-tabs >>> .el-tabs__header{
    box-shadow: none;
    border:none;
    padding: 20px 0 7px 0;
  }
  .el-tabs >>> .el-tabs__nav-prev,.el-tabs >>> .el-tabs__nav-next{
    display: none;
  }
   .el-tabs >>> .el-tabs__content{
    padding: 0;
    // height: 63%;
    overflow-y: auto;
  }
  .el-tabs >>> .el-tabs__nav-scroll{
    width: 59%;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0,0,0,.86);
    text-align: center;
    border: 1px solid #EEE;
    background-color: #f6f6f6;
    border-left: 0;
    cursor: pointer;
  }
  .el-tabs >>> .el-tabs__nav-wrap{
    padding-left: 0;
    padding-right: 0;
  }
  .el-tabs >>> .el-tabs__nav-wrap::after{
    display: none;
  }

  .el-tabs >>> .el-tabs__item{
    border-right:1px solid #eee;
  }

  .el-tabs >>> .el-tabs__header .is-active{
    background-color: #00a0e9;
  }
  .el-tabs--border-card>>>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color:#909399;
  }
  .el-tabs--border-card>>>.el-tabs__header .el-tabs__item.is-active:hover {
    color:#fff;
  }
     .el-tabs--border-card{
    background-color: transparent;
    box-shadow: none;
    border:none;
  }
</style>
