<template>
  <div class="inline-block">
    <span class="demonstration">
      <i class="icon iconfont icondata" />
    </span>
    <el-carousel width="50px" height="20px" indicator-position="none" :interval="2000">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'MerryRound',
  data() {
    return { }
  }
}
</script>
<style lang="scss" scoped>
.inline-block{
  margin-left: 100px;
}
  .el-carousel{
    display: inline-block;
    width: 150px;
    vertical-align: middle;
  }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
