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
      name: '直接上级审核',
      type: 'check',
      left: 'calc(50% - 87px)',
      top: '93px',
      iconText: 'Z'
    },
    {
      id: 'nodeC',
      name: '指定成员审核',
      left: 'calc(50% - 87px)',
      top: '165px',
      type: 'check',
      iconText: 'Z'
    },
    {
      id: 'nodeD',
      name: '抄送',
      left: 'calc(50% - 87px)',
      top: '238px',
      type: 'check',
      iconText: 'C'
    },
    {
      id: 'nodeE',
      name: '审核结束',
      type: 'task',
      left: 'calc(50% - 87px)',
      top: '318px',
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
