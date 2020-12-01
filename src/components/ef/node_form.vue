<template>
  <div class="h100">
    <div class="ef-node-form h100">
      <div class="ef-node-form-header fw-bold">
        {{ node.name }}
      </div>
      <div class="ef-node-form-body">
        <div class="el-item p-20 pt-10">
          <p class="fs-14 text-grey-1 fw-400">{{ node.type==='check'?('审核类型'):(node.name+'模板') }}：</p>
          <div v-if="node.type!=='check'" class="el-item-cen border-radius-3 border-d9 mt-10">
            <el-select v-model="modeltamplate" class="w100 border-top-none" placeholder="请选择">
              <el-option
                v-for="item in modelTeplates"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <div class="bg-f6 pt-10 pb-10 pl-20 pr-20 templateContainer overflow-y-auto">
              <p v-for="(item, index) in modelTemplateItem" :key="index" :class="{'must-write': item.mustwrite, 'ml-8': !item.mustwrite}" class="fs-12 text-grey-1 mb-10">{{ item.name }}</p>
            </div>
            <p class="fs-14 text-grey-1 mt-20">
              <span>审核流：</span>
              <el-radio v-model="checkflow" label="1">审核</el-radio>
              <el-radio v-model="checkflow" label="2">不审核</el-radio>
            </p>
            <div v-if="checkflow=='1'" class="el-item-cen border-radius-3 border-d9 mt-10">
              <el-select v-model="checkflowItem" class="w100 border-top-none" placeholder="请选择">
                <el-option
                  v-for="item in checkflowList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="bg-f6 pt-10 pb-10 pl-20 pr-20 templateContainer overflow-y-auto">
                <time-line :time-list="timeList" />
              </div>
            </div>

          </div>
          <el-select v-if="node.type==='check'" v-model="check" class="w100 border-top-none mt-10" placeholder="请选择">
            <el-option
              v-for="item in checkType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <p v-if="node.type==='check'" class="fs-14 text-grey-1 fw-400 mt-20">审核成员：</p>
          <el-select v-if="node.type==='check'" v-model="checkme" class="w100 border-top-none mt-10" multiple="true" placeholder="请选择">
            <el-option
              v-for="item in checkMember"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { cloneDeep } from 'lodash'
import { getModelRegister } from '@/api/project-library/project-configuration/modelregister'
import { getApprovalfow } from '@/api/project-library/project-configuration/approvalflow'
import TimeLine from '@/components/TimeLine'
export default {
  components: { TimeLine },
  data() {
    return {
      visible: true,
      modeltamplate: '',
      modelTeplates: [],
      // node 或 line
      // type: 'node',
      node: {},
      modelTemplateItem: [
        { mustwrite: true, name: '模型名称' },
        { mustwrite: false, name: '模型描述' },
        { mustwrite: true, name: '模型注册渠道' }
      ],
      checkflow: '1',
      checkflowList: [],
      checkflowItems: [
        { mustwrite: true, name: '模型名称' },
        { mustwrite: false, name: '模型描述' },
        { mustwrite: true, name: '模型注册渠道' }
      ],
      checkflowItem: '',
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
      check: null,
      checkme: null,
      checkType: [
        { value: '会签', lable: '会签' }
      ],
      checkMember: [
        { value: '黎簇', lable: '黎簇' },
        { value: '王盟', lable: '王盟' }
      ]

    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    /**
             * 表单修改，这里可以根据传入的ID进行业务信息获取
             * @param data
             * @param id
             */
    nodeInit(data, id) {
      this.type = 'node'
      this.data = data
      data.nodeList.filter((node) => {
        if (node.id === id) {
          this.node = cloneDeep(node)
        }
      })
    },
    initData() {
      // console.log(this.node)
      getModelRegister().then((res) => {
        for (const item of res.data.modelRegister) {
          this.modelTeplates.push({ label: item.modelName, value: item.id })
          this.modeltamplate = this.modelTeplates[0].value
        }
      })
      getApprovalfow().then((res) => {
        for (const item of res.data.approvalflow) {
          this.checkflowList.push({ label: item.approvalName, value: item.id })
          this.checkflowItem = this.checkflowList[0].value
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-node-form-tag {
        position: absolute;
        top: 50%;
        margin-left: -15px;
        height: 40px;
        width: 15px;
        background-color: #fbfbfb;
        border: 1px solid rgb(220, 227, 232);
        border-right: none;
        z-index: 0;
    }
    .ef-node-form-header{
        height: 42px;
        line-height: 42px;
        padding-left: 20px;
        background-color: #fff;
        border:none;
        border-bottom:1px solid #d9d9d9;
    }
    .el-node-form-body{
      height: calc(100% - 42px);
      overflow-y: auto;
    }
    .el-item{
      .el-item-cen{
        height: 152px;
        >>> .el-input__inner{
          border:none;
          border-bottom:1px solid #d9d9d9;
        }
        .templateContainer{
          height: calc(100% - 32px);
        }
        .el-item-cen{
          height:270px;
        }
      }
    }
</style>
