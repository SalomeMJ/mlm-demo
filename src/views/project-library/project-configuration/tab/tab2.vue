<template>
  <div class="h100 border-d9 border-radius-5">
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
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==4?'right':'left'" show-overflow-tooltip fixed>
          <template slot-scope="scope">
            <span v-if="item.prop!='operate'">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="item.prop=='operate'">
              <i class="icon iconfont doingColor mr-10 icontable-edit" @click="editflow(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconeye1" @click="scanFlow(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconCopy" />
              <i class="icon iconfont text-red-0 iconDelete fs-15" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
    <el-dialog title="查看审核流" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="826px">
      <div class="el-body">
        <div class="modelMsg bg-white w100">
          <span class="fs-16 text-grey-0 fw-bold">{{ currentFlow }}</span>
          <p class="fs-12 fw-400 text-grey-2 mb-10 mt-10">用于贷前审批</p>
          <p class="fs-14 fw-400 text-grey-2">
            <span>创建人：黎簇</span>
            <span class="ml-50">创建时间：2020.08.09-12:00:09</span>
            <span class="ml-50">项目成员(1)：黎簇</span>
          </p>
        </div>
        <div class="mt-20">
          <p class="fs-14 text-grey-0 fw-bold mb-10">审批流内容</p>
          <div class="border-d9 border-radius-5 checkCon">
            <div class="checkflow border-bottom-d9">
              <el-steps>
                <el-step title="1.审核开始" class="cursor-nodrop" simple />
                <el-step title="2.直接上级审核" class="cursor-pointer doingColor" simple />
                <el-step title="3.指定成员审核" class="cursor-pointer" simple />
                <el-step title="4.抄送" class="cursor-pointer" simple />
                <el-step title="5.审核结束" class="cursor-nodrop" simple />
              </el-steps>
            </div>
            <div class="check bg-f6 p-20 fs-14">
              <p class="mb-20 fs-14">审核类型：会签</p>
              <p class="mb-20 fs-14">审核成员：阿达西</p>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getApprovalfow } from '@/api/project-library/project-configuration/approvalflow'
import PagiNation from '@/components/Pagination/index'
import { getUrlParams } from '@/utils/getUrlParams'
export default {
  name: 'TabTwo',
  components: { PagiNation },
  props: {
    projectName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: '',
      dialogFormVisible: false,
      paginationData: {
        total: 3,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '审批流名称', prop: 'approvalName', sortable: false },
        { label: '审批流描述', prop: 'approvalDesc', sortable: false },
        { label: '修改人', prop: 'operator', sortable: false },
        { label: '修改时间', prop: 'updateTime', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      currentFlow: null
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
    initData() {
      getApprovalfow().then((response) => {
        this.tableData = response.data.approvalflow
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    editflow(params) {
      this.dialogFormVisible = true
      this.$router.push({ path: '/project-library/project-configuration/flow-edit', query: { projectName: getUrlParams().projectName, flowName: params.approvalName, workflowDesc: params.approvalDesc, title: '审批' }})
    },
    scanFlow(params) {
      this.dialogFormVisible = true
      this.currentFlow = params.approvalName
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
    right:260px;
    top:0;
  }
  >>> button{
    position: absolute;
  }
  >>> button.el-button--primary.el-button--medium{
    width: 110px;
    height: 32px;
    right:0;
  }
  >>> button.el-button--primary.el-button--medium.is-plain{
    width: 110px;
    height: 32px;
    right:110px;
  }
}
.conCen{
height:94%;
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
background-color: #fff;

}
>>>.el-dialog{
  height: 555px;
  .el-dialog__body{
    .el-body{
      .modelMsg{
        height: 87px;
      border-bottom:1px solid rgba(0, 0, 0, 0.06);
      }
      .checkCon{
        height: 266px;
        .checkflow{
          height: 54px;
          line-height: 54px;
          padding-left: 20px;
          padding-right: 10px;
          .el-step {
            padding-top: 15px;
            flex-basis:20% !important;
             .el-step__line{
              height:1px;
            }
            .el-step__main {
              background: #fff;
              margin: 0;
              margin-top: -7px;
              padding: 0;
              position: absolute;
              z-index: 1;
              padding-right: 10px;
              // width: 130px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              // color: #999999;
            }
            .el-step__head{
              width: 94%;
            }
            .el-step__icon.is-text{
              border:1px solid;
              display: none;
            }
            .el-step__title.is-wait{
              font-size: 14px;
              color: rgba(0, 0, 0, 0.25);
            }
             .el-step.is-horizontal {
                flex-basis:20% !important;
            }
             .el-step.is-horizontal:last-child{
              flex-basis:9% !important;
              max-width:none;
            }
          }
          .el-step.cursor-pointer {
            .el-step__title.is-wait{
              color: rgba(0, 0, 0, 0.65);
            }
          }
          .el-step.doingColor {
            .el-step__title.is-wait{
              color: #00a0e9;
            }
          }
        }
        .check{
          height:calc(100% - 54px);
          border-radius: 0 0 5px 5px;
          color:#666;
        }
      }
    }
  }
}
</style>
