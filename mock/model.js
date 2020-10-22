// import Mock from 'mockjs'

export default [
  // 模型列表
  {
    url: '/general/model/findAllOnlineAndOffline',
    type: 'get',
    response: config => {
      // mock error
      return {
        'code': 200,
        'data': [{
          id: 1,
          'dataSetName': '选项卡111111',
          'modelCode': '0000001',
          'onlineStatus': '已上线',
          'versionMap': {
            1: 'yyyy',
            2: 'xxx'
          }
        }, {
          id: 2,
          'dataSetName': '选项卡22222222',
          'modelCode': '0000002',
          'onlineStatus': '已下线',
          'versionMap': {
            1: 'yyyy',
            2: 'xxx'
          }
        }]
      }
    }
  },
  // 模型对应到的最大最小时间
  {
    url: '/general/modelMonitor/getExtremeTime',
    type: 'get',
    response: config => {
      // mock error
      return {
        code: 200,
        data: {
          'minTime': '1593655200000',
          'maxTime': '1593914400000',
          'timeTrendMinTime': '2020-7-2 00:00:00',
          'timeTrendMaxTime': '2020-7-5 23:59:59',
          'countsTrendMinTime': '2020-7-2 00:00:00',
          'countsTrendMaxTime': '2020-7-5 23:59:59',
          'featureMinTime': '2020-7-2 00:00:00',
          'featureMaxTime': '2020-7-5 23:59:59'
        }
      }
    }
  },
  // 时间改变，模型数据改变
  {
    url: '/general/modelMonitor/calculationByTypeAndTime',
    type: 'post',
    response: config => {
      console.log('这里是公共的查询接口', config)
      if (config) {
        console.log(config)
      }
      if (config.type === 'TIME_TREND') {
        return {
          'code': 200,
          'data': {
            'timeRange': [
              '2020-07-02 10:00',
              '2020-07-02 11:00',
              '2020-07-02 12:00',
              '2020-07-02 01:00',
              '2020-07-02 02:00',
              '2020-07-02 03:00',
              '2020-07-02 04:00',
              '2020-07-02 05:00',
              '2020-07-02 06:00',
              '2020-07-02 07:00',
              '2020-07-02 08:00',
              '2020-07-02 09:00',
              '2020-07-02 10:00',
              '2020-07-02 11:00',
              '2020-07-03 12:00',
              '2020-07-03 01:00',
              '2020-07-03 02:00',
              '2020-07-03 03:00',
              '2020-07-03 04:00',
              '2020-07-03 05:00',
              '2020-07-03 06:00',
              '2020-07-03 07:00',
              '2020-07-03 08:00',
              '2020-07-03 09:00',
              '2020-07-03 10:00',
              '2020-07-03 11:00',
              '2020-07-03 12:00',
              '2020-07-03 01:00',
              '2020-07-03 02:00',
              '2020-07-03 03:00',
              '2020-07-03 04:00',
              '2020-07-03 05:00',
              '2020-07-03 06:00',
              '2020-07-03 07:00',
              '2020-07-03 08:00',
              '2020-07-03 09:00',
              '2020-07-03 10:00',
              '2020-07-03 11:00',
              '2020-07-04 12:00',
              '2020-07-04 01:00',
              '2020-07-04 02:00',
              '2020-07-04 03:00',
              '2020-07-04 04:00',
              '2020-07-04 05:00',
              '2020-07-04 06:00',
              '2020-07-04 07:00',
              '2020-07-04 08:00',
              '2020-07-04 09:00',
              '2020-07-04 10:00',
              '2020-07-04 11:00',
              '2020-07-04 12:00',
              '2020-07-04 01:00',
              '2020-07-04 02:00',
              '2020-07-04 03:00',
              '2020-07-04 04:00',
              '2020-07-04 05:00',
              '2020-07-04 06:00',
              '2020-07-04 07:00',
              '2020-07-04 08:00',
              '2020-07-04 09:00',
              '2020-07-04 10:00',
              '2020-07-04 11:00',
              '2020-07-05 12:00',
              '2020-07-05 01:00',
              '2020-07-05 02:00',
              '2020-07-05 03:00',
              '2020-07-05 04:00',
              '2020-07-05 05:00',
              '2020-07-05 06:00',
              '2020-07-05 07:00',
              '2020-07-05 08:00',
              '2020-07-05 09:00',
              '2020-07-05 10:00',
              '2020-07-05 11:00',
              '2020-07-05 12:00',
              '2020-07-05 01:00',
              '2020-07-05 02:00',
              '2020-07-05 03:00',
              '2020-07-05 04:00',
              '2020-07-05 05:00',
              '2020-07-05 06:00',
              '2020-07-05 07:00',
              '2020-07-05 08:00',
              '2020-07-05 09:00',
              '2020-07-05 10:00',
              '2020-07-05 11:00',
              '2020-07-06 12:00',
              '2020-07-06 01:00',
              '2020-07-06 02:00',
              '2020-07-06 03:00',
              '2020-07-06 04:00',
              '2020-07-06 05:00',
              '2020-07-06 06:00',
              '2020-07-06 07:00',
              '2020-07-06 08:00',
              '2020-07-06 09:00',
              '2020-07-06 10:00'
            ], 'resultList': [
              [
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '86400.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '86400.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '0.0000',
                '86400.0000'
              ],
              [
                '86400.0000',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '86400.0000',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '86400.0000',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '86400.0000',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '86400.0000'
              ]
            ], 'headList': [
              '总响应时间',
              '平均响应时间'
            ]
          }
        }
      } else if (config.type === 'COUNTS_TREND') {
        return {
          'code': 200,
          'data': {
            'timeRange': [
              '2020-07-02',
              '2020-07-03',
              '2020-07-04',
              '2020-07-05',
              '2020-07-06'
            ],
            'countsList': [
              1,
              1,
              1,
              1,
              1
            ],
            'headList': [
              '请求次数'
            ]
          }
        }
      } else if (config.type === 'SCORE_INTERVAL') {
        return {
          'code': 200,
          'data': [
            {
              'socreRange': '(300, 310]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(310, 320]',
              'realTimeRate': '28.57%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(320, 330]',
              'realTimeRate': '28.57%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(330, 340]',
              'realTimeRate': '28.57%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(340, 350]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(350, 360]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(360, 370]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(370, 380]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(380, 390]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(390, 400]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(400, 410]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(410, 420]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(420, 430]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(430, 440]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(440, 450]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(450, 460]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(460, 470]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.05%'
            },
            {
              'socreRange': '(470, 480]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '6.18%'
            },
            {
              'socreRange': '(480, 490]',
              'realTimeRate': '0.00%',
              'trainRate': '0.39%',
              'verificationRate': '7.97%'
            },
            {
              'socreRange': '(490, 500]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '10.86%'
            },
            {
              'socreRange': '(500, 510]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.36%'
            },
            {
              'socreRange': '(510, 520]',
              'realTimeRate': '0.00%',
              'trainRate': '4.28%',
              'verificationRate': '0.66%'
            },
            {
              'socreRange': '(520, 530]',
              'realTimeRate': '0.00%',
              'trainRate': '8.74%',
              'verificationRate': '4.22%'
            },
            {
              'socreRange': '(530, 540]',
              'realTimeRate': '0.00%',
              'trainRate': '0.29%',
              'verificationRate': '17.48%'
            },
            {
              'socreRange': '(540, 550]',
              'realTimeRate': '0.00%',
              'trainRate': '1.46%',
              'verificationRate': '2.40%'
            },
            {
              'socreRange': '(550, 560]',
              'realTimeRate': '0.00%',
              'trainRate': '13.02%',
              'verificationRate': '3.73%'
            },
            {
              'socreRange': '(560, 570]',
              'realTimeRate': '0.00%',
              'trainRate': '0.19%',
              'verificationRate': '0.92%'
            },
            {
              'socreRange': '(570, 580]',
              'realTimeRate': '0.00%',
              'trainRate': '8.26%',
              'verificationRate': '9.48%'
            },
            {
              'socreRange': '(580, 590]',
              'realTimeRate': '0.00%',
              'trainRate': '3.10%',
              'verificationRate': '4.55%'
            },
            {
              'socreRange': '(590, 600]',
              'realTimeRate': '0.00%',
              'trainRate': '5.82%',
              'verificationRate': '8.69%'
            },
            {
              'socreRange': '(600, 610]',
              'realTimeRate': '0.00%',
              'trainRate': '13.89%',
              'verificationRate': '9.15%'
            },
            {
              'socreRange': '(610, 620]',
              'realTimeRate': '0.00%',
              'trainRate': '4.95%',
              'verificationRate': '5.85%'
            },
            {
              'socreRange': '(620, 630]',
              'realTimeRate': '0.00%',
              'trainRate': '8.05%',
              'verificationRate': '2.73%'
            },
            {
              'socreRange': '(630, 640]',
              'realTimeRate': '0.00%',
              'trainRate': '15.63%',
              'verificationRate': '2.79%'
            },
            {
              'socreRange': '(640, 650]',
              'realTimeRate': '0.00%',
              'trainRate': '15.82%',
              'verificationRate': '30.00%'
            },
            {
              'socreRange': '(650, 660]',
              'realTimeRate': '0.00%',
              'trainRate': '13.68%',
              'verificationRate': '3.55%'
            },
            {
              'socreRange': '(660, 670]',
              'realTimeRate': '0.00%',
              'trainRate': '0.58%',
              'verificationRate': '0.82%'
            },
            {
              'socreRange': '(670, 680]',
              'realTimeRate': '0.00%',
              'trainRate': '3.20%',
              'verificationRate': '0.41%'
            },
            {
              'socreRange': '(680, 690]',
              'realTimeRate': '0.00%',
              'trainRate': '11.74%',
              'verificationRate': '10.38%'
            },
            {
              'socreRange': '(690, 700]',
              'realTimeRate': '0.00%',
              'trainRate': '7.37%',
              'verificationRate': '28.24%'
            },
            {
              'socreRange': '(700, 710]',
              'realTimeRate': '0.00%',
              'trainRate': '0.78%',
              'verificationRate': '5.93%'
            },
            {
              'socreRange': '(710, 720]',
              'realTimeRate': '0.00%',
              'trainRate': '10.87%',
              'verificationRate': '0.15%'
            },
            {
              'socreRange': '(720, 730]',
              'realTimeRate': '0.00%',
              'trainRate': '11.27%',
              'verificationRate': '0.05%'
            },
            {
              'socreRange': '(730, 740]',
              'realTimeRate': '0.00%',
              'trainRate': '1.07%',
              'verificationRate': '0.20%'
            },
            {
              'socreRange': '(740, 750]',
              'realTimeRate': '0.00%',
              'trainRate': '1.26%',
              'verificationRate': '0.10%'
            },
            {
              'socreRange': '(750, 760]',
              'realTimeRate': '0.00%',
              'trainRate': '0.10%',
              'verificationRate': '9.20%'
            },
            {
              'socreRange': '(760, 770]',
              'realTimeRate': '0.00%',
              'trainRate': '9.23%',
              'verificationRate': '0.05%'
            },
            {
              'socreRange': '(770, 780]',
              'realTimeRate': '0.00%',
              'trainRate': '11.76%',
              'verificationRate': '2.48%'
            },
            {
              'socreRange': '(780, 790]',
              'realTimeRate': '0.00%',
              'trainRate': '1.65%',
              'verificationRate': '5.93%'
            },
            {
              'socreRange': '(790, 800]',
              'realTimeRate': '0.00%',
              'trainRate': '4.37%',
              'verificationRate': '2.61%'
            },
            {
              'socreRange': '(800, 810]',
              'realTimeRate': '14.29%',
              'trainRate': '6.03%',
              'verificationRate': '1.02%'
            },
            {
              'socreRange': '(810, 820]',
              'realTimeRate': '0.00%',
              'trainRate': '1.07%',
              'verificationRate': '0.46%'
            },
            {
              'socreRange': '(820, 830]',
              'realTimeRate': '0.00%',
              'trainRate': '0.10%',
              'verificationRate': '0.15%'
            },
            {
              'socreRange': '(830, 840]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.05%'
            },
            {
              'socreRange': '(840, 850]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.15%'
            },
            {
              'socreRange': '(850, 860]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(860, 870]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(870, 880]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(880, 890]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            },
            {
              'socreRange': '(890, 900]',
              'realTimeRate': '0.00%',
              'trainRate': '0.00%',
              'verificationRate': '0.00%'
            }
          ]
        }
      } else if (config.type === 'FEATRUE_PORTRAIT') {
        return {
          'code': 200,
          'data': {
            'radarHeadList': [
              {
                'text': '借贷倾向',
                'max': 100
              },
              {
                'text': '担保行为',
                'max': 100
              },
              {
                'text': '授信状况',
                'max': 100
              },
              {
                'text': '特殊行为',
                'max': 100
              },
              {
                'text': '职业生涯',
                'max': 100
              },
              {
                'text': '身份信息',
                'max': 100
              }
            ],
            'featureProtraitList': [
              {
                'feature': '借贷倾向',
                'trainIndex': '74.6081',
                'realTimeIndex': '50.0000',
                'arrow': 'down'
              },
              {
                'feature': '担保行为',
                'trainIndex': '55.1124',
                'realTimeIndex': '60.0000',
                'arrow': 'up'
              },
              {
                'feature': '授信状况',
                'trainIndex': '69.4019',
                'realTimeIndex': '70.0000',
                'arrow': 'up'
              },
              {
                'feature': '特殊行为',
                'trainIndex': '69.3036',
                'realTimeIndex': '80.0000',
                'arrow': 'up'
              },
              {
                'feature': '职业生涯',
                'trainIndex': '74.5062',
                'realTimeIndex': '90.0000',
                'arrow': 'up'
              },
              {
                'feature': '身份信息',
                'trainIndex': '75.2719',
                'realTimeIndex': '100.0000',
                'arrow': 'up'
              }
            ],
            'radarValueList': [
              50,
              60,
              70,
              80,
              90,
              100
            ]
          }
        }
      } else {
        return {
          'code': 200,
          'data': {
            'scoreCounts': [
              {
                'product': '(300, 310]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(310, 320]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 2
              },
              {
                'product': '(320, 330]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 2
              },
              {
                'product': '(330, 340]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 2
              },
              {
                'product': '(340, 350]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(350, 360]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(360, 370]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(370, 380]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(380, 390]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(390, 400]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(400, 410]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(410, 420]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(420, 430]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(430, 440]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(440, 450]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(450, 460]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(460, 470]',
                '实时数据': 0,
                '训练数据': 1,
                '验证数据': 0
              },
              {
                'product': '(470, 480]',
                '实时数据': 0,
                '训练数据': 121,
                '验证数据': 0
              },
              {
                'product': '(480, 490]',
                '实时数据': 4,
                '训练数据': 156,
                '验证数据': 0
              },
              {
                'product': '(490, 500]',
                '实时数据': 0,
                '训练数据': 168,
                '验证数据': 0
              },
              {
                'product': '(500, 510]',
                '实时数据': 0,
                '训练数据': 7,
                '验证数据': 0
              },
              {
                'product': '(510, 520]',
                '实时数据': 34,
                '训练数据': 13,
                '验证数据': 0
              },
              {
                'product': '(520, 530]',
                '实时数据': 55,
                '训练数据': 38,
                '验证数据': 0
              },
              {
                'product': '(530, 540]',
                '实时数据': 3,
                '训练数据': 164,
                '验证数据': 0
              },
              {
                'product': '(540, 550]',
                '实时数据': 10,
                '训练数据': 47,
                '验证数据': 0
              },
              {
                'product': '(550, 560]',
                '实时数据': 94,
                '训练数据': 73,
                '验证数据': 0
              },
              {
                'product': '(560, 570]',
                '实时数据': 2,
                '训练数据': 18,
                '验证数据': 0
              },
              {
                'product': '(570, 580]',
                '实时数据': 65,
                '训练数据': 141,
                '验证数据': 0
              },
              {
                'product': '(580, 590]',
                '实时数据': 7,
                '训练数据': 89,
                '验证数据': 0
              },
              {
                'product': '(590, 600]',
                '实时数据': 25,
                '训练数据': 170,
                '验证数据': 0
              },
              {
                'product': '(600, 610]',
                '实时数据': 93,
                '训练数据': 179,
                '验证数据': 0
              },
              {
                'product': '(610, 620]',
                '实时数据': 21,
                '训练数据': 70,
                '验证数据': 0
              },
              {
                'product': '(620, 630]',
                '实时数据': 38,
                '训练数据': 9,
                '验证数据': 0
              },
              {
                'product': '(630, 640]',
                '实时数据': 91,
                '训练数据': 10,
                '验证数据': 0
              },
              {
                'product': '(640, 650]',
                '实时数据': 83,
                '训练数据': 53,
                '验证数据': 0
              },
              {
                'product': '(650, 660]',
                '实时数据': 66,
                '训练数据': 25,
                '验证数据': 0
              },
              {
                'product': '(660, 670]',
                '实时数据': 1,
                '训练数据': 16,
                '验证数据': 0
              },
              {
                'product': '(670, 680]',
                '实时数据': 13,
                '训练数据': 8,
                '验证数据': 0
              },
              {
                'product': '(680, 690]',
                '实时数据': 51,
                '训练数据': 25,
                '验证数据': 0
              },
              {
                'product': '(690, 700]',
                '实时数据': 21,
                '训练数据': 63,
                '验证数据': 0
              },
              {
                'product': '(700, 710]',
                '实时数据': 3,
                '训练数据': 27,
                '验证数据': 0
              },
              {
                'product': '(710, 720]',
                '实时数据': 62,
                '训练数据': 3,
                '验证数据': 0
              },
              {
                'product': '(720, 730]',
                '实时数据': 81,
                '训练数据': 1,
                '验证数据': 0
              },
              {
                'product': '(730, 740]',
                '实时数据': 6,
                '训练数据': 4,
                '验证数据': 0
              },
              {
                'product': '(740, 750]',
                '实时数据': 3,
                '训练数据': 2,
                '验证数据': 0
              },
              {
                'product': '(750, 760]',
                '实时数据': 1,
                '训练数据': 91,
                '验证数据': 0
              },
              {
                'product': '(760, 770]',
                '实时数据': 70,
                '训练数据': 1,
                '验证数据': 0
              },
              {
                'product': '(770, 780]',
                '实时数据': 96,
                '训练数据': 4,
                '验证数据': 0
              },
              {
                'product': '(780, 790]',
                '实时数据': 17,
                '训练数据': 116,
                '验证数据': 0
              },
              {
                'product': '(790, 800]',
                '实时数据': 25,
                '训练数据': 51,
                '验证数据': 0
              },
              {
                'product': '(800, 810]',
                '实时数据': 52,
                '训练数据': 20,
                '验证数据': 1
              },
              {
                'product': '(810, 820]',
                '实时数据': 6,
                '训练数据': 9,
                '验证数据': 0
              },
              {
                'product': '(820, 830]',
                '实时数据': 1,
                '训练数据': 3,
                '验证数据': 0
              },
              {
                'product': '(830, 840]',
                '实时数据': 0,
                '训练数据': 1,
                '验证数据': 0
              },
              {
                'product': '(840, 850]',
                '实时数据': 0,
                '训练数据': 3,
                '验证数据': 0
              },
              {
                'product': '(850, 860]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(860, 870]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(870, 880]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(880, 890]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              },
              {
                'product': '(890, 900]',
                '实时数据': 0,
                '训练数据': 0,
                '验证数据': 0
              }
            ],
            'headList': [
              'product',
              '实时数据',
              '训练数据',
              '验证数据'
            ]
          }
        }
      }
    }
  },
  // 次数，访问成功率的接口
  {
    url: '/general/modelMonitor/calculationRequestBasicInfos',
    type: 'get',
    response: config => {
      console.log(config.query)
      if (config.query.id === '1') {
        return {
          'code': 200,
          'data': {
            'id': null,
            'onlineTimes': '6天23小时9分钟',
            'requestCounts': 5,
            'avgResponseTime': 86400,
            'requestRate': {
              'responseType': [
                '访问成功',
                '白户数据',
                '其他'
              ],
              'requestRateList': [
                {
                  'name': '访问成功',
                  'text': null,
                  'value': 3,
                  'max': null
                },
                {
                  'name': '白户数据',
                  'text': null,
                  'value': 1,
                  'max': null
                },
                {
                  'name': '其他',
                  'text': null,
                  'value': 1,
                  'max': null
                }
              ],
              'successRate': '60.00%'
            },
            'responseTimeTrend': {},
            'responseCountsTrend': {},
            'scoreIntervalList': [
              {
                'socreRange': '(300, 310]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': null
              },
              {
                'socreRange': '(310, 320]',
                'realTimeRate': '28.57%',
                'trainRate': null,
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(320, 330]',
                'realTimeRate': '28.57%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(330, 340]',
                'realTimeRate': '28.57%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(340, 350]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(350, 360]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(360, 370]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(370, 380]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(380, 390]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(390, 400]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(400, 410]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(410, 420]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(420, 430]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(430, 440]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(440, 450]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(450, 460]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(460, 470]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(470, 480]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '6.18%'
              },
              {
                'socreRange': '(480, 490]',
                'realTimeRate': '0.00%',
                'trainRate': '0.39%',
                'verificationRate': '7.97%'
              },
              {
                'socreRange': '(490, 500]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '10.86%'
              },
              {
                'socreRange': '(500, 510]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.36%'
              },
              {
                'socreRange': '(510, 520]',
                'realTimeRate': '0.00%',
                'trainRate': '4.28%',
                'verificationRate': '0.66%'
              },
              {
                'socreRange': '(520, 530]',
                'realTimeRate': '0.00%',
                'trainRate': '8.74%',
                'verificationRate': '4.22%'
              },
              {
                'socreRange': '(530, 540]',
                'realTimeRate': '0.00%',
                'trainRate': '0.29%',
                'verificationRate': '17.48%'
              },
              {
                'socreRange': '(540, 550]',
                'realTimeRate': '0.00%',
                'trainRate': '1.46%',
                'verificationRate': '2.40%'
              },
              {
                'socreRange': '(550, 560]',
                'realTimeRate': '0.00%',
                'trainRate': '13.02%',
                'verificationRate': '3.73%'
              },
              {
                'socreRange': '(560, 570]',
                'realTimeRate': '0.00%',
                'trainRate': '0.19%',
                'verificationRate': '0.92%'
              },
              {
                'socreRange': '(570, 580]',
                'realTimeRate': '0.00%',
                'trainRate': '8.26%',
                'verificationRate': '9.48%'
              },
              {
                'socreRange': '(580, 590]',
                'realTimeRate': '0.00%',
                'trainRate': '3.10%',
                'verificationRate': '4.55%'
              },
              {
                'socreRange': '(590, 600]',
                'realTimeRate': '0.00%',
                'trainRate': '5.82%',
                'verificationRate': '8.69%'
              },
              {
                'socreRange': '(600, 610]',
                'realTimeRate': '0.00%',
                'trainRate': '13.89%',
                'verificationRate': '9.15%'
              },
              {
                'socreRange': '(610, 620]',
                'realTimeRate': '0.00%',
                'trainRate': '4.95%',
                'verificationRate': '5.85%'
              },
              {
                'socreRange': '(620, 630]',
                'realTimeRate': '0.00%',
                'trainRate': '8.05%',
                'verificationRate': '2.73%'
              },
              {
                'socreRange': '(630, 640]',
                'realTimeRate': '0.00%',
                'trainRate': '15.63%',
                'verificationRate': '2.79%'
              },
              {
                'socreRange': '(640, 650]',
                'realTimeRate': '0.00%',
                'trainRate': '15.82%',
                'verificationRate': '30.00%'
              },
              {
                'socreRange': '(650, 660]',
                'realTimeRate': '0.00%',
                'trainRate': '13.68%',
                'verificationRate': '3.55%'
              },
              {
                'socreRange': '(660, 670]',
                'realTimeRate': '0.00%',
                'trainRate': '0.58%',
                'verificationRate': '0.82%'
              },
              {
                'socreRange': '(670, 680]',
                'realTimeRate': '0.00%',
                'trainRate': '3.20%',
                'verificationRate': '0.41%'
              },
              {
                'socreRange': '(680, 690]',
                'realTimeRate': '0.00%',
                'trainRate': '11.74%',
                'verificationRate': '10.38%'
              },
              {
                'socreRange': '(690, 700]',
                'realTimeRate': '0.00%',
                'trainRate': '7.37%',
                'verificationRate': '28.24%'
              },
              {
                'socreRange': '(700, 710]',
                'realTimeRate': '0.00%',
                'trainRate': '0.78%',
                'verificationRate': '5.93%'
              },
              {
                'socreRange': '(710, 720]',
                'realTimeRate': '0.00%',
                'trainRate': '10.87%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(720, 730]',
                'realTimeRate': '0.00%',
                'trainRate': '11.27%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(730, 740]',
                'realTimeRate': '0.00%',
                'trainRate': '1.07%',
                'verificationRate': '0.20%'
              },
              {
                'socreRange': '(740, 750]',
                'realTimeRate': '0.00%',
                'trainRate': '1.26%',
                'verificationRate': '0.10%'
              },
              {
                'socreRange': '(750, 760]',
                'realTimeRate': '0.00%',
                'trainRate': '0.10%',
                'verificationRate': '9.20%'
              },
              {
                'socreRange': '(760, 770]',
                'realTimeRate': '0.00%',
                'trainRate': '9.23%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(770, 780]',
                'realTimeRate': '0.00%',
                'trainRate': '11.76%',
                'verificationRate': '2.48%'
              },
              {
                'socreRange': '(780, 790]',
                'realTimeRate': '0.00%',
                'trainRate': '1.65%',
                'verificationRate': '5.93%'
              },
              {
                'socreRange': '(790, 800]',
                'realTimeRate': '0.00%',
                'trainRate': '4.37%',
                'verificationRate': '2.61%'
              },
              {
                'socreRange': '(800, 810]',
                'realTimeRate': '14.29%',
                'trainRate': '6.03%',
                'verificationRate': '1.02%'
              },
              {
                'socreRange': '(810, 820]',
                'realTimeRate': '0.00%',
                'trainRate': '1.07%',
                'verificationRate': '0.46%'
              },
              {
                'socreRange': '(820, 830]',
                'realTimeRate': '0.00%',
                'trainRate': '0.10%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(830, 840]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(840, 850]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(850, 860]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(860, 870]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(870, 880]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(880, 890]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(890, 900]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              }
            ],
            'featureProtrait': {
              'radarHeadList': [
                {
                  'text': '借贷倾向',
                  'max': 100
                },
                {
                  'text': '担保行为',
                  'max': 100
                },
                {
                  'text': '授信状况',
                  'max': 100
                },
                {
                  'text': '特殊行为',
                  'max': 100
                },
                {
                  'text': '职业生涯',
                  'max': 100
                },
                {
                  'text': '身份信息',
                  'max': 100
                }
              ],
              'featureProtraitList': [
                {
                  'feature': '借贷倾向',
                  'trainIndex': '74.6081',
                  'realTimeIndex': '50.0000',
                  'arrow': 'down'
                },
                {
                  'feature': '担保行为',
                  'trainIndex': '55.1124',
                  'realTimeIndex': '60.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '授信状况',
                  'trainIndex': '69.4019',
                  'realTimeIndex': '70.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '特殊行为',
                  'trainIndex': '69.3036',
                  'realTimeIndex': '80.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '职业生涯',
                  'trainIndex': '74.5062',
                  'realTimeIndex': '90.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '身份信息',
                  'trainIndex': '75.2719',
                  'realTimeIndex': '100.0000',
                  'arrow': 'up'
                }
              ],
              'radarValueList': [
                50,
                60,
                70,
                80,
                90,
                100
              ]
            },
            'predictionScoreTrend': {
              'scoreCounts': [
                {
                  'product': '(300, 310]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(310, 320]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 2
                },
                {
                  'product': '(320, 330]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 2
                },
                {
                  'product': '(330, 340]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 2
                },
                {
                  'product': '(340, 350]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(350, 360]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(360, 370]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(370, 380]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(380, 390]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(390, 400]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(400, 410]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(410, 420]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(420, 430]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(430, 440]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(440, 450]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(450, 460]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(460, 470]',
                  '实时数据': 0,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(470, 480]',
                  '实时数据': 0,
                  '训练数据': 121,
                  '验证数据': 0
                },
                {
                  'product': '(480, 490]',
                  '实时数据': 4,
                  '训练数据': 156,
                  '验证数据': 0
                },
                {
                  'product': '(490, 500]',
                  '实时数据': 0,
                  '训练数据': 168,
                  '验证数据': 0
                },
                {
                  'product': '(500, 510]',
                  '实时数据': 0,
                  '训练数据': 7,
                  '验证数据': 0
                },
                {
                  'product': '(510, 520]',
                  '实时数据': 34,
                  '训练数据': 13,
                  '验证数据': 0
                },
                {
                  'product': '(520, 530]',
                  '实时数据': 55,
                  '训练数据': 38,
                  '验证数据': 0
                },
                {
                  'product': '(530, 540]',
                  '实时数据': 3,
                  '训练数据': 164,
                  '验证数据': 0
                },
                {
                  'product': '(540, 550]',
                  '实时数据': 10,
                  '训练数据': 47,
                  '验证数据': 0
                },
                {
                  'product': '(550, 560]',
                  '实时数据': 94,
                  '训练数据': 73,
                  '验证数据': 0
                },
                {
                  'product': '(560, 570]',
                  '实时数据': 2,
                  '训练数据': 18,
                  '验证数据': 0
                },
                {
                  'product': '(570, 580]',
                  '实时数据': 65,
                  '训练数据': 141,
                  '验证数据': 0
                },
                {
                  'product': '(580, 590]',
                  '实时数据': 7,
                  '训练数据': 89,
                  '验证数据': 0
                },
                {
                  'product': '(590, 600]',
                  '实时数据': 25,
                  '训练数据': 170,
                  '验证数据': 0
                },
                {
                  'product': '(600, 610]',
                  '实时数据': 93,
                  '训练数据': 179,
                  '验证数据': 0
                },
                {
                  'product': '(610, 620]',
                  '实时数据': 21,
                  '训练数据': 70,
                  '验证数据': 0
                },
                {
                  'product': '(620, 630]',
                  '实时数据': 38,
                  '训练数据': 9,
                  '验证数据': 0
                },
                {
                  'product': '(630, 640]',
                  '实时数据': 91,
                  '训练数据': 10,
                  '验证数据': 0
                },
                {
                  'product': '(640, 650]',
                  '实时数据': 83,
                  '训练数据': 53,
                  '验证数据': 0
                },
                {
                  'product': '(650, 660]',
                  '实时数据': 66,
                  '训练数据': 25,
                  '验证数据': 0
                },
                {
                  'product': '(660, 670]',
                  '实时数据': 1,
                  '训练数据': 16,
                  '验证数据': 0
                },
                {
                  'product': '(670, 680]',
                  '实时数据': 13,
                  '训练数据': 8,
                  '验证数据': 0
                },
                {
                  'product': '(680, 690]',
                  '实时数据': 51,
                  '训练数据': 25,
                  '验证数据': 0
                },
                {
                  'product': '(690, 700]',
                  '实时数据': 21,
                  '训练数据': 63,
                  '验证数据': 0
                },
                {
                  'product': '(700, 710]',
                  '实时数据': 3,
                  '训练数据': 27,
                  '验证数据': 0
                },
                {
                  'product': '(710, 720]',
                  '实时数据': 62,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(720, 730]',
                  '实时数据': 81,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(730, 740]',
                  '实时数据': 6,
                  '训练数据': 4,
                  '验证数据': 0
                },
                {
                  'product': '(740, 750]',
                  '实时数据': 3,
                  '训练数据': 2,
                  '验证数据': 0
                },
                {
                  'product': '(750, 760]',
                  '实时数据': 1,
                  '训练数据': 91,
                  '验证数据': 0
                },
                {
                  'product': '(760, 770]',
                  '实时数据': 70,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(770, 780]',
                  '实时数据': 96,
                  '训练数据': 4,
                  '验证数据': 0
                },
                {
                  'product': '(780, 790]',
                  '实时数据': 17,
                  '训练数据': 116,
                  '验证数据': 0
                },
                {
                  'product': '(790, 800]',
                  '实时数据': 25,
                  '训练数据': 51,
                  '验证数据': 0
                },
                {
                  'product': '(800, 810]',
                  '实时数据': 52,
                  '训练数据': 20,
                  '验证数据': 1
                },
                {
                  'product': '(810, 820]',
                  '实时数据': 6,
                  '训练数据': 9,
                  '验证数据': 0
                },
                {
                  'product': '(820, 830]',
                  '实时数据': 1,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(830, 840]',
                  '实时数据': 0,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(840, 850]',
                  '实时数据': 0,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(850, 860]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(860, 870]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(870, 880]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(880, 890]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(890, 900]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                }
              ],
              'headList': [
                'product',
                '实时数据',
                '训练数据',
                '验证数据'
              ]
            }
          }
        }
      } else {
        return {
          'code': 200,
          'data': {
            'id': null,
            'onlineTimes': '9天23小时9分钟',
            'requestCounts': 80,
            'avgResponseTime': 90.123,
            'requestRate': {
              'responseType': [
                '访问成功',
                '白户数据',
                '其他'
              ],
              'requestRateList': [
                {
                  'name': '访问成功',
                  'text': null,
                  'value': 3,
                  'max': null
                },
                {
                  'name': '白户数据',
                  'text': null,
                  'value': 6,
                  'max': null
                },
                {
                  'name': '其他',
                  'text': null,
                  'value': 1,
                  'max': null
                }
              ],
              'successRate': '30.00%'
            },
            'responseTimeTrend': {
              'timeRange': [
                '2020-07-02 10:00',
                '2020-07-02 11:00',
                '2020-07-02 12:00',
                '2020-07-02 01:00',
                '2020-07-02 02:00',
                '2020-07-02 03:00',
                '2020-07-02 04:00',
                '2020-07-02 05:00',
                '2020-07-02 06:00',
                '2020-07-02 07:00',
                '2020-07-02 08:00',
                '2020-07-02 09:00',
                '2020-07-02 10:00',
                '2020-07-02 11:00',
                '2020-07-03 12:00',
                '2020-07-03 01:00',
                '2020-07-03 02:00',
                '2020-07-03 03:00',
                '2020-07-03 04:00',
                '2020-07-03 05:00',
                '2020-07-03 06:00',
                '2020-07-03 07:00',
                '2020-07-03 08:00',
                '2020-07-03 09:00',
                '2020-07-03 10:00',
                '2020-07-03 11:00',
                '2020-07-03 12:00',
                '2020-07-03 01:00',
                '2020-07-03 02:00',
                '2020-07-03 03:00',
                '2020-07-03 04:00',
                '2020-07-03 05:00',
                '2020-07-03 06:00',
                '2020-07-03 07:00',
                '2020-07-03 08:00',
                '2020-07-03 09:00',
                '2020-07-03 10:00',
                '2020-07-03 11:00',
                '2020-07-04 12:00',
                '2020-07-04 01:00',
                '2020-07-04 02:00',
                '2020-07-04 03:00',
                '2020-07-04 04:00',
                '2020-07-04 05:00',
                '2020-07-04 06:00',
                '2020-07-04 07:00',
                '2020-07-04 08:00',
                '2020-07-04 09:00',
                '2020-07-04 10:00',
                '2020-07-04 11:00',
                '2020-07-04 12:00',
                '2020-07-04 01:00',
                '2020-07-04 02:00',
                '2020-07-04 03:00',
                '2020-07-04 04:00',
                '2020-07-04 05:00',
                '2020-07-04 06:00',
                '2020-07-04 07:00',
                '2020-07-04 08:00',
                '2020-07-04 09:00',
                '2020-07-04 10:00',
                '2020-07-04 11:00',
                '2020-07-05 12:00',
                '2020-07-05 01:00',
                '2020-07-05 02:00',
                '2020-07-05 03:00',
                '2020-07-05 04:00',
                '2020-07-05 05:00',
                '2020-07-05 06:00',
                '2020-07-05 07:00',
                '2020-07-05 08:00',
                '2020-07-05 09:00',
                '2020-07-05 10:00',
                '2020-07-05 11:00',
                '2020-07-05 12:00',
                '2020-07-05 01:00',
                '2020-07-05 02:00',
                '2020-07-05 03:00',
                '2020-07-05 04:00',
                '2020-07-05 05:00',
                '2020-07-05 06:00',
                '2020-07-05 07:00',
                '2020-07-05 08:00',
                '2020-07-05 09:00',
                '2020-07-05 10:00',
                '2020-07-05 11:00',
                '2020-07-06 12:00',
                '2020-07-06 01:00',
                '2020-07-06 02:00',
                '2020-07-06 03:00',
                '2020-07-06 04:00',
                '2020-07-06 05:00',
                '2020-07-06 06:00',
                '2020-07-06 07:00',
                '2020-07-06 08:00',
                '2020-07-06 09:00',
                '2020-07-06 10:00'
              ],
              'resultList': [
              ],
              'headList': [
                '总响应时间',
                '平均响应时间'
              ]
            },
            'responseCountsTrend': {
              'timeRange': [
                '2020-07-02',
                '2020-07-03',
                '2020-07-04',
                '2020-07-05',
                '2020-07-06'
              ],
              'countsList': [
                8,
                19,
                30,
                40,
                100
              ],
              'headList': [
                '请求次数'
              ]
            },
            'scoreIntervalList': [
              {
                'socreRange': '(300, 310]',
                'realTimeRate': '9.00%',
                'trainRate': '0.00%',
                'verificationRate': null
              },
              {
                'socreRange': '(310, 320]',
                'realTimeRate': '28.57%',
                'trainRate': null,
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(320, 330]',
                'realTimeRate': '28.57%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(330, 340]',
                'realTimeRate': '28.57%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(340, 350]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(350, 360]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(360, 370]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(370, 380]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(380, 390]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(390, 400]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(400, 410]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(410, 420]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(420, 430]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(430, 440]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(440, 450]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(450, 460]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(460, 470]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(470, 480]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '6.18%'
              },
              {
                'socreRange': '(480, 490]',
                'realTimeRate': '0.00%',
                'trainRate': '0.39%',
                'verificationRate': '7.97%'
              },
              {
                'socreRange': '(490, 500]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '10.86%'
              },
              {
                'socreRange': '(500, 510]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.36%'
              },
              {
                'socreRange': '(510, 520]',
                'realTimeRate': '0.00%',
                'trainRate': '4.28%',
                'verificationRate': '0.66%'
              },
              {
                'socreRange': '(520, 530]',
                'realTimeRate': '0.00%',
                'trainRate': '8.74%',
                'verificationRate': '4.22%'
              },
              {
                'socreRange': '(530, 540]',
                'realTimeRate': '0.00%',
                'trainRate': '0.29%',
                'verificationRate': '17.48%'
              },
              {
                'socreRange': '(540, 550]',
                'realTimeRate': '0.00%',
                'trainRate': '1.46%',
                'verificationRate': '2.40%'
              },
              {
                'socreRange': '(550, 560]',
                'realTimeRate': '0.00%',
                'trainRate': '13.02%',
                'verificationRate': '3.73%'
              },
              {
                'socreRange': '(560, 570]',
                'realTimeRate': '0.00%',
                'trainRate': '0.19%',
                'verificationRate': '0.92%'
              },
              {
                'socreRange': '(570, 580]',
                'realTimeRate': '0.00%',
                'trainRate': '8.26%',
                'verificationRate': '9.48%'
              },
              {
                'socreRange': '(580, 590]',
                'realTimeRate': '0.00%',
                'trainRate': '3.10%',
                'verificationRate': '4.55%'
              },
              {
                'socreRange': '(590, 600]',
                'realTimeRate': '0.00%',
                'trainRate': '5.82%',
                'verificationRate': '8.69%'
              },
              {
                'socreRange': '(600, 610]',
                'realTimeRate': '0.00%',
                'trainRate': '13.89%',
                'verificationRate': '9.15%'
              },
              {
                'socreRange': '(610, 620]',
                'realTimeRate': '0.00%',
                'trainRate': '4.95%',
                'verificationRate': '5.85%'
              },
              {
                'socreRange': '(620, 630]',
                'realTimeRate': '0.00%',
                'trainRate': '8.05%',
                'verificationRate': '2.73%'
              },
              {
                'socreRange': '(630, 640]',
                'realTimeRate': '0.00%',
                'trainRate': '15.63%',
                'verificationRate': '2.79%'
              },
              {
                'socreRange': '(640, 650]',
                'realTimeRate': '0.00%',
                'trainRate': '15.82%',
                'verificationRate': '30.00%'
              },
              {
                'socreRange': '(650, 660]',
                'realTimeRate': '0.00%',
                'trainRate': '13.68%',
                'verificationRate': '3.55%'
              },
              {
                'socreRange': '(660, 670]',
                'realTimeRate': '0.00%',
                'trainRate': '0.58%',
                'verificationRate': '0.82%'
              },
              {
                'socreRange': '(670, 680]',
                'realTimeRate': '0.00%',
                'trainRate': '3.20%',
                'verificationRate': '0.41%'
              },
              {
                'socreRange': '(680, 690]',
                'realTimeRate': '0.00%',
                'trainRate': '11.74%',
                'verificationRate': '10.38%'
              },
              {
                'socreRange': '(690, 700]',
                'realTimeRate': '0.00%',
                'trainRate': '7.37%',
                'verificationRate': '28.24%'
              },
              {
                'socreRange': '(700, 710]',
                'realTimeRate': '0.00%',
                'trainRate': '0.78%',
                'verificationRate': '5.93%'
              },
              {
                'socreRange': '(710, 720]',
                'realTimeRate': '0.00%',
                'trainRate': '10.87%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(720, 730]',
                'realTimeRate': '0.00%',
                'trainRate': '11.27%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(730, 740]',
                'realTimeRate': '0.00%',
                'trainRate': '1.07%',
                'verificationRate': '0.20%'
              },
              {
                'socreRange': '(740, 750]',
                'realTimeRate': '0.00%',
                'trainRate': '1.26%',
                'verificationRate': '0.10%'
              },
              {
                'socreRange': '(750, 760]',
                'realTimeRate': '0.00%',
                'trainRate': '0.10%',
                'verificationRate': '9.20%'
              },
              {
                'socreRange': '(760, 770]',
                'realTimeRate': '0.00%',
                'trainRate': '9.23%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(770, 780]',
                'realTimeRate': '0.00%',
                'trainRate': '11.76%',
                'verificationRate': '2.48%'
              },
              {
                'socreRange': '(780, 790]',
                'realTimeRate': '0.00%',
                'trainRate': '1.65%',
                'verificationRate': '5.93%'
              },
              {
                'socreRange': '(790, 800]',
                'realTimeRate': '0.00%',
                'trainRate': '4.37%',
                'verificationRate': '2.61%'
              },
              {
                'socreRange': '(800, 810]',
                'realTimeRate': '14.29%',
                'trainRate': '6.03%',
                'verificationRate': '1.02%'
              },
              {
                'socreRange': '(810, 820]',
                'realTimeRate': '0.00%',
                'trainRate': '1.07%',
                'verificationRate': '0.46%'
              },
              {
                'socreRange': '(820, 830]',
                'realTimeRate': '0.00%',
                'trainRate': '0.10%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(830, 840]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.05%'
              },
              {
                'socreRange': '(840, 850]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.15%'
              },
              {
                'socreRange': '(850, 860]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(860, 870]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(870, 880]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(880, 890]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              },
              {
                'socreRange': '(890, 900]',
                'realTimeRate': '0.00%',
                'trainRate': '0.00%',
                'verificationRate': '0.00%'
              }
            ],
            'featureProtrait': {
              'radarHeadList': [
                {
                  'text': '借贷倾向',
                  'max': 300
                },
                {
                  'text': '担保行为',
                  'max': 1600
                },
                {
                  'text': '授信状况',
                  'max': 100
                },
                {
                  'text': '特殊行为',
                  'max': 100
                },
                {
                  'text': '职业生涯',
                  'max': 100
                },
                {
                  'text': '身份信息',
                  'max': 100
                }
              ],
              'featureProtraitList': [
                {
                  'feature': '借贷倾向',
                  'trainIndex': '1000.6081',
                  'realTimeIndex': '50.0000',
                  'arrow': 'down'
                },
                {
                  'feature': '担保行为',
                  'trainIndex': '55.1124',
                  'realTimeIndex': '60.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '授信状况',
                  'trainIndex': '69.4019',
                  'realTimeIndex': '70.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '特殊行为',
                  'trainIndex': '69.3036',
                  'realTimeIndex': '80.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '职业生涯',
                  'trainIndex': '74.5062',
                  'realTimeIndex': '90.0000',
                  'arrow': 'up'
                },
                {
                  'feature': '身份信息',
                  'trainIndex': '75.2719',
                  'realTimeIndex': '100.0000',
                  'arrow': 'up'
                }
              ],
              'radarValueList': [
                90,
                60,
                70,
                80,
                90,
                100
              ]
            },
            'predictionScoreTrend': {
              'scoreCounts': [
                {
                  'product': '(300, 310]',
                  '实时数据': 100,
                  '训练数据': 300,
                  '验证数据': 600
                },
                {
                  'product': '(310, 320]',
                  '实时数据': 200,
                  '训练数据': 300,
                  '验证数据': 700
                },
                {
                  'product': '(320, 330]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 2
                },
                {
                  'product': '(330, 340]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 2
                },
                {
                  'product': '(340, 350]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(350, 360]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(360, 370]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(370, 380]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(380, 390]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(390, 400]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(400, 410]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(410, 420]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(420, 430]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(430, 440]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(440, 450]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(450, 460]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(460, 470]',
                  '实时数据': 0,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(470, 480]',
                  '实时数据': 0,
                  '训练数据': 121,
                  '验证数据': 0
                },
                {
                  'product': '(480, 490]',
                  '实时数据': 4,
                  '训练数据': 156,
                  '验证数据': 0
                },
                {
                  'product': '(490, 500]',
                  '实时数据': 0,
                  '训练数据': 168,
                  '验证数据': 0
                },
                {
                  'product': '(500, 510]',
                  '实时数据': 0,
                  '训练数据': 7,
                  '验证数据': 0
                },
                {
                  'product': '(510, 520]',
                  '实时数据': 34,
                  '训练数据': 13,
                  '验证数据': 0
                },
                {
                  'product': '(520, 530]',
                  '实时数据': 55,
                  '训练数据': 38,
                  '验证数据': 0
                },
                {
                  'product': '(530, 540]',
                  '实时数据': 3,
                  '训练数据': 164,
                  '验证数据': 0
                },
                {
                  'product': '(540, 550]',
                  '实时数据': 10,
                  '训练数据': 47,
                  '验证数据': 0
                },
                {
                  'product': '(550, 560]',
                  '实时数据': 94,
                  '训练数据': 73,
                  '验证数据': 0
                },
                {
                  'product': '(560, 570]',
                  '实时数据': 2,
                  '训练数据': 18,
                  '验证数据': 0
                },
                {
                  'product': '(570, 580]',
                  '实时数据': 65,
                  '训练数据': 141,
                  '验证数据': 0
                },
                {
                  'product': '(580, 590]',
                  '实时数据': 7,
                  '训练数据': 89,
                  '验证数据': 0
                },
                {
                  'product': '(590, 600]',
                  '实时数据': 25,
                  '训练数据': 170,
                  '验证数据': 0
                },
                {
                  'product': '(600, 610]',
                  '实时数据': 93,
                  '训练数据': 179,
                  '验证数据': 0
                },
                {
                  'product': '(610, 620]',
                  '实时数据': 21,
                  '训练数据': 70,
                  '验证数据': 0
                },
                {
                  'product': '(620, 630]',
                  '实时数据': 38,
                  '训练数据': 9,
                  '验证数据': 0
                },
                {
                  'product': '(630, 640]',
                  '实时数据': 91,
                  '训练数据': 10,
                  '验证数据': 0
                },
                {
                  'product': '(640, 650]',
                  '实时数据': 83,
                  '训练数据': 53,
                  '验证数据': 0
                },
                {
                  'product': '(650, 660]',
                  '实时数据': 66,
                  '训练数据': 25,
                  '验证数据': 0
                },
                {
                  'product': '(660, 670]',
                  '实时数据': 1,
                  '训练数据': 16,
                  '验证数据': 0
                },
                {
                  'product': '(670, 680]',
                  '实时数据': 13,
                  '训练数据': 8,
                  '验证数据': 0
                },
                {
                  'product': '(680, 690]',
                  '实时数据': 51,
                  '训练数据': 25,
                  '验证数据': 0
                },
                {
                  'product': '(690, 700]',
                  '实时数据': 21,
                  '训练数据': 63,
                  '验证数据': 0
                },
                {
                  'product': '(700, 710]',
                  '实时数据': 3,
                  '训练数据': 27,
                  '验证数据': 0
                },
                {
                  'product': '(710, 720]',
                  '实时数据': 62,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(720, 730]',
                  '实时数据': 81,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(730, 740]',
                  '实时数据': 6,
                  '训练数据': 4,
                  '验证数据': 0
                },
                {
                  'product': '(740, 750]',
                  '实时数据': 3,
                  '训练数据': 2,
                  '验证数据': 0
                },
                {
                  'product': '(750, 760]',
                  '实时数据': 1,
                  '训练数据': 91,
                  '验证数据': 0
                },
                {
                  'product': '(760, 770]',
                  '实时数据': 70,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(770, 780]',
                  '实时数据': 96,
                  '训练数据': 4,
                  '验证数据': 0
                },
                {
                  'product': '(780, 790]',
                  '实时数据': 17,
                  '训练数据': 116,
                  '验证数据': 0
                },
                {
                  'product': '(790, 800]',
                  '实时数据': 25,
                  '训练数据': 51,
                  '验证数据': 0
                },
                {
                  'product': '(800, 810]',
                  '实时数据': 52,
                  '训练数据': 20,
                  '验证数据': 1
                },
                {
                  'product': '(810, 820]',
                  '实时数据': 6,
                  '训练数据': 9,
                  '验证数据': 0
                },
                {
                  'product': '(820, 830]',
                  '实时数据': 1,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(830, 840]',
                  '实时数据': 0,
                  '训练数据': 1,
                  '验证数据': 0
                },
                {
                  'product': '(840, 850]',
                  '实时数据': 0,
                  '训练数据': 3,
                  '验证数据': 0
                },
                {
                  'product': '(850, 860]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(860, 870]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(870, 880]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(880, 890]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                },
                {
                  'product': '(890, 900]',
                  '实时数据': 0,
                  '训练数据': 0,
                  '验证数据': 0
                }
              ],
              'headList': [
                'product',
                '实时数据',
                '训练数据',
                '验证数据'
              ]
            }
          }
        }
      }
      // mock error
    }
  },
  // 模型列表
  {
    url: '/general/model/onlineModelList',
    type: 'get',
    response: config => {
      if (config) {
        console.log(config)
      }
      return {
        code: 200,
        data: [
          {
            'id': 1,
            'creator': null,
            'createTime': '2020.06.16-16:55:51',
            'updater': null,
            'updateTime': '2020.07.03-11:07:12',
            'excelPath': '/file-resources/1592298052555_测试数据4000新(1).xlsx',
            'trainProPath': '测试数据4000新(1)_1592298129326_train_pro_2020-06-16_17_02_22_718565',
            'testProPath': '测试数据4000新(1)_1592298129326_test_pro_2020-06-16_17_02_22_718565',
            'templateManageId': 1,
            'status': 'APPLICATION',
            'ks': 0.322369,
            'auc': 0.684259,
            'psi': 0.683361,
            'ksData': null,
            'aucData': null,
            'psiData': null,
            'scoreDistr': null,
            'scoreGoodBad': null,
            'liftCurve': null,
            'personIndexMean': null,
            'maxValue': null,
            'minValue': null,
            'dataSetCode': 'XL20200616001',
            'dataSetName': '测试数据4000新(1)',
            'saveName': '测试数据4000新(1)_1592298129326',
            'modelCode': 'M20200616001',
            'uploadDataStep': 12,
            'modelDesc': '测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新',
            'cleanbcount': 4000,
            'cleanacount': 4000,
            'trainEndTime': '2020.06.16-17:02:23',
            'onlineStatus': 'WAIT_ONLINE',
            'onlined': false,
            'checkStatus': null,
            'statusName': null,
            'onlineStatusName': '待上线',
            'record': null,
            'appId': null,
            'data': null,
            'modelVersionId': null,
            'onlineTime': null,
            'offlineTime': null,
            'versionMap': null,
            'xyuploadPath': '/home/wolf-test/IT/jenkins-deploy/wolf-dev/file-resources/D120200616170136.csv'
          }, {
            'id': 1,
            'creator': null,
            'createTime': '2020.06.16-16:55:51',
            'updater': null,
            'updateTime': '2020.07.03-11:07:12',
            'excelPath': '/file-resources/1592298052555_测试数据4000新(1).xlsx',
            'trainProPath': '测试数据4000新(1)_1592298129326_train_pro_2020-06-16_17_02_22_718565',
            'testProPath': '测试数据4000新(1)_1592298129326_test_pro_2020-06-16_17_02_22_718565',
            'templateManageId': 1,
            'status': 'APPLICATION',
            'ks': 0.322369,
            'auc': 0.684259,
            'psi': 0.683361,
            'ksData': null,
            'aucData': null,
            'psiData': null,
            'scoreDistr': null,
            'scoreGoodBad': null,
            'liftCurve': null,
            'personIndexMean': null,
            'maxValue': null,
            'minValue': null,
            'dataSetCode': 'XL20200616001',
            'dataSetName': '测试数据4000新(1)',
            'saveName': '测试数据4000新(1)_1592298129326',
            'modelCode': 'M20200616001',
            'uploadDataStep': 12,
            'modelDesc': '测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新测试数据4000新',
            'cleanbcount': 4000,
            'cleanacount': 4000,
            'trainEndTime': '2020.06.16-17:02:23',
            'onlineStatus': 'WAIT_ONLINE',
            'onlined': false,
            'checkStatus': null,
            'statusName': null,
            'onlineStatusName': '待上线',
            'record': null,
            'appId': null,
            'data': null,
            'modelVersionId': null,
            'onlineTime': null,
            'offlineTime': null,
            'versionMap': null,
            'xyuploadPath': '/home/wolf-test/IT/jenkins-deploy/wolf-dev/file-resources/D120200616170136.csv'
          },
          {
            'id': 2,
            'creator': null,
            'createTime': '2020.06.16-17:02:23',
            'updater': null,
            'updateTime': '2020.07.02-11:07:12',
            'excelPath': '/file-resources/1592298142598_测试数据-白户1.xlsx',
            'trainProPath': '测试数据-白户1_1592298317743_train_pro_2020-06-16_17_05_18_562964',
            'testProPath': '测试数据-白户1_1592298317743_test_pro_2020-06-16_17_05_18_562964',
            'templateManageId': 2,
            'status': 'APPLICATION',
            'ks': 1,
            'auc': 0,
            'psi': 0.249426,
            'ksData': null,
            'aucData': null,
            'psiData': null,
            'scoreDistr': null,
            'scoreGoodBad': null,
            'liftCurve': null,
            'personIndexMean': null,
            'maxValue': null,
            'minValue': null,
            'dataSetCode': 'XL20200616002',
            'dataSetName': '测试数据-白户1',
            'saveName': '测试数据-白户1_1592298317743',
            'modelCode': 'M20200616002',
            'uploadDataStep': 12,
            'modelDesc': null,
            'cleanbcount': 20,
            'cleanacount': 20,
            'trainEndTime': '2020.06.16-17:05:19',
            'onlineStatus': 'ONLINE',
            'onlined': true,
            'checkStatus': null,
            'statusName': null,
            'onlineStatusName': '已上线',
            'record': null,
            'appId': null,
            'data': null,
            'modelVersionId': null,
            'onlineTime': null,
            'offlineTime': null,
            'versionMap': null,
            'xyuploadPath': '/home/wolf-test/IT/jenkins-deploy/wolf-dev/file-resources/D220200616170510.csv'
          },
          {
            'id': 3,
            'creator': null,
            'createTime': '2020.06.16-17:28:55',
            'updater': null,
            'updateTime': '2020.07.07-11:17:33',
            'excelPath': '/file-resources/1592299733544_测试数据4000新(2).xlsx',
            'trainProPath': '测试数据4000新(2)_1592300643042_train_pro_2020-06-16_17_44_16_292585',
            'testProPath': '测试数据4000新(2)_1592300643042_test_pro_2020-06-16_17_44_16_292585',
            'templateManageId': 5,
            'status': 'APPLICATION',
            'ks': 0.330242,
            'auc': 0.69518,
            'psi': 0.777284,
            'ksData': null,
            'aucData': null,
            'psiData': null,
            'scoreDistr': null,
            'scoreGoodBad': null,
            'liftCurve': null,
            'personIndexMean': null,
            'maxValue': null,
            'minValue': null,
            'dataSetCode': 'XL20200616003',
            'dataSetName': '测试数据4000新(2)',
            'saveName': '测试数据4000新(2)_1592300643042',
            'modelCode': 'M20200616003',
            'uploadDataStep': 11,
            'modelDesc': null,
            'cleanbcount': 4000,
            'cleanacount': 4000,
            'trainEndTime': '2020.06.16-17:44:16',
            'onlineStatus': 'OFFLINE',
            'onlined': false,
            'checkStatus': null,
            'statusName': null,
            'onlineStatusName': '已下线',
            'record': null,
            'appId': null,
            'data': null,
            'modelVersionId': null,
            'onlineTime': null,
            'offlineTime': null,
            'versionMap': null,
            'xyuploadPath': '/home/wolf-test/IT/jenkins-deploy/wolf-dev/file-resources/D320200616173848.csv'
          }
        ]
      }
    }
  },
  // 模型详情
  {
    url: '/general/model/modelDetail',
    type: 'get',
    response: config => {
      if (config) {
        console.log(config)
      }
      return {
        code: 200,
        data: {
          'id': 1,
          'creator': null,
          'createTime': null,
          'updater': null,
          'updateTime': null,
          'excelPath': null,
          'trainProPath': null,
          'testProPath': null,
          'templateManageId': null,
          'status': null,
          'ks': null,
          'auc': null,
          'psi': null,
          'ksData': null,
          'aucData': null,
          'psiData': null,
          'scoreDistr': null,
          'scoreGoodBad': null,
          'liftCurve': null,
          'personIndexMean': null,
          'maxValue': null,
          'minValue': null,
          'dataSetCode': null,
          'dataSetName': '测试数据4000新',
          'saveName': '测试数据4000新(1)_1592298129326',
          'modelCode': 'M20200616001',
          'uploadDataStep': null,
          'modelDesc': null,
          'cleanbcount': null,
          'cleanacount': null,
          'trainEndTime': null,
          'onlineStatus': 'ONLINE',
          'onlined': null,
          'checkStatus': null,
          'runningTime': '7天3小时21分钟',
          'onlineStatusName': '已上线',
          'onlineTime': '2020.07.02-11:07:08',
          'offlineTime': '2020.07.03-11:07:12',
          'xyuploadPath': null
        }
      }
    }
  },
  // 预测结果时间范围
  {
    url: '/general/applicationTask/getTime',
    type: 'get',
    response: config => {
      if (config) {
        console.log(config)
      }
      return {
        code: 200,
        data: {
          'minDate': '2020-07-06 02:48:18 +0000',
          'maxDate': '2020-07-06 02:49:25 +0000'
        }
      }
    }
  },
  // 模型预测结果列表
  {
    url: '/general/applicationTask/predict',
    type: 'get',
    response: config => {
      if (config) {
        console.log(config)
      }
      return {
        code: 200,
        data: {
          'results': [
            {
              'id': 15,
              'creator': 'system',
              'createTime': '2020.07.06-10:48:18',
              'updater': 'system',
              'updateTime': '2020.07.06-10:48:18',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': 'SUCCEED',
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            },
            {
              'id': 16,
              'creator': 'system',
              'createTime': '2020.07.06-10:49:25',
              'updater': 'system',
              'updateTime': '2020.07.06-10:49:25',
              'modelCode': 'M20200616001',
              'reportId': '1',
              'lenderName': '王小名',
              'appId': '112',
              'riskScore': null,
              'reportTime': '20201201123000',
              'callBackUrl': null,
              'status': null,
              'shapValueDict': null,
              'personIndexDict': null
            }
          ],
          'total': 12
        }
      }
    }
  },
  {
    url: '/general/model/checkStatus',
    type: 'post',
    response: config => {
      // mock error
      return {
        'code': 200,
        'data': false
      }
    }
  }
]
