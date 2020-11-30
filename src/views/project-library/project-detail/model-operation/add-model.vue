<template>
  <div class="h100 bg-white">
    <div class="conCen">
      <div class="bg-white p-20-30">
        <div v-for="(item, index) in condetail" :key="index" class="conItem mb-20">
          <p class="title fs-14 fw-bold text-grey-opacity-86">{{ item.name }}</p>
          <div class="conDetail">
            <p v-for="(child, ind) in item.child" :key="ind">
              <span class="fs-14 fw-400 text-grey-opacity-86" :class="{'must-write':child.mustWrite}" :style="{'margin-top':child.releaseNum==undefined?'0':'7px'}">{{ child.name }}：</span>
              <el-input v-if="child.type=='input'&&child.releaseNum==undefined" v-model="child.value" :disabled="child.disabled" />
              <span v-if="child.type=='input'&&child.releaseNum!=undefined" class="releaseContainer">
                <div v-for="(release, i) in child.releaseNum" :key="i">
                  <el-input v-model="release.value" :class="{'mb-20':i!=child.releaseNum.length-1}" :disabled="child.disabled" />
                  <i v-if="i != 0&&child.releaseNum.length!=1" class="icon iconfont iconDelete cursor-pointer errorColor ver-middle pull-right mt-5 mr-10" @click="deleteRelease(child,i)" />
                </div>
              </span>
              <el-input v-if="child.type=='textarea'" v-model="child.value" type="textarea" :disabled="child.disabled" :readonly="child.disabled" resize="none" />
              <el-select v-if="child.type=='select'" v-model="child.value" placeholder="请选择" :multiple="child.multiple" :disabled="child.disabled">
                <el-option
                  v-for="items in child.options"
                  :key="items.value"
                  :label="items.value"
                  :value="items.value"
                  :disabled="items.disabled"
                />
              </el-select>
              <el-upload
                v-if="child.type=='upload'"
                class="upload-demo ver-middle"
                action=""
                :multiple="multiple"
                :on-change="handleChange"
                :file-list="fileList"
              >
                <span class="dis-inlineblock w100 h100 fs-14">请点击上传文件</span>
              </el-upload>
              <picker-time v-if="child.type=='time'" />
            </p>
          </div>
        </div>
      </div>

      <div v-if="$route.query.action=='生效审核中'" class="effectCheck bg-white p-20-30 approval">
        <p class="title fs-14 fw-bold text-grey-opacity-86">审批配置</p>
        <time-line :time-list="timeList" />
      </div>
    </div>
    <div class="footer">
      <div v-if="$route.query.eventName!=null&&$route.query.action!='配置中'">
        <el-button type="danger" plain>撤销</el-button>
        <el-button type="primary">催办</el-button>
      </div>
      <div v-if="$route.query.eventName==null||$route.query.action=='配置中'">
        <el-button type="primary" plain @click="goBack()">取消</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'
import PickerTime from '@/components/PickerTime'
import TimeLine from '@/components/TimeLine'

