<template>
  <div class="h100 border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+title+$route.query.modelGroup" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-bold">{{ $route.query.modelGroup }}</span>
        <p class="fs-12 fw-400 text-grey-2">用于贷前审批</p>
        <p class="fs-14 fw-400 text-grey-2">
          <span>模型数量：123</span>
          <span class="ml-20 mr-20">模型组负责人：黎簇</span>
          <span class="ml-20">模型组创建时间：2020.08.09-12:00:09</span>
        </p>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane label="模型列表" name="first" />
          <span v-if="activeTab=='first'" class="addValidationEvent" @click="dialogFormVisible = true">添加模型到模型组</span>
          <tab1 v-if="activeTab=='first'" />
          <el-tab-pane label="模型组操作日志" name="second" />
          <tab2 v-if="activeTab=='second'" />
        </el-tabs>
      </div>
      <el-dialog title="添加模型到模型组" :visible.sync="dialogFormVisible" :modal-append-to-body="false" width="900">
        <el-form :model="form">
          <div style="height:32px;">
            <span class="mr-20 text-grey-1 fs-14 fw-bold ver-middle">模型：123</span>
            <span class="mr-20 text-grey-1 fs-14 fw-bold ver-middle">已选模型：123</span>
            <el-input
              v-model="input"
              class="pull-right"
              placeholder="请输入搜索关键字"
              prefix-icon="el-icon-search"
            />
          </div>
          <div class="mt-10">
            <el-table
              v-if="tableData.length!=0"
              ref="multipleTable"
              class="system-table"
              :data="tableData"
              style="width: 100%;"
              height="328"
              :default-sort="{prop: 'name', order: 'descending'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                width="35"
              />
              <template v-for="(item,index) in headArr">
                <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==2||index==3?'right':'left'" show-overflow-tooltip fixed>
                  <template slot-scope="scope">
                    <span v-if="item.prop!='modelName'&&item.prop!='modelGroup'">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='modelName'" @click="enterModelRecord(scope.row)">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='modelGroup'" @click="enterModelGroup(scope.row)">
                      {{ scope.row[item.prop] }}
                    </span>
                  </template>
                </el-table-column>
              </template>
            </el-table>
            <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
// import { getUrlParams } from '@/utils/getUrlParams'
import { getAssetPool } from '@/api/model-asset/asset-pool'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import PagiNation from '@/components/Pagination/index'
import { getUrlParams } from '../../../../utils/getUrlParams'

export default {
  name: 'ModelRecord',
  components: { HeadTitle, Tab1, Tab2, PagiNation },
  data() {
    return {
      back: true,
      activeTab: 'first',
      title: null,
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
        { label: '模型编号', prop: 'modelNo', sortable: false },
        { label: '模型名称', prop: 'modelName', sortable: false },
        { label: '正在使用事件数量', prop: 'useEventNum', sortable: false },
        { label: '验证事件数量', prop: 'validationEventNum', sortable: false },
        { label: '修改时间', prop: 'updateTime', sortable: false }
      ],
      multipleSelection: [],
      input: '',
      tableData: [],
      totalData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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
      this.handleSelectionChange(this.multipleSelection)
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
      this.title = getUrlParams().eventName === undefined ? '模型资产池>' : '使用事件>'
      if (getUrlParams().title === '') {
        this.title = ''
      }
      getAssetPool().then((response) => {
        this.tableData = response.data.assetPool
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val
    },
    initDirective(x) {
      this.currpage = x
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  height: 94%;
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 105px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    p{
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
  .model-record{
    height: calc(100% - 125px);
    background: #FFFFFF;
    border-radius: 5px;
  }
  >>> .el-tabs{
    height: 100%;
    .el-tabs__content{
          height: calc(100% - 72px);
    margin: 20px 30px;
    overflow-y: auto;
    }
  }
  >>> .el-tabs__nav{
    border-top:none;
    .el-tabs__item{
      height: 32px;
      background: #F6F6F6;
      line-height: 32px;
      border-top:1px solid #D9D9D9;
    }
    .el-tabs__item:hover{
      color:#00a0e9;
    }
    .el-tabs__item:first-child{
      border-radius: 2px 0 0 0;
    }
     .el-tabs__item:last-child{
      border-radius: 0 2px 0 0;
    }
    .el-tabs__item.is-active{
      border:1px solid #00a0e9;
      border-bottom:1px solid transparent;
      color:#00a0e9;
      background-color: #fff;
    }
  }
  .pull-right{
    width: 160px;
    height: 32px;
    border-radius: 2px;
  }
  >>> .el-dialog{
      height: 555px;
      .el-dialog__footer{
        z-index:9;
      }
    }
    .mt-10{
      border:1px solid #D9D9D9;
      border-radius: 5px;
    }
  .pagination-container{
    // width: 97%;
    height: 52px;
    padding: 10px 20px 20px 15px;
    bottom:60px;
    position: static;
    >>> .el-pagination__sizes{
      right: 20px;
    }
    >>> .el-pagination__total{
      right: 142px;
    }
  }
}

.addValidationEvent{
  border: none;
  background: #fff;
  text-decoration: underline;
  cursor: pointer;
  position: fixed;
  top: 255px;
  height: 20px;
  right: 50px;
  color:#00a0e9;
}
 </style>
