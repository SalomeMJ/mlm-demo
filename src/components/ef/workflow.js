const workflow = {
  name: '工作流',
  nodeList: [
    {
      id: 'nodeA',
      name: '开始',
      type: 'task',
      left: 'calc(50% - 87px)',
      top: '20px',
      ico: 'iconPlay'
    },
    {
      id: 'nodeB',
      name: '模型注册',
      left: 'calc(50% - 87px)',
      top: '93px',
      type: 'model',
      iconText: 'Z'
    },
    {
      id: 'nodeC',
      name: '模型验证',
      left: 'calc(50% - 87px)',
      top: '165px',
      type: 'model',
      iconText: 'Y'
    },
    {
      id: 'nodeD',
      name: '模型使用',
      left: 'calc(50% - 87px)',
      top: '238px',
      type: 'model',
      iconText: 'S'
    },
    {
      id: 'nodeE',
      name: '模型停止',
      left: 'calc(50% - 87px)',
      top: '308px',
      type: 'model',
      iconText: 'T'
    },
    {
      id: 'nodeF',
      name: '结束',
      type: 'task',
      left: 'calc(50% - 87px)',
      top: '380px',
      ico: 'iconPlay'
    }
  ],
  lineList: [
    {
      from: 'nodeA',
      to: 'nodeB'
    }, {
      from: 'nodeB',
      to: 'nodeC'
    }, {
      from: 'nodeC',
      to: 'nodeD'
    }, {
      from: 'nodeD',
      to: 'nodeE'
    }, {
      from: 'nodeE',
      to: 'nodeF'
    }
  ]
}

export function getWorkflow() {
  return workflow
}
