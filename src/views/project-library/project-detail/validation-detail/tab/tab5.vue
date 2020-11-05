<template>
  <div class=" m-20 bg-white cutoff">
    <div class="leftBtn pull-left">
      好坏测算切换
    </div>
    <div class="rightCon">
      <div class="cutoffHead pl-20 pr-20 pt-10 mb-10">
        <div class="cutoffItem display-inlineblock">
          <span class="fw-bold display-inlineblock fs-14 text-black-0">{{ testChangeGood?'好':'坏' }}客户测算</span>
          <div class="cutoffRate display-inlineblock ml-30">
            <span class="display-inlineblock fs-14 text-grey-0">查全率</span>
            <label class="display-inlineblock pl-10 pr-10 ml-5 rate">
              <el-input
                v-model="input"
                class="form-control fs-14 text-grey-0"
              />
              <span>%&nbsp;&nbsp;~</span>
              <el-input
                v-model="input"
                class="form-control fs-14 text-grey-0"
              />
              <span>%</span>
            </label>
          </div>
          <div class="cutoffRate display-inlineblock ml-30 ">
            <span class="fs-14 text-grey-0">查准率</span>
            <label class="display-inlineblock pl-10 pr-10 ml-5 rate">
              <el-input
                v-model="input"
                class="form-control fs-14 text-grey-0"
              />
              <span>%&nbsp;&nbsp;~</span>
              <el-input
                v-model="input"
                class="form-control fs-14 text-grey-0"
              />
              <span>%</span>
            </label>
          </div>
          <el-button type="primary" class="ver-middle ml-20">查找</el-button>
        </div>
        <el-button type="primary">{{ cutoffChart?'切换数据':'切换图表' }}</el-button>
      </div>
      <div class="tableContainer">
        <el-table
          v-if="tableData.length!=0"
          class="system-table"
          :data="tableData"
          style="width: 100%"
          height="100%"
          :default-sort="{prop: 'name', order: 'descending'}"
          @selection-change="handleCurrentChange"
        >
          <template v-for="(item,index) in headArr">
            <el-table-column :key="index" :prop="item.prop" :style="{'width':index==1?'10%':''}" :sortable="item.sortable" :label="item.label" :align="index==0?'left':'right'" fixed>
              <template slot-scope="scope">
                <span>
                  {{ scope.row[item.prop] }}
                </span>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <p class="mt-10 ml-10">
          <i class="icon iconfont iconwarn text-yellow-0 ver-middle" />
          <span class="fs-14 fw-400 text-grey-2 ver-middle">有背景颜色的区间为符合条件cut-off自动拒绝线</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { getCutOffbad } from '@/api/project-library/validation-data/cutoffbad'

export default {
  name: 'TabTwo',
  // components: { PickerTime, PagiNation },
  props: {
  },
  data() {
    return {
      testChangeGood: true,
      cutoffChart: true,
      input: '',
      headArr: [
        { label: '分数段', prop: 'scorearea', sortable: false },
        { label: '区间人数', prop: 'areaprople', sortable: false },
        { label: '累计人数', prop: 'totalpeople', sortable: false },
        { label: '区间好客户数', prop: 'goodnum', sortable: false },
        { label: '累积好客户占比', prop: 'goorate', sortable: false },
        { label: '区间坏客人数', prop: 'badnum', sortable: false },
        { label: '累计坏客户数', prop: 'totalbadnum', sortable: false },
        { label: '累计坏客户占比', prop: 'badrate', sortable: false },
        { label: '坏客户查全率', prop: 'recalration', sortable: false },
        { label: '坏客户查准率', prop: 'precision', sortable: false }
      ],
      tableData: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    initData() {
      getCutOffbad().then((response) => {
        this.tableData = response.data.cutoffbad
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.cutoff{
  height:calc(100% - 40px);
  overflow-y: auto;
  .leftBtn{
    width: 42px;
    height: 100%;
    color:#00a0e9;
    cursor: pointer;
    border-right: 1px solid #eee;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 42px;
    letter-spacing: 10px;
    font-weight: 600;
  }
  .rightCon{
        display: inline-block;
    width: calc(100% - 42px);
    height: 100%;
    .cutoffHead{
        display: inline-grid;
        grid-template-columns: 1fr 0.1fr;
        width: 100%;
       >>> .el-input,>>>.el-input__inner{
          border:none;
          width: 72px;
          height: 30px;
          display: inline-block;
          background-color: transparent;
          padding-left: 0;
          padding-right: 0;
        }
        label{
          border: 1px solid rgba(0,0,0,0.15);
          height: 32px;
          line-height: 32px;
          border-radius: 3px;
          vertical-align: middle;
        }
        label.error{
          border-color:red;
          background-color: #fff;
        }
        button{
          display: inline-block;
          width: 120px;
          height: 32px;
          text-align: center;
        }
        button.find{
          width: 48px;
        }
      }
  }
}

</style>
