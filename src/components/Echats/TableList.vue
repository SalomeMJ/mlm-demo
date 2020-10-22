<template>
  <el-table
    :data="tableData"
    :class="className"
    :style="{width:width}"
    :row-class-name="tableRowClassName"
    :max-height="maxHeight"
    :stripe="stripe"
  >
    <el-table-column v-for="(item,list) in colLabel" :key="list" show-overflow-tooltip :formatter="itemFormatter" :prop="item.prop" :label="item.label" :class="item.style" />
  </el-table>
</template>

<script>
export default {
  props: {
    tableList: {
      type: Object,
      required: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    maxHeight: {
      type: String,
      default: '400px'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data: function() {
    return {
      tableData: this.tableList.data,
      colLabel: this.tableList.head
    }
  },
  watch: {
    tableList: {
      handler(newValue) {
        this.tableData = newValue.data
        this.colLabel = newValue.head
      },
      deep: true
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.hasOwnProperty('backgroundColor')) {
        return row.backgroundColor
      }
      return ''
    },
    itemFormatter(row, column) {
      var data = row[column.property]
      if (data === null) {
        return '--'
      } else {
        return data
      }
    }
  }
}
</script>
<style lang="scss" scope>
  .el-table .red-row {
    background-color: rgba(255, 240, 239, 1) !important;
  }

  .el-table .green-row {
    background-color: rgba(236, 250, 249, 1) !important;
  }

  .el-table .yellow-row {
    background-color: rgba(255, 247, 232, 1) !important;
  }

  .el-table .red-high-row {
    background-color: #FE6C60 !important;
  }

  .el-table .green-high-row {
    background-color: #40CAC0 !important;
  }

  .el-table .yellow-high-row {
    background-color: #FBB221 !important;
  }
  .el-table{
    border:1px solid rgba(238,238,238,1);
  }
  .el-table--medium td{
        padding: 6px 0;
        text-align: center;
  }
  .el-table--medium th{
  padding:  0;
  text-align: center;
  }

</style>
