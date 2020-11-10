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
          value: 8,
          name: '成员',
          icon: 'iconchengyuan'
        }, {
          value: 11,
          name: '模型',
          icon: 'iconmodel'
        }, {
          value: 12,
          name: '数据',
          icon: 'icondataMsg'
        }
      ]
    },
    warningData: {
      waningItem: [
        {
          name: '正在报警',
          value: 110,
          color: '#333'
        },
        {
          name: '严重',
          value: 64,
          color: '#FF0000'
        },
        {
          name: '一般',
          value: 17,
          color: '#FF7700'
        },
        {
          name: '轻微',
          value: 29,
          color: '#FF7700'
        }
      ],
      warningMsg: [
        {
          bgc: '#FF7700',
          msg: '2020.10.11--14:02:12触发Trigger_1，预警值为12'
        },
        {
          bgc: '#FF7700',
          msg: '2020.10.02--16:12:43触发Trigger_3，预警值为5'
        },
        {
          bgc: '#FFC800',
          msg: '2020.9.26--10:54:12触发Trigger_12，预警值为2'
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
        'number|+1': ['M2010090001', 'M2010110001', 'M2010090003', 'M2010090008'],
        'name|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批'],
        'updateTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24'],
        'head|+1': ['黎簇', '黎簇', '黎簇', '黎簇']
      }
    ],
    'doingMasks|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'mask|+1': ['使用事件', '使用事件', '验证事件', '验证事件'],
        'eventName|+1': ['易速贷申请', '新车申请', '验证事件V10', '验证事件V8'],
        'status|+1': ['配置中', '生效中', '生效中', '生效中'],
        'desc|+1': ['配置中', '审核通过', '验证完成', '验证完成'],
        'useModel|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批']
      }
    ],
    'useEvents|4': [
      { 'id|+1': [1, 2, 3, 4],
        'name|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批'],
        'status|+1': ['配置中', '生效审核中', '生效中', '配置中'],
        'touchTimes|+1': ['11', '5', '1', '0'],
        'effectTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24'],
        'head|+1': ['黎簇', '黎簇', '黎簇', '黎簇'] }
    ],
    'validationData|4': [
      {
        'id|+1': [1, 2, 3, 4],
        'number|+1': ['D2010090001', 'D2010110001', 'D2010090003', 'D2010090008'],
        'name|+1': ['验证数据_11', '验证数据_10', '验证数据_9', '验证数据_8'],
        'timeRange|+1': ['2018.06.28-2019.05.25', '2017.07.18-2018.10.22', '2017.06.01-2018.02.28', '2017.06.01-2018.01.25'],
        'badGoodRate|+1': ['286:1', '72:1', '401:1', '69:1']
      }
    ]
  }
}
export default {
  url: '/project-detail',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: projectDetail
    }
  }
}
