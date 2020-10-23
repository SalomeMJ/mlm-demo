<template>
  <div id="pickertime">
    <span v-if="timeTitle!=''" class="demonstration fs-14 fw-normal mr-10">{{ timeTitle }}</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="⇀"
      start-placeholder="2019-12-11 09:30:05"
      end-placeholder="2019-12-19 10:51:37"
      :picker-options="pickerOptions"
      value-format="yyyy-MM-dd HH:mm:ss"
      format="yyyy-MM-dd HH:mm:ss"
    />
  </div>
</template>
<script>
export default {
  props: {
    timeTitle: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近1个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近3个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近6个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近12个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '上线至今',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>
<style lang="scss">
  #pickertime{
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
    .el-date-range-picker.has-sidebar {
      height: 364px;
      left: 78px !important;
    }
    .el-date-editor--daterange.el-input__inner{
      width: 220px;
      height: 32px;
      background: #FFFFFF;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
    .el-range-editor--medium .el-range-separator{
      line-height: 24px;
    }
    i.el-input__icon{
      position: absolute;
      right: 0;
    }
  }

</style>
