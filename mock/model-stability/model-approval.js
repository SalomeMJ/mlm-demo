const mondelApproval = {
  status: 200,
  message: 'success',
  data: {
    'modelCenHead|3': [
      {
        'name|+1': ['放款金额', '放款申请单', '平均申请金额'],
        'number|+1': ['￥7,230,227', '￥2,082', '￥3,473'],
        'up|+1': ['37%', '14%', '19%'],
        'bgc|+1': ['bg-yellow', 'bg-grey-0', 'bg-red-0'],
        'icon|+1': ['iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon', 'iconDashboard-refuse bg-monitor-icon']
      }
    ],
    'loanOrderList': {
      'name': '放款申请单/放款金额变化趋势',
      'echartType': 'lineAndBar',
      'echartsData': {
        'time': ['2020.02', '2020.03', '2020.04', '2020.05', '2020.06', '2020.07'],
        'orderNum': [946, 1317, 1803, 2309, 2727, 2082],
        'loanMoney': [3790829, 4902825, 6302927, 6720924, 8790280, 7230227],
        'yEange': {
          'max': 10000000,
          'min': 1000000,
          'interval': 1000000
        }
      }
    },
    'loanPassList': {
      'name': '放款通过率及分布情况',
      'echartType': 'lineAndBar',
      'echartsData': {
        'requestOrderNum': ['946', '1317', '1803', '2309', '2727', '2082 '],
        'loanPass': ['509', '707', '1242', '1527', '1824', '1352 '],
        'loanTest': ['296', '284', '307', '350', '589', '493 '],
        'loanReject': ['141', '326', '254', '432', '314', '237 '],
        'loanPassPercent': ['0.53', '0.54', '0.69', '0.66', '0.67', '0.65'],
        'loanTestPercent': ['0.31', '0.22', '0.17', '0.15', '0.225', '0.24'],
        'loanRejectPercent': ['0.15', '0.25', '0.14', '0.19', '0.12', '0.11'],
        'createTime': ['2020.02', '2020.03', '2020.04', '2020.05', '2020.06', '2020.07 '],
        'yRange': { 'max ': 1, 'min ': 0, 'interval ': 0.1 }
      }
    }
  }
}
export default {
  url: '/monitor/model-approval',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: mondelApproval
    }
  }
}
