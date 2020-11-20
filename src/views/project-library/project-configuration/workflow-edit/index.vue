<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置>工作流配置>'+($route.query.workflowName==null?'新建工作流':'编辑工作流')" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <p>
          <span class="fs-14 text-grey-0 fw-400">工作流名称：</span>
          <el-input v-model="$route.query.workflowName" class="mb-20" placeholder="请输入" />
        </p>
        <p>
          <span class="fs-14 text-grey-0 fw-400">工作流描述：</span>
          <el-input v-model="$route.query.workflowDesc" placeholder="请输入" />
        </p>
      </div>
      <div class="model-record bg-white border-radius-5 mt-20 fs-14">
        <p class="border-bottom-d9 h-32 lh-32 pl-30 pr-30">
          <span class="fs-14 text-grey-0 fw-bold">工作流编辑</span>
        </p>
        <div class="pl-30 pr-30 pt-20 pb-20 edit-model">
          <div class="h100 border-d9 border-radius-5 bg-grey-4">
            <flow-panel />
            <!-- <div class="menuList bg-white h100">
              <div v-for="menu in menuList" :key="menu.id" class="mb-20">
                <draggable v-model="test" :="draggableOptions" @end="end($event, menu)" @start="move">
                  <span class="fs-14 text-grey-0 cursor-pointer"> {{ menu.name }} </span>
                </draggable>
              </div>
            </div>
            <div ref="efContainer" class="elContainer pos-relative">
              <div v-for="(node, index) in elementList" :key="index" class="flow-elment start-element">
                <span v-if="node.name!=='开始'" class=" ef-node-left-ico flow-node-drag enticon" />
                <i v-if="node.name=='开始'" class="icon iconfont iconPlay fs-14" />
                <span v-if="node.name!='结束'&&node.name!='开始'" class="bg-yellow-3 fs-14 fw-bold">{{ node.iconText }}</span>
                <i v-if="node.name=='结束'" class="icon iconfont iconcheck-all " style="font-size:14px;" />
                <span class="ef-node-text" :show-overflow-tooltip="true">{{ node.name }}</span>
                <i v-if="node.name!='开始'" class="icon iconfont iconDelete text-red-0 fs-14" />
                <span v-if="node.name!=='结束'" class=" ef-node-left-ico flow-node-drag outicon" />
              </div>
            </div>
            <div class="elDetail bg-white">
              <p class="fs-14 fw-bold text-grey-0">模型注册</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import FlowPanel from '@/components/ef/panel'
