<template>
  <div class="h100">
    <el-table
      v-if="tableData.length!=0"
      class="system-table"
      :data="tableData"
      style="width: 100%"
      height="100%"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==tableData.length-1?'right':'left'" fixed>
          <template slot-scope="scope">
            <span>
              {{ scope.row[item.prop] }}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>

export default {
  name: 'ElTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    headArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
