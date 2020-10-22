<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple bg-purple-blue">1</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple bg-purple-skeyblue">2</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple bg-purple-orange">3</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple bg-purple-red">4</div></el-col>
    </el-row>
    <!-- <el-row v-for="(item, index) in list" :key="index" :gutter="20">
      <el-col :span="16"><div class="grid-content bg-purple bg-purple-white">{{ item.name }}</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light bg-purple-white">6</div></el-col>
    </el-row>
    <el-row v-for="(ite, ind) in list" :key="ind" :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple bg-purple-white">5</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light bg-purple-white">6</div></el-col>
    </el-row> -->
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: { },
  data() {
    return {
      currentRole: 'adminDashboard',
      list: [
        { name: 5 },
        { name: 6 }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    height: 165px;
  }
  .bg-purple-white{
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
  }
  .bg-purple-blue {
       background: linear-gradient(135deg,#00a0e9 0,#167af6 100%);
  }
  .bg-purple-skeyblue {
        background: linear-gradient(135deg,#40cac0 0,#51badd 100%);
  }
  .bg-purple-orange {
    background: linear-gradient(135deg,#ffc146 0,#ff9844 99%);
  }
  .bg-purple-red{
        background: linear-gradient(135deg,#fe6c60 0,#fe60ae 100%);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
