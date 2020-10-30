<template>
  <div class="conCen bg-white mt-5">
    <div class="conItem mb-20">
      <p class="title fs-14 fw-bold text-grey-opacity-86">使用事件配置</p>
      <div class="conDetail">
        <p v-for="(item, ind) in condetail" :key="ind">
          <span class="fs-14 fw-400 text-grey-opacity-86">{{ item.name }}：</span>
          <el-input v-if="item.type=='input'" v-model="item.value" :disabled="true" />
          <el-input
            v-if="item.type=='time'"
            v-model="item.value"
            :disabled="true"
            suffix-icon="el-icon-date"
          />
          <el-select v-if="item.type=='select'" v-model="item.value" :disabled="true" />
          <i v-if="item.icon!=''" class="icon iconfont doingColor cursor-pointer" :class="item.icon" />
        </p>
      </div>
    </div>
    <div class="conItem mb-20">
      <p class="title fs-14 fw-bold text-grey-opacity-86">审批流程</p>
      <div class="conDetail pt-20">
        <el-timeline>
          <el-timeline-item timestamp="直接上级" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="指定审批人" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="抄送人" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
// import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'EventAddEdit',
  components: { },
  data() {
    return {
      condetail: [
        { name: '负责人', mustWrite: true, type: 'select', icon: '', value: '' },
        { name: '验证记录', mustWrite: false, type: 'select', icon: 'iconeye1', value: '' },
        { name: '生效时间', mustWrite: true, type: 'time', icon: 'iconxiazai', value: '' }
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
.text-grey-opacity-86{
color:rgba(0,0,0,0.86)
}
.must-write::before{
  content: '* ';
  color: #FF4D4F;
  vertical-align: middle;
}
.conCen{
  width: 100%;
  height: 90%;
  overflow-y: auto;
  border-radius: 0 0 5px 5px;
  .conItem{
    .title{
      padding: 0;
      margin: 0;
    }
    p{
      margin-top: 20px;
      span{
        display: inline-block;
        width: 100px;
        text-align: right;
      }
    }
    .conDetail{
      .el-input,.el-textarea,.el-select {
        width: 28%;
        height: 32px;
        border-radius: 2px;
      }
      .el-textarea{
        height: 64px;
        vertical-align: top;
      }
      i.iconxiazai{
        margin-left: 5px;
      }
      >>> .el-timeline-item__content{
        width: 31%;
        .el-card{
          background: #F6F6F6;
          border-radius: 3px;
          border: 1px solid #D1D1D1;
          box-shadow: none;       
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
        }
      }
    }

  }
}
 </style>
