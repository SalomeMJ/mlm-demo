<template>
  <div :class="{'hidden':paginationData.hidden}" class="pagination-container">
    <el-pagination
      :background="paginationData.background"
      :current-page.sync="paginationData.currentPage"
      :page-size.sync="paginationData.pageSize"
      :layout="paginationData.layout"
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

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  margin: 0;
  text-align: right;
}
.pagination-container.hidden {
  display: none;
}
</style>
