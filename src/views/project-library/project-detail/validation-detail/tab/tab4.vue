<template>
  <div class="tabContainer">
    <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab" @tab-click="handleClick">
      <el-tab-pane label="单变量分析" name="first" />
      <div v-if="activeTab=='first'" class="p-20">
        <span class="fs-14 fw-bold text-gret-0">特征</span>
        <el-select v-model="value" class="ml-20 mb-20" placeholder="请选择" @change="changeFeature(value)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="bg-white p-5">
          <bar-chart :bar-chat="barOptions1" />
        </div>
        <div>
          <div class="left border-right-ee">
            <scatter-chart :scatter-chart="scatterOptions" />
          </div>
          <div class="pull-right right">
            <bar-charty :bar-chat="barOptions" />
          </div>
        </div>
      </div>
      <el-tab-pane label="特征重要性" name="second" />
      <div v-if="activeTab=='second'" style="padding-left:50px">
        <bar-charty :bar-chat="barOptions2" />
      </div>

      <el-tab-pane label="特征风险趋势" name="third" />
      <div v-if="activeTab=='third'" class="p-20 featurerisk">
        <img src="@/assets/modal-risk.png" alt="">
      </div>
    </el-tabs>
  </div>
</template>
<script>
import BarChart from '@/components/Echats/BarChart'
import BarCharty from '@/components/Echats/BarChartY'
import scatterChart from '@/components/Echats/Scatter'
import { getUnivariate } from '@/api/project-library/validation-data/univariate'
import { getFeatureImportance } from '@/api/project-library/validation-data/feature-importance'

export default {
  name: 'TabOne',
  components: { BarChart, BarCharty, scatterChart },
  props: {
    projectDetail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tabPosition: 'left',
      activeTab: 'first',
      activeIndex: null,
      options: [],
      value: '',
      barOptions: {
        title: '分数段内人群分布情况',
        className: 'scoreOverview',
        legend: ['人群分布'],
        width: '100%',
        height: '190px',
        yData: null,
        series: [],
        axisLabel: {
          show: false
        }
      },
      abstract: null,
      continute: null,
      barOptions1: {
        title: '单个变量申请单分布情况',
        className: 'scoreOverview',
        headList: ['实际样本', '开发样本'],
        width: '100%',
        height: '188px',
        interval: 1500,
        xShow: true,
        timeRange: [],
        yName: '',
        series: []
      },
      scatterOptions: {
        title: '特征分布散点图',
        xName: '',
        yName: 'score',
        width: '100%',
        height: '190px',
        series: []
      },
      barOptions2: {
        title: '',
        className: 'scoreOverview',
        legend: [''],
        width: '100%',
        height: '465px',
        yData: null,
        series: [],
        axisLabel: {
          interval: 0,
          inside: true,
          textStyle: {
            color: 'rgba(0,0,0,0.56)'
          }
        }
      }
    }
  },
  mounted() {
    this.handleClick({ index: '0' })
  },
  methods: {
    handleClick(e) {
      this.activeIndex = e.index
      if (e.index === '0') {
        getUnivariate().then((res) => {
          this.options = []
          this.featureList = res.data.univariate.featureList
          for (const item in this.featureList) {
            this.options.push(
              {
                value: item,
                label: this.featureList[item].value
              }
            )
          }
          this.abstract = {
            bar1: {
              range: res.data.univariate.abstract.range1,
              amount: res.data.univariate.abstract.amount1
            },
            bar2: {
              range: res.data.univariate.abstract.range3,
              amount: res.data.univariate.abstract.amount3
            },
            bar3: {
              amount: res.data.univariate.abstract.amount2
            }
          }
          this.continute = {
            bar1: {
              range: res.data.univariate.continute.range1,
              amount: res.data.univariate.continute.amount1
            },
            bar2: {
              range: res.data.univariate.continute.range3,
              amount: res.data.univariate.continute.amount3
            },
            bar3: {
              amount: res.data.univariate.continute.amount2
            }
          }
          this.changeFeature(0)
        })
      } else if (e.index === '1') {
        getFeatureImportance().then((res) => {
          const orders = res.data.featureList[1]['TEST']
          const featureAll = []
          const featureImportantDataAll = []
          const featureData = []
          for (const k in orders.featureImportances) {
            const features = {
              name: k,
              value: orders.featureImportances[k]
            }
            featureData.push(features)
          }
          const featureDataResult = featureData
          featureDataResult.sort(this.sortJ)
          for (const k in featureDataResult) {
            if (featureDataResult.hasOwnProperty(k)) {
              featureAll.push(featureDataResult[k].name)
              featureImportantDataAll.push(featureDataResult[k].value.toFixed(4))
            }
          }
          const feature = featureAll.slice(0, 20)

          const featureImportantData = featureImportantDataAll.slice(0, 20)
          const newData = []
          for (const item in feature.reverse()) {
            newData.push(featureImportantData.reverse()[item] + '    ' + feature.reverse()[item])
          }
          this.barOptions2.yData = newData
          this.barOptions2.series = [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            itemStyle: {
              normal: {
                color: 'rgba(0,160,233,0.6)'
              }
            },
            data: featureImportantData.reverse()
          }]
        })
      }
    },
    changeFeature(index) {
      index = Number(index)
      this.value = this.options[index].value
      this.activeIndex = index
      this.continuteFeature = index % 2 === 0
      this.currentData = this.continuteFeature ? this.continute : this.abstract
      this.barOptions1.timeRange = this.currentData.bar1.range
      this.barOptions1.series = [{
        data: this.currentData.bar1.amount,
        color: '#5B8FF9',
        type: 'bar'
      }
      ]
      this.barOptions.yData = this.currentData.bar2.range
      this.barOptions.series = [
        {
          name: '人群分布',
          barWidth: 5,
          barGap: 10,
          type: 'bar', color: '#5B8FF9',
          data: this.currentData.bar2.amount
        }
      ]

      this.scatterOptions.xName = this.options[index].label
      this.scatterOptions.series = [{
        symbolSize: 7, color: '#5B8FF9',
        data: this.currentData.bar3.amount,
        type: 'scatter'
      }]
    },
    sortJ(a, b) {
      return b.value - a.value
    }
  }

}
</script>
<style lang="scss" scoped>
.tabContainer{
  height: 100%;
  >>> .el-tabs{
    .el-tabs__header{
    width: 200px;
    height: 100%;
    }
  }
   >>> .el-tabs__nav{
     border-right:1px solid #eee;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 60px !important;
        line-height: 60px !important;
        list-style: none;
        text-align: left;
         border:none !important;
      }
      .el-tabs__item.is-active{
        background: rgba(0,160,233,.1) !important;
        color: #00A0E9 !important;
        border-right: 3px solid #049cef !important;
        font-weight: 600 !important;
      }
    }
}
.left{
  display: inline-block;
  margin-top: 20px;
    width: 70%;
    height: 300px;
    border-right:1px solid #d7d7d7;

}
.right{
  display: inline-block;
    width: 28%;
    margin-right: 20px;
    margin-top: 20px;

}
.featurerisk{
  height: 100%;
    text-align: center;
    img{
      display: inline-block;
      margin-top: 1%;
    }
}
</style>
