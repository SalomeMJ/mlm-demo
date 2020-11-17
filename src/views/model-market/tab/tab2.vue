<template>
  <div class="h100 border-radius-5 bg-white">
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
.el-tabs{
  >>>.el-tabs__content{
    overflow-y: auto;
  }
}
 </style>
