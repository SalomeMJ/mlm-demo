<template>
  <div ref="tool" class="flow-menu">
    <div v-for="menu in test" :key="menu.id" class="mb-20">
      <draggable v-model="test" :="draggableOptions" @end="end($event, menu)" @start="move($event, menu)">
        <span class="fs-14 text-grey-0 cursor-pointer"> {{ menu.name }} </span>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

const mousePosition = {
  left: -1,
  top: -1
}

export default {
  components: {
    draggable
  },
  data() {
    return {
      activeNames: '1',
      // draggable配置参数参考 https://www.cnblogs.com/weixin186/p/10108679.html
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
      // 默认打开的左侧菜单的id
      test: [
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
      nodeMenu: {}
    }
  },
  created() {
    /**
             * 以下是为了解决在火狐浏览器上推拽时弹出tab页到搜索问题
             * @param event
             */
    if (this.isFirefox()) {
      document.body.ondrop = function(event) {
        // 解决火狐浏览器无法获取鼠标拖拽结束的坐标问题
        mousePosition.left = event.layerX
        mousePosition.top = event.clientY - 50
        event.preventDefault()
        event.stopPropagation()
      }
    }
  },
  methods: {
    // 根据类型获取左侧菜单对象
    getMenuByType(type) {
      for (let i = 0; i < this.menuList.length; i++) {
        const children = this.menuList[i].children
        for (let j = 0; j < children.length; j++) {
          if (children[j].type === type) {
            return children[j]
          }
        }
      }
    },
    // 拖拽开始时触发
    move(evt, a, b, c) {
    //   var type = evt.item.attributes.type.nodeValue
      this.nodeMenu = a
    },
    // 拖拽结束时触发
    end(evt, e) {
      this.$emit('addNode', evt, e, mousePosition)
    },
    // 是否是火狐浏览器
    isFirefox() {
      const userAgent = navigator.userAgent
      if (userAgent.indexOf('Firefox') > -1) {
        return true
      }
      return false
    }
  }
}
</script>
