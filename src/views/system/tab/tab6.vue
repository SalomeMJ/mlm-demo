<template>
  <div class="h100 p-10 pb-30 pt-20">
    <div class="conHead">
      <span class="fs-18 fw-bold">项目管理</span>
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
      <el-button type="primary" @click="addUser()">创建项目</el-button>
    </div>
    <div class="conCen mt-20">
      <el-table
        v-if="tableData.length!=0"
        class="system-table"
        :data="tableData"
        style="width: 100%;"
        height="90%"
        :default-sort="{prop: 'name', order: 'descending'}"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==4?'right':'left'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span v-if="item.prop!='activated'&&item.prop!='operate'">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="item.prop=='activated'">
                <el-switch
                  v-model="scope.row[item.prop]"
                  :width="28"
                />
              </span>
              <span v-if="item.prop=='operate'" @click="enterUser(scope.row)">
                <i class="icon iconfont icontable-edit doingColor display-inlineblock mr-20" style="font-size:20px;" />
                <i class="icon iconfont iconDelete text-red-0" style="font-size:18px;" />
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
    </div>

  </div>
</template>
<script>
import PagiNation from '@/components/Pagination/index'

import { getProjectLibrary } from '@/api/project-library/projectLibrary'

export default {
  name: 'TabOne',
  components: { PagiNation },
  data() {
    return {
      input: '',
      paginationData: {
        total: 6,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '项目名称', prop: 'projectName', sortable: false },
        { label: '项目描述', prop: 'projectDesc', sortable: false },
        { label: '创建人', prop: 'creator', sortable: false },
        { label: '创建时间', prop: 'creatTime', sortable: false },
        { label: '成员数量', prop: 'memberNum', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getProjectLibrary().then((res) => {
        this.tableData = res.data.projectList
      })
    },
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
    initDirective(x) {
      this.currpage = x
    },
    addUser() {

    },
    enterUser(params) {
      console.log(params)
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
    right:100px;
    top:0;
  }
  >>> button{
    position: absolute;
  }
  >>> button.el-button--primary.el-button--medium{
    width: 80px;
    height: 32px;
    right:0;
  }
}
.conCen{
height:93%;
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
background-color: #fff;
.pagination-container{
  bottom: 40px;
  width:calc(100% - 32px);
}
}
</style>