// import lodash from 'lodash'
// import draggable from 'vuedraggable'
// import jsPlumb from 'jsplumb'
const mousePosition = {
  left: -1,
  top: -1
}
export default {
  name: 'AddEditWorkflow',
  components: { HeadTitle, FlowPanel },
  data() {
    return {
      back: true,
      menuList: [
        {
          id: 1,
          name: '模型注册',
          iconText: 'Z'
        },
        {
          id: 2,
          name: '模型验证',
          iconText: 'Y'
        },
        {
          id: 3,
          name: '模型使用',
          iconText: 'S'
        },
        {
          id: 4,
          name: '模型停止',
          iconText: 'T'
        },
        {
          id: 5,
          name: '结束'
        }
      ],
      draggableOptions: {
        preventOnFilter: false,
        sort: false,
        disabled: false,
        ghostClass: 'tt',
        // 不使用H5原生的配置
        forceFallback: true
        // 拖拽的时候样式
        // fallbackClass: 'flow-node-draggable'
      },
      jsPlumb: null,
      test: [],
      elementList: [
        {
          id: 0,
          name: '开始',
          iconText: ''
        }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.jsPlumb = jsPlumb.jsPlumb.getInstance()
    this.$nextTick(() => {
      this.jsPlumbInit()
    })
  },
  methods: {
    // 拖拽开始时触发
    move(evt, a, b, c) {
      // console.log(evt)
    },
    // 拖拽结束时触发
    end(evt, e) {
      this.createElement(evt, e, mousePosition)
    },
    // 初始化画布
    jsPlumbInit() {
      this.jsPlumb.ready(() => {
        // 初始化节点
        this.loadEasyFlow()
      })
    },
    // 加载流程图
    loadEasyFlow() {
      // 初始化节点
      for (const i in this.menuList) {
        const node = this.menuList[i]
        // 设置源点，可以拖出线连接其他节点
        this.jsPlumb.makeSource(node.id, lodash.merge(this.jsplumbSourceOptions, {}))
        // // 设置目标点，其他源点拖出的线可以连接该节点
        this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions)
        if (!node.viewOnly) {
          this.jsPlumb.draggable(node.id, {
            containment: 'parent',
            stop: function(el) {
              // 拖拽节点结束后的对调
              console.log('拖拽结束: ', el)
            }
          })
        }
      }
    },
    // 返回唯一标识
    getUUID() {
      return Math.random().toString(36).substr(3, 10)
    },
    // 向画布添加元素
    createElement(evt, nodeMenu, mousePosition) {
      const screenX = evt.originalEvent.clientX
      const screenY = evt.originalEvent.clientY
      const efContainer = this.$refs.efContainer
      const containerRect = efContainer.getBoundingClientRect()
      let left = screenX
      let top = screenY
      // 计算是否拖入到容器中
      if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
        this.$message.error('请把节点拖入到画布中')
        return
      }
      left = left - containerRect.x + efContainer.scrollLeft
      top = top - containerRect.y + efContainer.scrollTop
      // 居中
      left -= 85
      top -= 16
      const nodeId = this.getUUID()
      // 动态生成名字
      const origName = nodeMenu.name
      let nodeName = origName
      let index = 1
      while (index < 10000) {
        let repeat = false
        for (const i in this.menuList) {
          const node = this.menuList[i]
          if (node.name === nodeName) {
            nodeName = origName + index
            repeat = true
          }
        }
        if (repeat) {
          index++
          continue
        }
        break
      }
      const node = {
        id: nodeId,
        name: nodeName,
        type: nodeMenu.type,
        left: left + 'px',
        top: top + 'px',
        ico: nodeMenu.ico,
        state: 'success'
      }
      /**
                 * 这里可以进行业务判断、是否能够添加该节点
                 */
      this.elementList.push(node)
      this.$nextTick(function() {
        // this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions)
        // this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions)
        this.createAnchors(node.id, node, true)
        // this.jsPlumb.draggable(nodeId, {
        //   containment: 'parent',
        //   stop: function(el) {
        //     // 拖拽节点结束后的对调
        //     console.log('拖拽结束: ', el)
        //   }
        // })
      })
    },
    createAnchors(id, node, isFirst) {
      // const outputAnchorNumber = node.outputNum
      // const needTarget = node.needTarget
      // const type = node.type
      // if (needTarget) {
      this.jsPlumb.addEndpoint(id, this.createPoint('target'), { anchors: 'TopCenter', uuid: id + '_0' })
      // }
    },

    createPoint(type, label, id, nodeType) {
      const overlays = type === 'target' ? null : [
        ['Label', {
          location: [0.5, 2],
          label: label,
          cssClass: 'endpointSourceLabel ' + id + ' ' + nodeType
        }]
      ]
      // 鼠标悬浮在端点上的样式
      const connectorPaintStyle = {
        strokeWidth: 1,
        stroke: '#CECECE',
        joinstyle: 'round',
        outlineColor: 'white',
        outlineWidth: 1
      }
      // 鼠标悬浮在连接线上的样式
      const connectorHoverStyle = {
        strokeWidth: 1,
        stroke: '#CECECE',
        outlineWidth: 1,
        outlineColor: 'white'
      }
      return {
        endpoint: ['Dot', { radius: 5 }], // 端点的形状
        connectorStyle: connectorPaintStyle, // 连接线的颜色，大小样式
        connectorHoverStyle: connectorHoverStyle,
        paintStyle: {
          stroke: '#d7d7d7',
          fill: '#fff',
          radius: 5,
          strokeWidth: 1
        }, // 端点的颜色样式
        // anchor: "AutoDefault",
        parameters: { label: label },
        isSource: type === 'source', // 是否可以拖动（作为连线起点）
        connector: ['Bezier', { curviness: 50 }], // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
        isTarget: type === 'target', // 是否可以放置（连线终点）
        maxConnections: type === 'source' ? 1 : -1, // 设置连接点最多可以连接几条线
        connectorOverlays: [
          ['Arrow', { width: 5, length: 5, location: 1 }]
        ],
        overlays: overlays
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.conCen{
  width: 100%;
  height: 94%;
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 125px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    .el-input {
      width: 43%;
    }
  }
  .model-record{
    height: calc(100% - 145px);
    background: #FFFFFF;
    border-radius: 5px;
    >>> .edit-model{
      height:calc(100% - 32px);
      .menuList{
         display: inline-block;
        width:200px;
        vertical-align: top;
        border-radius: 5px 0 0 5px;
        border-right:1px solid #d9d9d9;
        .mb-20{
          width: 100%;
          margin: 0 !important;
            span{
              display: inline-block;
              width: 100%;
              padding: 20px;
            }
        }
        .mb-20:hover,.mb-active{
          background-color: rgba(0,160,233,.1);
        }
      }
      .elContainer{
        display: inline-block;
        width:calc(100% - 568px);
        height: 100%;
        vertical-align: top;
        padding: 20px;
      }
      .elDetail{
         display: inline-block;
        width: 360px;
        height: 100%;
        border-left:1px solid #d9d9d9;
        vertical-align: top;
        border-radius: 0 5px 5px 0;
        p{
          height: 42px;
          line-height: 42px;
          padding-left: 20px;
          border-bottom:1px solid #d9d9d9;
        }
      }
    }
  }
}
.flow-elment{
  width: 174px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #FFFFFF;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 1px solid #D9D9D9;
  position: relative;
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
    line-height: 21px;
  }
  i.iconDelete{
    visibility: hidden;
  }
  span.bg-yellow-3{
    display: inline-block;
    width: 20px;height: 20px;
    text-align: center;
    line-height: 20px;
    color:#fff;
    font-size: 14px;
    border-radius: 50%;
    margin-right: 0;
  }
}
.flow-elment:hover{
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  i.iconDelete{
    visibility: visible;
  }
}
.start-element{
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
