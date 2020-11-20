<template>
  <div
    ref="node"
    class="flow-elment"
    :style="nodeContainerStyle"
    :class="nodeContainerClass"
    @click="clickNode"
    @mouseup="changeNodeSite"
  >
    <span v-if="node.name!=='开始'" class=" ef-node-left-ico flow-node-drag enticon" />
    <i v-if="node.name=='开始'" class="icon iconfont iconPlay fs-14" />
    <span v-if="node.name!='结束'&&node.name!='开始'" class="bg-yellow-3 fs-14 fw-bold">{{ node.iconText }}</span>
    <i v-if="node.name=='结束'" class="icon iconfont iconcheck-all " style="font-size:14px;" />
    <span class="ef-node-text" :show-overflow-tooltip="true">{{ node.name }}</span>
    <i v-if="node.name!='开始'" class="icon iconfont iconDelete text-red-0 fs-14" />
    <span v-if="node.name!=='结束'" class=" ef-node-left-ico flow-node-drag outicon" />
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      default: () => {}
    },
    activeElement: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    nodeContainerClass() {
      return {
        'ef-node-container': true,
        'ef-node-active': this.activeElement.type === 'node' ? this.activeElement.nodeId === this.node.id : false
      }
    },
    // 节点容器样式
    nodeContainerStyle() {
      return {
        top: this.node.top,
        left: this.node.left
      }
    },
    nodeIcoClass() {
      var nodeIcoClass = {}
      nodeIcoClass[this.node.ico] = true
      // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
      nodeIcoClass['flow-node-drag'] = !this.node.viewOnly
      return nodeIcoClass
    }
  },
  methods: {
    // 点击节点
    clickNode(e) {
      if (e.toElement.innerHTML !== '开始' && e.toElement.innerHTML !== '结束') {
        this.$emit('clickNode', this.node.id)
      }
    },
    // 鼠标移动后抬起
    changeNodeSite() {
      // 避免抖动
      if (this.node.left === this.$refs.node.style.left && this.node.top === this.$refs.node.style.top) {
        return
      }
      this.$emit('changeNodeSite', {
        nodeId: this.node.id,
        left: this.$refs.node.style.left,
        top: this.$refs.node.style.top
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.flow-elment{
  width: 174px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #FFFFFF;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 1px solid #D9D9D9;
  padding-left: 20px;
  cursor: pointer;
  span,i{
    vertical-align: middle;
  }
  span{
    margin-left: 10px;
    margin-right: 10px;
  }
  i:first-child{
    display: inline-block;
   color:#30E9CA;
    font-size: 18px;
    border-radius: 50%;
  }
  i.iconDelete{
    visibility: hidden;
  }
  span.bg-yellow-3{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color:#fff;
    font-size: 14px;
    border-radius: 50%;
    margin-right: 0;
    margin-top: 12px;
  }
}
.flow-elment:hover{
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  i.iconDelete{
    visibility: visible;
  }
}
.flow-elment:first-child{
  // position: absolute;
  margin-left:calc(50% - 87px);
}
.ef-node-left-ico{
    display: inline-block;
    width:10px;
    height:10px;
    border:1px solid #d7d7d7;
    border-radius: 50%;
    margin: 0 !important;
    position: absolute;
    left:calc(50% - 5px);
    cursor: pointer;
}
.ef-node-left-ico.outicon{
    bottom:-10px;
}
.ef-node-left-ico.enticon{
    top:-10px;
}
</style>
