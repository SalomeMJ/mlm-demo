<template>
  <div>
    <div class="grid-top">
      <span class="fs-14 fw-bold text-gret-0">{{ tableContainer.name }}{{ tableContainer.tableData.length }}）</span>
    </div>
    <div class="grid-center mt-10">
      <el-table
        v-if="tableContainer.tableData.length!=0"
        class="system-table"
        :data="tableContainer.tableData"
        style="width: 100%"
        height="172px"
        :default-sort="{prop: 'name', order: 'descending'}"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in tableContainer.headArr">
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" align="left" fixed>
            <template scope="scope">
              <span>
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="index===tableContainer.headArr.length-1&&tableContainer.detail">
                <i class="icon iconfont icongray-toright doingColor" />
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <p class="doingColor cursor-pointer fs-14">查看更多</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableContainer',
  props: {
    tableContainer: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      currpage: ''
    }
  },
  watch: {
    'tableContainers': function(newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    }
  }

}
</script>
<style lang="scss" scoped>
 .grid-center{
        width: 100%;
        height: 204px;
        border-radius: 5px;
        border: 1px solid #D9D9D9;
        display: inline-block;
        p{
          padding: 0;
          margin: 0;
          height: 32px;
          width: 100%;
          text-align: center;
          line-height: 32px;
          background-color: #fff;
        }
        i.icongray-toright{
          font-size:14px !important;
          vertical-align: middle;
        }
      }
</style>
