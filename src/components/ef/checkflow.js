const checkflow = {
  name: '审批流',
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
      iconText: 'Z'
    },
    {
      id: 'nodeC',
      name: '直接上级审核',
      left: 'calc(50% - 87px)',
      top: '165px',
      iconText: 'Z'
    },
    {
      id: 'nodeD',
      name: '指定成员审核',
      left: 'calc(50% - 87px)',
      top: '238px',
      iconText: 'Z'
    },
    {
      id: 'nodeE',
      name: '抄送',
      left: 'calc(50% - 87px)',
      top: '308px',
      iconText: 'C'
    },
    {
      id: 'nodeF',
      name: '审核结束',
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

export function getCheckflow() {
  return checkflow
}
