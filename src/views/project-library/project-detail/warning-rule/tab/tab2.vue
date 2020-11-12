<template>
  <div class="h100">
    <div class="conHead">
      <picker-time />
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="conCen mt-20">
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
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==1?'right':'left'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
    </div>

  </div>
</template>
<script>
import PickerTime from '@/components/PickerTime/index'
import { getTouchRecord } from '@/api/project-library/warning-rule/touch-record'
import PagiNation from '@/components/Pagination/index'

export default {
  name: 'WarningTwo',
  components: { PickerTime, PagiNation },
  data() {
    return {
      input: '',
      paginationData: {
        total: 11,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '执行时间', prop: 'executeTime', sortable: false },
        { label: '预警值', prop: 'executeResult', sortable: false }
      ],
      tableData: [],
      totalData: []
    }
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
      getTouchRecord(this.currpage).then((response) => {
        this.tableData = response.data.results
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    // 模型记录
    enterModelRecord(params) {
      this.$router.push({ path: './model-record', query: { modelName: params.modelName, projectName: this.projectName }})
    }
  }

}
</script>
<style lang="scss" scoped>
.conHead{
  height: 32px;
  width: 100%;
  position: relative;
  >>> .el-input{
    width: 160px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    position: absolute;
    right:0px;
    top:0;
  }
}
.conCen{
  height: calc(100% - 52px);
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
// >>> td:nth-child(2) .cell span{
//   cursor: pointer;
// }
// >>> td:nth-child(2) .cell span,>>> td:nth-child(4) .cell span{
//   color:#00a0e9;
//   text-decoration: underline;
// }
background-color: #fff;
}

</style>
