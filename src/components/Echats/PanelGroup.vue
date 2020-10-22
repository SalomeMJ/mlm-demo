<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" style="background-color:rgba(151, 133, 231, 1)">
        <div class="card-panel-description">
          <div class="card-panel-num">{{ panelGroup.onlineTimes }}</div>
          <div class="card-panel-text">
            总在线时长
          </div>
        </div>
        <div class="card-panel-icon-wrapper icon-iconshalou">
          <i class="icon iconfont iconshalou" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" style="background-color:rgba(101, 113, 147, 1)">
        <div class="card-panel-icon-wrapper icon-management">
          <i class="icon iconfont iconyundanguanli" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="panelGroup.requestCounts" :duration="3000" class="card-panel-num" />
          <div class="card-panel-text">
            总请求次数
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" style="background-color:rgba(233, 133, 171, 1)">
        <div class="card-panel-icon-wrapper icon-iconshijian">
          <i class="icon iconfont iconshijian" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="panelGroup.avgResponseTime" :decimals="4" :duration="3200" class="card-panel-num" suffix="s" />
          <div class="card-panel-text">
            平均响应时长
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  props: {
    panelGroup: {
      type: Object,
      required: true
    }
  },
  created() {
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss">
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    border-radius:5px;
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: rgba(254, 254, 254, 1);
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    padding-left: 50px;
    .icon-iconshalou {
      color: #9786E7;
    }
    .icon-management {
      color: #657293;
    }
    .icon-iconshijian {
      color: #E985AC;
    }
    .icon-shopping {
      color: #34bfa3
    }
 i{
   font-size: 50px;
    background:rgba(255,255,255,1);
    border: 10px solid white;
    border-radius: 50%;
 }
    .card-panel-icon-wrapper {
      float: right;
      margin: 14px 30px 0 14px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: left;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(254, 254, 254, 1);
        font-size: 16px;
        margin-bottom: 12px;
        margin-top: 10px;

      }
      .card-panel-num {
        font-size: 24px;
      }
    }
  }
}
.el-range-editor--medium .el-range__icon, .el-range-editor--medium .el-range__close-icon{
  line-height: 24px;
}
@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
