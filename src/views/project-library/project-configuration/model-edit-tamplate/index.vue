<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置>'+$route.query.from+'配置>'+($route.query.modelName==null?'新建'+$route.query.from+'模板':'编辑'+$route.query.from+'模板')" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <p>
          <span class="fs-14 text-grey-0 fw-400">模板名称：</span>
          <el-input v-model="$route.query.modelName" class="mb-20" placeholder="请输入" />
        </p>
        <p>
          <span class="fs-14 text-grey-0 fw-400">模板描述：</span>
          <el-input v-model="$route.query.modelDesc" placeholder="请输入" />
        </p>
      </div>
      <div class="model-record bg-white border-radius-5 mt-20 fs-14">
        <p class="border-bottom-d9 h-32 lh-32 pl-30 pr-30">
          <span class="fs-14 text-grey-0 fw-bold">模板内容</span>
          <span class="pull-right doingColor cursor-pointer ">模板内容</span>
        </p>
        <div class="pl-30 pr-30 pt-20 pb-20 edit-model">
          <el-table
            v-if="tableData1.length!=0"
            row-key="id"
            class="system-table border-d9 border-radius-5"
            :data="tableData1"
            style="width: 100%;"
            height="80%"
          >
            <template v-for="(item, index) in headArr1">
              <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==3||index==4?'right':'left'" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span v-if="item.prop=='id'">
                    {{ scope.row[item.prop] }}
                    <i class="icon iconfont iconicon- doingColor ver-middle mt-5 cursor-pointer" />
                  </span>
                  <span v-if="item.prop!='id'&&item.prop!='mandatory'&&item.prop!='operate'">
                    {{ scope.row[item.prop] }}
                  </span>
                  <span v-if="item.prop=='mandatory'">
                    <el-checkbox v-model="scope.row[item.prop]" />
                  </span>
                  <span v-if="item.prop=='operate'">
                    <i class="icon iconfont iconDelete text-red-0 fs-15" />
                  </span>
                </template>
              </el-table-column>
            </template>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import { getProjectField } from '@/api/project-library/project-configuration/project-field'
import Sortable from 'sortablejs'
export default {
  name: 'ModelEditTemplate',
  components: { HeadTitle },
  data() {
    return {
      back: true,
      headArr1: [
        { label: '序号', prop: 'id', sortable: false },
        { label: '字段名称', prop: 'fieldName', sortable: false },
        { label: '字段类型', prop: 'fieldType', sortable: false },
        { label: '必填', prop: 'mandatory', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData1: []
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    initData() {
      getProjectField().then((response) => {
        this.tableData1 = response.data.projectField
        this.$nextTick(() => {
          const tbody = document.querySelector('.edit-model  .el-table__body-wrapper tbody')
          Sortable.create(tbody, {
            handle: '.iconicon-',
            dragClass: 'sortable-drag',
            onEnd({ newIndex, oldIndex }) {
              // console.log(this.tableData1)
            }
          })
        })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.conCen{
  width: 100%;
  height: 94%;
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 125px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    .el-input {
      width: 43%;
    }
  }
  .model-record{
    height: calc(100% - 145px);
    background: #FFFFFF;
    border-radius: 5px;
    span.cursor-pointer{
      text-decoration: underline;
    }
    >>> .el-table{
      th:nth-child(4){
      .cell:before{
        content:'*';
        color:#FF0000;
        font-size:12px;
        position: absolute;
            right: 40px;
            top: 3px;
        }
      }
      .sortable-drag{
        background-color: #e5f5fd;
      }
    }
  }
}
</style>
