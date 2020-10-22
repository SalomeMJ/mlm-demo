<template>
  <div class="con text-grey-0 mt-10 system-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        prop="ordernum"
        label="序号"
        width="150px"
      />
      <el-table-column
        prop="ruleNo"
        label="规则编号"
      />
      <el-table-column
        prop="name"
        label="规则名称"
      />
      <el-table-column
        prop="ruleDesc"
        label="规则描述"
      />
      <el-table-column
        prop="touchCount"
        label="触碰次数"
      />
      <el-table-column
        prop="runSum"
        label="运行总数"
      />
      <el-table-column
        prop="touchRate"
        label="触碰率"
      />
    </el-table>
    <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
  </div>
</template>
<script>
import { getRuleAnalysis } from '@/api/monitor-model/rule-analysis'
import PagiNation from '@/components/Pagination/index'

export default {
  name: 'MonitorCent',
  components: { PagiNation },
  props: {

  },
  data() {
    return {
      tableData: null,
      totalData: null,
      pagesize: 10,
      currpage: 1,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      paginationData: {
        total: 4,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        layout: 'total, sizes, prev, pager, next',
        background: false,
        autoScroll: false,
        hidden: false
      }
    }
  },
  computed: {
  },
  mounted() {
    this.getTotal()
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
    initDirective(x) {
      this.currpage = x
    },
    pageChange(item) {
      this.currpage = item.page
      this.pagesize = item.limit
      this.tableData = this.totalData.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
    },
    getTotal() {
      getRuleAnalysis().then((res) => {
        this.tableData = res.data.results
        for (const item in this.tableData) {
          this.tableData[item].ordernum = Number(item) + 1
          this.tableData[item].hasChildren = true
          this.tableData[item].touchRate = '66.67%'
          this.tableData[item].children = this.tableData[item].children.doHit.concat(this.tableData[item].children.doUnhit)
          for (const it in this.tableData[item].children) {
            this.tableData[item].children[it].touchRate = '66.67%'
            this.tableData[item].children[it].ordernum = '命中'
            if (it > 1) {
              this.tableData[item].children[it].ordernum = '未命中'
            }
          }
        }
        this.totalData = this.tableData
      })
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve(tree.children)
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.system-table{
  table{
     tbody{
      tr{
        td{
          border:none;
          background-color: rgb(237, 240, 245);
        }
      }
     }
  }
}
</style>

