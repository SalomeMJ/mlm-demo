<template>
  <div :class="{'hidden':paginationData.hidden}" class="pagination-container">
    <el-pagination
      :background="paginationData.background"
      :current-page.sync="paginationData.currentPage"
      :page-size.sync="paginationData.limit"
      layout="prev, pager, next, total, sizes"
      :page-sizes="[10, 20, 50]"
      :total="paginationData.total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    paginationData: {
      required: true,
      type: Object
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.paginationData.currentPage, limit: val })
      if (this.paginationData.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.paginationData.limit })
      if (this.paginationData.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
    width: calc(100% - 2px);
    background: #fff;
    padding: 20px 20px 10px 20px;
    margin: 0;
    z-index: 5;
    position: absolute;
    bottom: 1px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
 >>> .btn-prev {
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  >>> .el-pager{
    margin-left: 10px;
    li{
      width: 32px;
      margin-left: 10px;
      height: 32px;
      background: #FFFFFF;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
    li:first-child{
      margin-left: 0;
    }
    li.active{
      border-color:#1890FF;
      color:#1890FF;
    }
  }
  >>> .btn-next{
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-left:10px ;
  }
  >>> span.el-pagination__sizes{
    position: absolute;
    right: 10px;
  }
  >>> span.el-pagination__total{
    position: absolute;
    right: 132px;
  }
}
.pagination-container.hidden {
  display: none;
}
</style>