export default {
  name: 'EventAddEdit',
  components: { PickerTime, TimeLine },
  data() {
    return {
      multiple: true,
      condetail: [
        {
          name: '模型基本信息',
          child: [
            { name: '模型名称', mustWrite: true, type: 'input', icon: '', value: '', disabled: false },
            { name: '模型描述', mustWrite: false, type: 'textarea', icon: '', value: '', disabled: false },
            { name: '负责人', mustWrite: true, type: 'select', icon: '', value: '', options: [{ value: '田雨', label: '田雨', disabled: false }, { value: '黎簇', label: '黎簇', disabled: false }, { value: '王盟', label: '王盟', disabled: false }, { value: '于和伟', label: '于和伟', disabled: false }], disabled: false },
            { name: '模型注册渠道', mustWrite: true, type: 'select', icon: '', value: '', options: [{ value: '评分卡', label: '评分卡', disabled: true }, { value: 'PMML上传', label: 'PMML上传', disabled: false }, { value: '睿思导入', label: '睿思导入', disabled: true }], disabled: false },
            { name: '所属模型组', mustWrite: false, type: 'select', multiple: true, value: '', options: [{ value: '自营车模型组', label: '自营车模型组' }, { value: '易速贷模型组', label: '易速贷模型组' }], disabled: false },
            { name: '上传PMML文件', mustWrite: true, type: 'upload', icon: '', value: '', disabled: false },
            { name: '算法类型', mustWrite: true, type: 'select', icon: '', value: '', options: [{ value: 'LR XGboost', label: 'LR XGboost', disabled: false }, { value: 'GBDT', label: 'GBDT', disabled: false }, { value: 'RF', label: 'RF', disabled: false }, { value: 'SVM', label: 'SVM', disabled: false }, { value: '其他', label: '其他', disabled: false }], disabled: false },
            { name: '上传模型文档', mustWrite: false, type: 'upload', icon: '', value: '', releaseNum: [{ value: '' }], disabled: false }
          ]
        },
        {
          name: '模型开发信息',
          child: [
            { name: '上传特征信息', mustWrite: false, type: 'upload', disabled: false, releaseNum: [{ value: '' }] },
            { name: '上传数据信息', mustWrite: false, type: 'upload', disabled: false, releaseNum: [{ value: '' }] },
            { name: '上传算法信息', mustWrite: false, type: 'upload', disabled: false, releaseNum: [{ value: '' }] },
            { name: '上传测试信息', mustWrite: false, type: 'upload', releaseNum: [{ value: '' }], disabled: false }
          ]
        }
      ],
      timeList: [
        {
          content: [
            {
              con: '王盟',
              desc: '已同意-2020.08.15-12:00:00'
            },
            {
              con: '于和伟',
              desc: '已同意-2020.08.17-12:00:00'
            }
          ],
          packUp: false,
          timestamp: '直接上级',
          color: '#00a0e9',
          icon: 'el-icon-s-check'
        },
        {
          content: [{
            con: '田雨',
            desc: '已同意-2020.08.20-12:00:00'
          }],
          packUp: true,
          timestamp: '指定审批人',
          color: '#00a0e9',
          icon: 'el-icon-s-check'
        }
      ],
      fileList: []
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = []
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goBack() {
      this.$router.push({ path: '/project-library/project-detail', query: { projectName: getUrlParams().projectName }})
    },
    addChild(params) {
      params.releaseNum.push({ value: '' })
    },
    deleteRelease(child, i) {
      child.releaseNum.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.16);
  width: 95.5%;
  position: fixed;
  bottom: 0;
  z-index: 9;
  left: 66px;
  text-align: center;
  line-height: 70px;
  button{
    width: 80px !important;
    height: 32px;
    margin-right: 10px;
    padding: 0;
  }
}
i.addIcon{
    // margin-left: -17px;
    display: inline-block;
    margin-top: 8px;
    vertical-align: top;
    font-size: 15px;
margin-left: -30px;
}
.conCen{
  width: 100%;
  height: calc(100% - 105px);
  border-radius: 0 0 5px 5px;
  overflow-y: auto;
  .p-20-30{
padding: 20px 30px;
  }

  .conItem{
    .title{
      padding: 0;
      margin: 0;
    }
    .conDetail{
      .el-input,.el-textarea,.el-select {
        width: 28%;
        height: 32px;
        border-radius: 3px;
        >>> .el-select__tags {
          height: 30px;
          overflow: auto;
        }
      }
      .el-textarea{
        height: 64px;
        vertical-align: top;
      }
      i.iconxiazai{
        margin-left: 5px;
      }
    }
    p{
      margin-top: 20px;
      border:1px solid transparent;
      padding-left: 30px;
      span{
        display: inline-block;
        width: 120px;
        text-align: right;
      }
      span.releaseContainer{
        width: 30%;
        vertical-align: top;
        // border:1px solid blue;
        text-align: left;
        .el-input,.el-select{
          display: inline-block;
          width: calc(93% + 2px );
        }
      }
    }

  }
  >>> #pickertime{
    width: 28%;
    .el-input__inner{
      width: 100%;
    }
  }
}
 </style>
