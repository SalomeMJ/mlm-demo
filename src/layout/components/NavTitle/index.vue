<template>
  <div class="child-title">{{ titles }} <span v-if="back" class="back" @click="goBack"> <i class="icon iconfont iconhead-back" /></span> </div>
</template>

<script>
export default {
  name: 'NavTitle',
  props: {
    titles: {
      type: String,
      default: ''
    },
    back: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
  },
  methods: {
    goBack() {
      this.$router.push(this.back)
    }
  }

}
</script>

<style lang="scss" scoped>
  .child-title{
        height: 45px;
        background: #f6f6f6;
        border-radius: 10px 10px 0 0;
        border-left: 8px solid #4285E2;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        line-height: 45px;
        text-indent: 24px;
        // border-bottom: 1px solid;
  }
  .back{
    float: right;
    margin-right: 20px;
    i{
      color: #4285E2;
      font-size: 24px;
    }
  }
</style>
