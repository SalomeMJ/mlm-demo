// /src/components/MessageBox/index.vue
<template>
  <div v-show="isShowMessageBox" class="message-box">
    <div class="message-content">
      <div class="messageTop">
        <h3 class="title">{{ title }}</h3>
        <i class="icon iconfont iconclose pull-right cursor-pointer" @click="cancel" />
      </div>
      <!-- <div class="content" v-html="content" /> -->
      <div class="content">
        <p v-for="(item, ind) in contentData" :key="ind">
          <span class="fs-14 fw-400 text-grey-opacity-86" :class="{'must-write':item.mustWrite}">{{ item.name }}：</span>
          <el-input v-if="item.type=='input'" v-model="item.value" />
          <el-select v-if="item.type=='select'" v-model="item.value">
            <el-option
              v-for="(ite, index) in item.options"
              :key="index"
              :value="ite"
            />
          </el-select>
        </p>
      </div>
      <div class="btn-group">
        <el-button v-show="isShowCancelBtn" type="info" plain @click="cancel">{{ cancelBtnText }}</el-button>
        <el-button v-show="isShowConfimrBtn" type="primary" @click="confirm">{{ confirmBtnText }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '这是弹框内容'
    },
    contentData: {
      type: Array,
      default: () => []
    },
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: '',
      reject: '',
      promise: ''
    }
  },
  methods: {
    // 确定,将promise断定为resolve状态
    confirm: function() {
      this.isShowMessageBox = false
      if (this.isShowInput) {
        this.resolve(this.contentData)
      } else {
        this.resolve('confirm')
      }
      this.remove()
    },
    // 取消,将promise断定为reject状态
    cancel: function() {
      this.isShowMessageBox = false
      this.reject('cancel')
      this.remove()
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox: function() {
      this.isShowMessageBox = true
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      // 返回promise对象
      return this.promise
    },
    remove: function() {
      setTimeout(() => {
        this.destroy()
      }, 300)
    },
    destroy: function() {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>
<style lang="scss" scoped>
.message-box{
    position: fixed;
    background: rgba(0,0,0,0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .message-content{
      width: 480px;
      height: 402px;
      background: #FFFFFF;
      box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03), 0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 6px 16px -8px rgba(0, 0, 0, 0.08);
      border-radius: 2px;
      margin-left: calc(50% - 240px);
      margin-top: 170px;
      padding: 10px 0 15px 0;
      position: relative;
      .messageTop{
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: 40px;
        line-height: 32px;
        border-bottom:1px solid rgba(0,0,0,0.06);
        h3{
          width: 80%;
          display: inline-block;
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
        }
        i{
          color:rgba(0,0,0,0.45);
        }
      }
      .content{
        padding: 20px;
         p{
          margin-top: 20px;
          span{
            display: inline-block;
            width: 108px;
            text-align: right;
          }
        }
    .el-input--medium{
        display: inline-block;
        width: 74%;
      }
      .el-input,.el-select {
        display: inline-block;
        width: 74%;
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
      }
      .btn-group{
        width: 100%;
        height: 52px;
        line-height: 52px;
        border-top:1px solid rgba(0,0,0,0.06);
        position: absolute;
        bottom:0;
        text-align: right;
        padding-left: 20px;
        padding-right: 20px;
        button{
          width: 65px;
          height: 32px;
          border-radius: 2px;
          border:none;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          margin-top: 0;
        }
        button.btn-default{
            border:1px solid rgba(0, 0, 0, 0.15);
            color: rgba(0, 0, 0, 0.65);
            margin-right: 20px;
            background: #FFFFFF;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.15);
        }
      }
    }
}
</style>
