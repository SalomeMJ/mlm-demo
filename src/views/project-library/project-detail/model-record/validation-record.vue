<template>
  <div class="table-container">
    <el-table
      v-if="tableData.length!=0"
      class="system-table"
      :data="tableData"
      style="width: 100%;"
      height="80%"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" align="left" fixed>
          <template slot-scope="scope">
            <span v-if="index!=7">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="index==7">
              {{ scope.row[item.prop] }}
              <i class="icon iconfont icontoright icon-f20 doingColor" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
  </div>
</template>

<script>
import { getValidationRecord } from '@/api/project-library/model-record/validation-record'
import PagiNation from '@/components/Pagination/index'

export default {
  name: 'ValidationRecord',
  components: { PagiNation },
  data() {
    return {
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
        { label: '事件编号', prop: 'eventNo', sortable: false },
        { label: '事件名称', prop: 'eventName', sortable: false },
        { label: '负责人', prop: 'head', sortable: false },
        { label: '状态', prop: 'statu', sortable: false },
        { label: '验证时间', prop: 'validationTime', sortable: false },
        { label: 'K-S', prop: 'K-S', sortable: false },
        { label: 'AUC', prop: 'AUC', sortable: false },
        { label: 'PSI', prop: 'PSI', sortable: false }
      ],
      tableData: [],
      totalData: []
    }
  },
  created() {
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
      getValidationRecord(this.currpage).then((response) => {
        this.tableData = response.data.assetPool
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

 </style>
