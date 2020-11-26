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
  ]
}

export function getDataB() {
  return dataB
}
