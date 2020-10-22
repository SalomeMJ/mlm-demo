const mondelCenList = {
  status: 200,
  message: 'success',
  data: {
    'modelCenHead|5': [
      {
        'name|+1': ['申请单总量', '建议通过', '建议拒绝', '建议人工审核', '审单时效'],
        'number|+1': ['38,972', '25,213', '11,134', '2.625', '27s'],
        'up|+1': ['37.00%', '14.00%', '19.00%', '29.00%', '13.00%'],
        'bgc|+1': ['bg-purple', 'bg-blue', 'bg-red', 'bg-orange', 'bg-grey'],
        'icon|+1': ['iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon']
      }
    ],
    'timeChange': {
      'name': '冠军挑战者各决策时间变化图',
      'echartType': 'lineAndBar',
      'monitorTime': 2,
      'total': {
        'approval': 32450,
        'refuse': 8532,
        'check': 21389
      },
      'echartsData': {
        'time': ['2020.01', '2020.02', '2020.03', '2020.04', '2020.05', '2020.06', '2020.07'],
        'total': [17201, 27201, 29802, 50282, 54125, 31214, 38972],
        'approval': [3928, 13928, 10227, 20361, 32450, 19341, 25213],
        'check': [3928, 13928, 10227, 20361, 32450, 19341, 25213],
        'refuse': [7245, 7245, 7491, 8532, 2753, 2631, 2625],
        'approvalRate': [81, 51, 34, 40, 60, 62, 65]
      }
    },
    'touchTimesPie': {
      'name': '预警触发饼状图',
      'echartType': 'pie',
      'monitorTime': 2,
      'echartsData': [
        { 'name': '严重', 'value': 64 },
        { 'name': '一般', 'value': 17 },
        { 'name': '轻微', 'value': 29 }

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
    }
  }
}
export default {
  url: '/monitor/model-cen',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: mondelCenList
    }
  }
}
