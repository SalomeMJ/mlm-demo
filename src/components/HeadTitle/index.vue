<template>
  <div id="headStyle">
    <span class="line mr-10 ver-middle" />
    <span class="fs-16 fw-bold tet-grey-0 ver-middle">{{ title }}</span>
    <i v-if="back" class="icon iconfont iconhead-back pull-right cursor-pointer mr-20 fs-18 doingColor" @click="goBack()" />
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      interval: null,
      isMoving: false
    }
  },
  methods: {
    goBack() {
      // this.$router.push(this)
    }
  }
}
</script>

<style lang="scss" scoped>
  #headStyle{
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: #F6F6F6;
    border-radius: 5px 5px 0px 0px;
    .line{
      display:inline-block;
      width:10px;
      height:42px;
      background:#4285E2;
      border-radius: 5px 0px 0px 0px;
    }
  }
</style>
