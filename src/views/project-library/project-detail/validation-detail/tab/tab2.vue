<template>
  <div class="tabContainer">
    <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab" @tab-click="handleClick">
      <el-tab-pane label="分数分布" name="first" />
      <el-table
        v-if="tableData.length!=0&&activeTab=='first'&&activeIndex=='0'"
        class="system-table"
        :data="tableData"
        style="width: 100%"
        height="100%"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==0?'left':'right'">
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <el-tab-pane label="正负样本分布" name="second" />
      <positive-sample v-if="activeTab=='second'" />
      <el-tab-pane label="lift曲线" name="third" />
      <lift v-if="activeTab=='third'" />
      <el-tab-pane label="审批匹配度" name="four" />
      <approval-match v-if="activeTab=='four'" />
      <el-tab-pane label="逾期转化率" name="five" />
      <el-table
        v-if="tableData.length!=0&&activeTab=='five'&&activeIndex=='4'"
        class="system-table"
        :data="tableData"
        style="width: 100%"
        height="100%"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==0?'left':'right'">
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <el-tab-pane label="逾期分布" name="six" />
      <el-table
        v-if="tableData.length!=0&&activeTab=='six'&&activeIndex=='5'"
        class="system-table"
        :data="tableData"
        style="width: 100%"
        height="100%"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==0?'left':'right'">
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-tabs>
  </div>
</template>
<script>
// import ElTables from '@/components/ElTable'
import PositiveSample from '../tab2-container/positive-sample'
import Lift from '../tab2-container/lift'
import ApprovalMatch from '../tab2-container/approval-match'
import { getValidationScore } from '@/api/project-library/validation-data/validation-score'

export default {
  name: 'TabOne',
  components: { PositiveSample, Lift, ApprovalMatch },
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
      tableData: [],
      headArr: []
    }
  },
  mounted() {
    this.handleClick({ index: '0' })
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleClick(e) {
      getValidationScore().then((response) => {
        this.activeIndex = e.index
        if (e.index === '0') {
          this.tableData = response.data.validationDatas.score
          this.headArr = [
            { label: '分数段', prop: 'scoreBin' },
            { label: '区间内样本量', prop: 'sampleNum' },
            { label: '累计样本量占比', prop: 'sampleRate' },
            { label: '正样本数量', prop: 'goodSampleNum' },
            { label: '负样本数量', prop: 'badSampleNum' },
            { label: '区间内正样本占比', prop: 'goodSampleRate' },
            { label: '区间内负样本占比', prop: 'badSampleRate' },
            { label: '累计正样本量占比', prop: 'totalGoodRate' },
            { label: '累计负样本量占比', prop: 'totalBadRate' },
            { label: 'ODDS', prop: 'ODDS' }
          ]
        } else if (e.index === '4') {
          this.tableData = response.data.validationDatas.overdue1
          this.headArr = [
            { label: '分数段', prop: 'score' },
            { label: '客户数量', prop: 'customer' },
            { label: 'M1+逾期数量', prop: 'M1OverdueNum' },
            { label: 'M1+转化率', prop: 'M1Inversion' },
            { label: 'M1+逾期率', prop: 'M1OverdueRate' },
            { label: 'M2+逾期数量', prop: 'M2OverdueNum' },
            { label: 'M2+转化率', prop: 'M2Inersion' },
            { label: 'M2+逾期率', prop: 'M2OversdueRate' },
            { label: 'M3+逾期数量', prop: 'M3Overdue' },
            { label: 'M3+转化率', prop: 'M3Inersion' },
            { label: 'M3+逾期率', prop: 'M3OversdueRate' }
          ]
        } else if (e.index === '5') {
          this.tableData = response.data.validationDatas.overdue2
          this.headArr = [
            { label: '分数段', prop: 'score' },
            { label: '批准数量', prop: 'approvalNum' },
            { label: '占批准比例', prop: 'approvalRate' },
            { label: '无拖欠数量', prop: 'noArrearsNum' },
            { label: '无拖欠占比', prop: 'noArrearsRate' },
            { label: 'M1逾期数量', prop: 'M1OverdueNum' },
            { label: 'M1拖欠占比', prop: 'M1ArreareRate' },
            { label: 'M2逾期数量', prop: 'M1OverdueNum' },
            { label: 'M2拖欠占比', prop: 'M2ArreareRate' },
            { label: 'M3逾期数量', prop: 'M1OverdueNum' },
            { label: 'M3拖欠占比', prop: 'M3ArreareRate' }
          ]
        }
      })
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
</style>
