<template>
  <div style="height:100%;" class="p-30">
    <div class="selectOption">
      <picker-time id="timetile" :time-title="timeTitle" />
      <div>
        <span>预警等级</span>
        <el-select v-model="values">
          <el-input
            id="el-input1"
            v-model="value"
            type="text"
            @input="dataFilter"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" />
          </el-input>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>
        <span>执行周期</span>
        <el-select v-model="values">
          <el-input
            id="el-input2"
            v-model="value"
            type="text"
            @input="dataFilter"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" />
          </el-input>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>
        <el-input
          id="el-input3"
          v-model="value"
          type="text"
          placeholder="输入关键字查询"
          @input="dataFilter"
        >
          <i slot="suffix" class="el-input__icon el-icon-search" />
        </el-input>
      </div>
      <div style="text-align:right">
        <el-button type="primary" plain>指标管理</el-button>
        <el-button type="primary" plain>新建预警规则</el-button>
      </div>
    </div>
    <el-table
      v-if="tableData.length!=0"
      class="system-table"
      :data="tableData"
      style="width: 100%"
      height="71%"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" align="left" fixed>
          <template scope="scope">
            <span v-if="index!=7">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="index==7">
              <span v-show="scope.row.levoperateel.invalid" class="errorColor"> 失效</span>
              <i v-show="scope.row.levoperateel.invalid" class="icon iconfont iconeye icon-f20 doingColor" />
              <i class="icon iconfont icontable-edit icon-f20" :class="{ 'doingColor':!scope.row.levoperateel.enabled,'text-grey-0':scope.row.levoperateel.enabled }" />
              <el-switch
                v-model="scope.row.levoperateel.enabled"
              />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
  </div>
</template>

<script>
import PickerTime from '../picker-time/index'
import { getModelRule } from '@/api/monitor-model/model-rule'
import PagiNation from '@/components/Pagination/index'

export default {
  name: 'MonitorRule',
  components: { PickerTime, PagiNation },
  props: {

  },
  data() {
    return {
      optionsCopy: [{
        value: '1',
        label: 'meat'
      }, {
        value: '2',
        label: 'drink'
      }, {
        value: '3',
        label: 'food'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }],
      options: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '一般'
      }, {
        value: '3',
        label: '严重'
      }],
      value: '',
      values: '',
      timeTitle: '预警更新时间',
      pagesize: 10,
      currpage: 1,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableTitle: [
        {
          prop: 'name',
          label: '预警名称',
          sortable: true,
          width: '180'
        },
        {
          prop: 'runTime',
          label: '执行次数',
          sortable: true,
          width: '180'
        },
        {
          prop: 'touchTime',
          label: '触发次数',
          sortable: true,
          width: '180'
        },
        {
          prop: 'level',
          label: '预警等级',
          sortable: true,
          width: '180'
        },
        {
          prop: 'runArea',
          label: '执行周期',
          sortable: true,
          width: '180'
        },
        {
          prop: 'operator',
          label: '操作人',
          sortable: true,
          width: '180'
        },
        {
          prop: 'updateTime',
          label: '预警更新时间',
          sortable: true,
          width: '180'
        },
        {
          prop: 'operate',
          label: '操作',
          sortable: false,
          width: '180'
        }
      ],
      paginationData: {
        total: 11,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        layout: 'total, sizes, prev, pager, next',
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '预警名称', prop: 'name', sortable: true },
        { label: '执行次数', prop: 'operateTime', sortable: true },
        { label: '触发次数', prop: 'touchTime', sortable: true },
        { label: '预警等级', prop: 'level', sortable: true },
        { label: '执行周期', prop: 'runTime', sortable: true },
        { label: '操作人', prop: 'operator', sortable: true },
        { label: '预警更新时间', prop: 'updateTime', sortable: true },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: []
    }
  },
  computed: {
  },
  mounted() {
    this.initData()
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleSizeChange(psize) {
      this.pagesize = psize
    },
    pageChange(item) {
      this.currpage = item.page
      this.pagesize = item.limit
      this.tableData = this.totalData.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
    },
    dataFilter(val) {
      this.value = val
      if (val) {
        this.options = this.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.options = this.optionsCopy
      }
    },
    initData() {
      getModelRule(this.currpage).then((response) => {
        this.tableData = response.data.modelRule
        this.totalData = this.tableData
      })
    },
    initDirective(x) {
      this.currpage = x
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-pagination{
		text-align: right;
  }
  .el-pagination__sizes,.el-pagination__total{
    float: right;
  }
  #timetile >>> .el-range-editor.el-input__inner{
    width: 78%;
    padding: 0;
    padding-left: 3px;
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
    grid-template-columns: 1.7fr 1fr 1fr 1fr 1.3fr;
    // grid-column-gap: 20px;
  }
  .el-table{
    width: 100%;
    overflow-y: auto;
    position: relative;
    border: 1px solid #d7d7d7;
    height: 80%;
    margin-top: 20px;
    >>>div{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    >>> tr{
      >>> th:first-child,>>>th:last-child,>>> td:first-child,>>>td:last-child{
        padding-left: 20px;
      }
    }
  }
</style>
