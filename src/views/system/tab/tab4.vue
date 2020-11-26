<template>
  <div class="h100  p-10 pb-30 pt-20">
    <div class="conHead">
      <span class="fs-18 fw-bold">组织管理</span>
    </div>
    <div class="conCen mt-10">
      <div class="h100 w-200 display-inlineblock border-right-d9 tabContainer">
        <el-tree
          :data="root"
          :props="defaultProps"
          highlight-current
          accordion
          @node-click="handleNodeClick"
        />
      </div>
      <div class="h100 bg-grey-4 pull-right pt-10 pb-10 pl-20 pr-20">
        <div class="h100 conItem memberCon">
          <p>
            <span class="fw-bold fs-14 text-grey-0">成员列表</span>
            <span class="pull-right fs-14 doingColor text-decoration-underline cursor-pointer" @click="addMember = true">添加成员</span>
          </p>
          <div class="border-radius-3 bg-white border-d9 mt-10">
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
                <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" align="left" show-overflow-tooltip fixed>
                  <template slot-scope="scope">
                    <span v-if="item.prop!='operate'">
                      {{ scope.row[item.prop] }}
                    </span>
                    <span v-if="item.prop=='operate'" @click="enterUser(scope.row)">
                      <i class="icon iconfont iconDelete text-red-0" style="font-size:18px;" />
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
    <add-member v-if="addMember" :root="roots" :add-member="addMember" @addMember="getaddMember" />
  </div>
</template>
<script>
import PagiNation from '@/components/Pagination/index'
import { getRoot } from '@/api/system/root'
import { getRole } from '@/api/system/role'
import AddMember from '../components/add-member'
export default {
  name: 'TabOne',
  components: { PagiNation, AddMember },
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
        { label: '姓名', prop: 'loginName', sortable: false },
        { label: '邮箱', prop: 'email', sortable: false },
        { label: '角色', prop: 'authorityGroupNames', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      activeTab: '0',
      authorityList: [],
      root: [],
      roots: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      addMember: false
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data)
    },
    handleClick(tab, event) {
    },
    initData() {
      getRole().then((res) => {
        this.roleList = res.data.roleList
        this.tableData = res.data.roleList[Number(this.activeTab)].users
        this.authorityList = res.data.roleList[Number(this.activeTab)].authorityList
      })
      getRoot().then((res) => {
        this.root = this.setLabel(res.data.root, true)
        this.roots = this.setLabel(res.data.root, false)
      })
    },
    // 递归为权限组添加label
    setLabel(data, num) {
      for (const item of data) {
        if (num) {
          item.label = item.name + '(' + (item.name === '未分组' ? item.userCount : item.children.length) + ')'
        } else {
          item.label = item.name
        }
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
    }
  }

}
</script>
<style lang="scss" scoped>
.conHead{
  height: 32px;
  width: 100%;
  position: relative;
  >>> button{
    position: absolute;
       width: 88px;
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
.bg-grey-4{
  display: inline-block;
  width: calc(100% - 200px);
  overflow-y: auto;
}
.tabContainer{
  height: calc(100% - 42px);
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
    height: calc(100% - 40px);
  }
}
</style>
