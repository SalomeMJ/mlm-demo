const dataB = {
  name: '流程B',
  nodeList: [
    {
      id: 'nodeA',
      name: '开始',
      type: 'task',
      left: '0',
      top: '20px',
      ico: 'iconPlay'
    }
  ],
  lineList: [{
    from: 'nodeA',
    to: 'nodeB',
    label: '条件A'
  }, {
    from: 'nodeA',
    to: 'nodeC',
    label: '条件B'
  }, {
    from: 'nodeB',
    to: 'nodeD'
  }, {
    from: 'nodeC',
    to: 'nodeD'
  }
  ]
}

export function getDataB() {
  return dataB
}
