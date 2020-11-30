<template>
  <div class="h100">
    <div class="conCen">
      <div class="h100 w-200 display-inlineblock border-right-d9 tabContainer">
        <el-tree
          :data="root"
          :props="defaultProps"
          highlight-current
          node-key="id"
          :current-node-key="currentNodeKey"
          accordion
          @node-click="handleNodeClick"
        >
          <span slot-scope="{ data }" class="custom-tree-node">
            {{ data.name }}
            <i class="icon iconfont iconxiangqing pull-right" @click="editDocument(data)" />
          </span>
        </el-tree>
      </div>
      <div class="h100 bg-grey-4 pull-right">
        <div class="h100 conItem memberCon">
          <div class=" bg-white ">
            <el-table
              v-if="tableData.length!=0"
              class="system-table"
              :data="tableData"
              style="width: 100%;border-radius:0;"
              height="100%"
              :default-sort="{prop: 'name', order: 'descending'}"
              @selection-change="handleCurrentChange"
            >
              <template v-for="(item,index) in headArr">
                <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index===2?'right':'left'" show-overflow-tooltip fixed>
                  <template slot-scope="scope">
                    <span v-if="item.prop!='operate'">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='operate'">
                      <i class="icon iconfont iconxiazai doingColor mr-10" style="font-size:16px;" />
                      <i class="icon iconfont iconDelete text-red-0" style="font-size:16px;" />
                    </span>
                  </template>
                </el-table-column>
              </template>
            </el-table>
            <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PagiNation from '@/components/Pagination/index'
import { getModelDocument } from '@/api/project-library/model-record/model-document'
export default {
  name: 'TabOne',
  components: { PagiNation },
  data() {
    return {
      input: '',
      roleList: [],
      tabPosition: 'left',
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
        { label: '文档名称', prop: 'documentName', sortable: false },
        { label: '操作人', prop: 'operator', sortable: false },
        { label: '操作时间', prop: 'operateTime', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      activeTab: '0',
      authorityList: [],
      root: [],
      roots: [],
      currentNodeKey: 0,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      defaultKeys: null,
      addMember: false
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleNodeClick(data) {
      this.currentNodeKey = data.id
      this.tableData = []
      if (data.id === 0) {
        this.tableData = this.tableData.concat(this.documentList.dataDocu).concat(this.documentList.demandDocu).concat(this.documentList.developDocu)
      } else if (data.id === 1) {
        this.tableData = this.documentList.dataDocu
      } else if (data.id === 2) {
        this.tableData = this.documentList.demandDocu
      } else if (data.id === 3) {
        this.tableData = this.documentList.developDocu
      }
      this.paginationData.total = this.tableData.length
    },
    handleClick(tab, event) {
    },
    initData() {
      getModelDocument().then((res) => {
        this.documentList = res.data.documentList
        this.tableData = this.tableData.concat(this.documentList.dataDocu).concat(this.documentList.demandDocu).concat(this.documentList.developDocu)
        this.paginationData.total = this.tableData.length
        this.root = this.setLabel(res.data.modelDocument, true)
        this.roots = this.setLabel(res.data.modelDocument, false)
      })
    },
    // 递归为权限组添加label
    setLabel(data, num) {
      for (const item of data) {
        item.label = item.name
        if (item.children != null) {
          this.setLabel(item.children)
        }
      }
      return data
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
    },
    editDocument(params) {
      console.log(params)
    }
  }

}
</script>
<style lang="scss" scoped>
.conCen{
height:100%;
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
background-color: #fff;
.pagination-container{
  bottom: 0px;
  padding: 10px 0px 10px 20px  !important;
}
.bg-grey-4{
  display: inline-block;
  width: calc(100% - 200px);
  overflow-y: auto;
}
.tabContainer{
  height: 100%;
  border-radius: 5px 0 0 5px;
  .el-tree{
  border-radius: 5px 0 0 5px;
  }
  >>> .el-tabs{
    .el-tabs__header{
    width: 200px;
    height: 100%;
    border:none;
    padding: 0;
    }
    .el-tabs__content{
      height: 100%;
    }
  }
   >>> .el-tabs__nav{
     width: calc(100% - 1px);
     border:none;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 42px !important;
        line-height: 42px !important;
        background-color: #fff;
        margin-bottom: 0px;
        list-style: none;
        text-align: left;
         border:none !important;
         color:#333;
      }
      div.el-tabs__item:first-child{
        border-radius: 5px 0 0 0;
      }
      div.el-tabs__item:last-child{
        margin-bottom: none;
      }
      .el-tabs__item.is-active{
        background: rgba(0,160,233,0.2) !important;
        color: #00A0E9 !important;
        font-weight: 600;
        border-right:4px solid #00a0e9 !important;
      }
    }
    .conItem{
      width: 100%;
    }
}
}
.memberCon{
  height:80%;
  position: relative;
  .bg-white{
    height: 100%;
  }
}
</style>
