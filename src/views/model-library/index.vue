<template>
  <div class="h100 bg-white border-radius-5 pos-relative">
    <div class="tabContainer h100">
      <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab">
        <el-tab-pane label="全部(63)" name="first" />
        <el-tab-pane v-for="item in projectList" :key="item.projectName" :label="item.projectName" :name="item.projectName" />
        <div class="p-20" style="height:93%;">
          <el-select v-model="values" class=" w-200" placeholder="请选择">
            <el-option
              v-for="item in headList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-model="input"
            class="pull-right"
            placeholder="请输入搜索关键字"
            prefix-icon="el-icon-search"
          />
          <div class="border-d7 border-radius-5 pos-relative mt-20 h100">
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
                <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==4||index==5?'right':'left'" show-overflow-tooltip fixed>
                  <template slot-scope="scope">
                    <span v-if="item.prop!='modelName'&&item.prop!='modelGroup'">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='modelName'" @click="enterModelRecord(scope.row)">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='modelGroup'&&scope.row[item.prop]!='-'" @click="enterModelGroup(scope.row)">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='modelGroup'&&scope.row[item.prop]=='-'" style="color:#333;text-decoration:none;cursor:default;">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='operate'">
                      <i class="icon iconfont iconCopy doingColor" @click="dialogFormVisible = true" />
                    </span>
                  </template>
                </el-table-column>
              </template>
            </el-table>
            <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
          </div>
        </div>
      </el-tabs>
      <el-dialog title="复制模型" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="480">
        <span>复制到项目：</span>
        <el-select v-model="values" placeholder="请选择">
          <el-option
            v-for="item in headList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p class="fs-14 fw-400 mt-20">说明：复制模型时仅复制模型文件以及模型的基本信息、开发信息。</p>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getAssetPool } from '@/api/model-asset/asset-pool'
import PagiNation from '@/components/Pagination/index'
import { getProjectLibrary } from '@/api/project-library/projectLibrary'

export default {
  name: 'ModelLibrary',
  components: { PagiNation },
  data() {
    return {
      tabPosition: 'left',
      activeTab: 'first',
      input: null,
      values: '黎簇',
      paginationData: {
        total: 63,
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
        { label: '负责人', prop: 'head', sortable: false },
        { label: '所属模型组', prop: 'modelGroup', sortable: false },
        { label: '验证事件数量', prop: 'validationEventNum', sortable: false },
        { label: '正在使用事件数量', prop: 'useEventNum', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      projectList: [],
      headList: [
        { value: '黎簇', label: '黎簇' }
      ],
      dialogFormVisible: false
    }
  },
  watch: {
    'activeTab': function(newVal, oldVal) {
      switch (newVal) {
        case 'first':
          this.tableData = this.totalData
          this.paginationData.total = 63
          break
        case '新车预审批(11)':
          this.tableData = []
          for (const item of this.totalData) {
            if (item.project === '新车预审批') {
              this.tableData.push(item)
            }
          }
          this.paginationData.total = 11
          break
        case '二手车审批(15)':
          this.tableData = []
          for (const item of this.totalData) {
            if (item.project === '二手车审批') {
              this.tableData.push(item)
            }
          }
          this.paginationData.total = 15
          break
        case '自营车审批(12)':
          this.tableData = []
          for (const item of this.totalData) {
            if (item.project === '自营车审批') {
              this.tableData.push(item)
            }
          }
          this.paginationData.total = 12
          break
        case '小额信贷审批(14)':
          this.tableData = []
          for (const item of this.totalData) {
            if (item.project === '小额信贷审批') {
              this.tableData.push(item)
            }
          }
          this.paginationData.total = 14
          break
        case '消费贷款审批(11)':
          this.tableData = []
          for (const item of this.totalData) {
            if (item.project === '消费贷款审批') {
              this.tableData.push(item)
            }
          }
          this.paginationData.total = 11
          break
      }
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
      getAssetPool().then((response) => {
        this.tableData = response.data.assetPool
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
      getProjectLibrary().then((res) => {
        this.projectList = res.data.projectList
        for (const item of this.projectList) {
          item.projectName = item.projectName + '(' + item.memberNum + ')'
        }
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    // 模型记录
    enterModelRecord(params) {
      this.$router.push({ path: '/model-library/model-record', query: { modelName: params.modelName, projectName: params.project }})
    },
    // 模型组
    enterModelGroup(params) {
      localStorage.setItem('activeTab', 1)
      this.$router.push({ path: '/model-library/model-operation', query: { projectName: params.project, title: '', modelName: params.modelName, modelGroup: params.modelGroup }})
    }
  }
}
</script>

<style lang="scss" scoped>
.tabContainer{
  height: 100%;
  >>> .el-tabs{
    .el-tabs__header{
    width: 250px;
    height: 100%;
    }
    .el-tabs__content{
      height: 100%;
    }
  }
   >>> .el-tabs__nav{
     border-right:1px solid #eee;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 42px !important;
        line-height: 42px !important;
        list-style: none;
        text-align: left;
         border:none !important;
      }
      div.el-tabs__item:first-child{
        height: 52px !important;
        line-height: 52px !important;
      }
      .el-tabs__item.is-active{
        background: rgba(0,160,233,.1) !important;
        color: #00A0E9 !important;
        border-right: 3px solid #049cef !important;
        font-weight: 600 !important;
      }
    }
.el-input{
    width: 160px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    position: absolute;
    right:20px;
    top:20px;
  }
  >>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
>>> td:nth-child(2) .cell span,td:nth-child(4) .cell span{
  cursor: pointer;
}
>>> td:nth-child(2) .cell span,td:nth-child(4) .cell span{
  color:#00a0e9;
  text-decoration: underline;
}
>>> .el-dialog{
  width: 480px;
      height:237px;
      margin-top: 17% !important;
      .el-dialog__body{
        padding: 30px 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        .el-select  {
          width: 337px;
        }
      }
      .el-dialog__footer{
        z-index:9;
      }
    }
}
.pagination-container{
  bottom: 0;
}
 </style>
