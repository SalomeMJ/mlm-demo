<template>
  <div class="p-50">
    <ul class="border-ee bg-white">
      <li>
        <div class="lihead bg-white border-bottom-ee border-right-ee">混淆矩阵</div>
        <div class="licon">
          <div class="bg-white w-32 h100 border-right-ee"><span class="ver-middle">实际</span></div>
          <div class="rightcon bg-grey-4">
            <span class="fs-12 text-grey-2"><span class="ver-middle">正样本</span></span>
            <span class="fs-12 text-grey-2"><span class="ver-middle">负样本</span></span>
            <span class="fs-12 text-grey-2"><span class="ver-middle">合计</span></span>
          </div>
        </div>
      </li>
      <li>
        <div class="lihead bg-white text-align-center">
          <p class="w100 bg-white text-grey-0 border-bottom-ee">预测</p>
          <div class="liheadcon bg-grey-4 border-bottom-ee">
            <span class="display-inlineblock fs-12 text-grey-2">正样本</span>
            <span class="display-inlineblock fs-12 text-grey-2">负样本</span>
            <span class="display-inlineblock fs-12 text-grey-2">合计</span>
          </div>
        </div>
      </li>
      <li>
        <span v-for="(item, index) in sampleNumList" :key="index" class="display-inlineblock fs-14 text-grey-0"><span class="ver-middle">{{ item }}</span></span>
      </li>
    </ul>
    <div class="rightRate">
      <span v-for="(item, index) in rightList" :key="index">
        <span class="ver-middle"><span class="fw-bold ng-binding">{{ item.name }}：</span><span>{{ item.value }}</span></span>
      </span>
    </div>
  </div>
</template>
<script>
import { getAssetPool } from '@/api/model-asset/asset-pool'

export default {
  name: 'TabOne',
  // components: { LineChart, TableContainer },
  // props: {
  //   projectDetail: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },
  data() {
    return {
      headArr: [
        { label: '模型编号', prop: 'modelNo', sortable: false },
        { label: '模型名称', prop: 'modelName', sortable: false },
        { label: '修改时间', prop: 'updateTime', sortable: false },
        { label: '所属模型组', prop: 'modelGroup', sortable: false },
        { label: '验证事件数量', prop: 'validationEventNum', sortable: false },
        { label: '正在使用事件数量', prop: 'useEventNum', sortable: false }
      ],
      tableData: [],
      totalData: [],
      rightList: [
        { name: '准确率', value: '0.3196' },
        { name: '精确率', value: '0.9939' },
        { name: '灵敏度', value: '0.2931' },
        { name: '特异度', value: '0.9569' },
        { name: 'F1值', value: '0.4528' },
        { name: 'Kappa系数', value: '0.0273' }
      ],
      sampleNumList: [1641, 3957, 5598, 10, 222, 232, 16651, 4179, 5830]
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleSizeChange(psize) {
      this.pagesize = psize
    },
    pageChange(item) {
      this.currpage = item.page
      this.pagesize = item.limit
      this.tableData = this.totalData.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
    },
    dataFilter(val) {
      this.value = val
      if (val) {
        this.options = this.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.options = this.optionsCopy
      }
    },
    initData() {
      getAssetPool(this.currpage).then((response) => {
        this.tableData = response.data.assetPool
        this.totalData = this.tableData
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.p-50{
  height: 100%;
  ul{
        width: 70%;
        height: 100%;
        margin: 0;
        padding: 0;
        li{
          // display: inline-block;
          width:calc(100% - 100px);
          float: left;
        }
        li:first-child{
          display: inline-block;
          width: 100px;
          height: 100%;
          div.lihead{
            height: 64px;
            line-height: 64px;
            width: 100%;
            text-align: center;
          }
          div.licon{
            width: 100%;
            height: calc(100% - 64px);
            div.w-32{
              display: inline-block;
              width: 32px;
              text-align: center;
              font-size: 14px;
              padding: 5px;
            }
            div.rightcon{
              display: inline-grid;
              width: 68px;
              text-align: center;
              float: right;
              height: 100%;
            }
          }
        }
        li:nth-child(2){
          display: inline-block;
          height: 64px;
          width: calc(100% - 100px);
          vertical-align: top;
          div.lihead{
            height: 64px;
            text-align: center;
            p{
              height: 32px;
              line-height: 32px;
              text-align: center;
              margin: 0;
              padding: 0;
            }
            div.liheadcon{
              height: 32px;
              line-height: 32px;
              display: grid;
              grid-template-columns: repeat(3,1fr);
            }
          }
        }
        li:last-child{
          height: calc(100% - 64px);
          display: grid;
          grid-template-columns: repeat(3,1fr);
          text-align: center;
        }
      }
  div.rightRate {
    width: 150px;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(70% + 50px);
    display: grid;
    line-height: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
   .ver-middle {
    position: relative;
    top: 45%;
    }
}
</style>
