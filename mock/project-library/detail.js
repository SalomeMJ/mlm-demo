const projectDetail = {
  status: 200,
  message: 'success',
  data: {
    projectDetaiMsg: {
      projectName: '电商打假项目',
      projectPrimary: true,
      projectDesc: 'desc',
      projectData: [
        {
          value: 123,
          name: '成员',
          icon: 'iconchengyuan'
        }, {
          value: 123,
          name: '模型',
          icon: 'iconmodel'
        }, {
          value: 123,
          name: '数据',
          icon: 'icondataMsg'
        }
      ]
    },
    warningData: {
      waningItem: [
        {
          name: '正在报警',
          value: 12,
          color: '#333'
        },
        {
          name: '严重',
          value: 89,
          color: '#FF0000'
        },
        {
          name: '一般',
          value: 46,
          color: '#FF7700'
        },
        {
          name: '轻微',
          value: 97,
          color: '#FFC800'
        },
        {
          name: '预警事件概率',
          value: 0.05,
          color: '#333'
        }
      ],
      warningMsg: [
        {
          bgc: '#FF0000',
          msg: '售价仅为i欸i哈佛'
        },
        {
          bgc: '#FF7700',
          msg: '售价仅为i欸i哈佛'
        },
        {
          bgc: '#FFC800',
          msg: '售价仅为i欸i哈佛'
        }
      ]
    },
    'touchTimesLine': {
      'name': '预警触发次数图',
      'echartType': 'line',
      'monitorTime': 2,
      'echartsData': [
        { 'time': 2020.01, 'num': 63, 'name': '触发次数' },
        { 'time': 2020.02, 'num': 103, 'name': '触发次数' },
        { 'time': 2020.03, 'num': 86, 'name': '触发次数' },
        { 'time': 2020.04, 'num': 95, 'name': '触发次数' },
        { 'time': 2020.05, 'num': 153, 'name': '触发次数' },
        { 'time': 2020.06, 'num': 137, 'name': '触发次数' },
        { 'time': 2020.07, 'num': 110, 'name': '触发次数' }
      ]
    },
    'modelData|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'number|+1': ['MTS2813', 'MTS2814', 'MTS2815', 'MTS2816'],
        'name|+1': ['马静文', '马静文', '马静文', '马静文'],
        'updateTime|+1': ['马静文', '马静文', '马静文', '马静文'],
        'head|+1': ['马静文', '马静文', '马静文', '马静文']
      }
    ],
    'doingMasks|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'mask|+1': ['使用事件1第一步', 'MTS2814', 'MTS2815', 'MTS2816']
      }
    ],
    'useEvents|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'number|+1': ['MTS2813', 'MTS2814', 'MTS2815', 'MTS2816'],
        'status|+1': ['停用审核中', '生效中', '生效中', '生效中'],
        'touchTimes|+1': [1, 2, 3, 4],
        'effectTime|+1': ['2020.02.09-01:31:21', '2020.02.09-01:31:21', '2020.02.09-01:31:21', '2020.02.09-01:31:21'],
        'head|+1': ['马静文', '马静文', '马静文', '马静文']
      }
    ],
    'validationData|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'number|+1': ['MTS2813', 'MTS2814', 'MTS2815', 'MTS2816'],
        'name|+1': ['马静文', '马静文', '马静文', '马静文'],
        'timeRange|+1': ['2020.02.09-2020.02.10', '2020.02.09-2020.02.10', '2020.02.09-2020.02.10', '2020.02.09-2020.02.10'],
        'badGoodRate|+1': [0.1, 0.2, 0.3, 0.4]
      }
    ]
  }
}
export default {
  url: '/project-detail',
  type: 'get',
  response: response => {
    console.log(response)
    return {
      code: 200,
      data: projectDetail
    }
  }
}
