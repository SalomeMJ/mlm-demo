<template>
  <div :class="{'hidden':paginationData.hidden}" class="pagination-container">
    <el-pagination
      :background="paginationData.background"
      :current-page.sync="paginationData.currentPage"
      :page-size.sync="paginationData.pageSize"
      layout="prev, pager, next, total, sizes"
      :page-sizes="paginationData.pageSizes"
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
      this.$emit('pagination', { page: val, limit: this.paginationData.pageSize })
      if (this.paginationData.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  width: 100%;
  background: #fff;
  padding: 32px 16px;
  margin: 0;
  // text-align: right;
  position: absolute;
  bottom:0;
  padding-left: 20px;
  padding-right: 20px;
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
