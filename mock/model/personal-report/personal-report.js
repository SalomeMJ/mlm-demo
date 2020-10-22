export default [
  {
    url: '/general/modelReport/personalReport',
    type: 'get',
    response: response => {
      // mock error
      return {
        'code': 200,
        'data': {
          'personInfo': {
            'id': 1,
            'creator': null,
            'createTime': null,
            'updater': null,
            'updateTime': null,
            'appId': '1',
            'modelId': 2,
            'batchNo': null,
            'reportId': null,
            'reportTime': '20181201123000',
            'errorInfo': {},
            'appTaskId': 1,
            'gender': '男性',
            'birthday': '19870201',
            'marridge': '未婚',
            'mobilePhone': null,
            'workPhone': null,
            'homePhone': null,
            'education': '初中及以下',
            'degree': '--',
            'contactAddress': null,
            'household': null
          },
          'basicInfo': {
            'id': null,
            'appId': null,
            'modelId': null,
            'batchNo': null,
            'reportTime': null,
            'errorInfo': {},
            'requestTime': null,
            'reportId': '1',
            'informantName': 'rere',
            'certificateType': '身份证',
            'certificateCode': '123123123',
            'queryOperator': null,
            'queryCode': null,
            'insertTime': null,
            'label': null,
            'appTaskId': null
          },
          'riskScore': 606,
          'creditScoreHead': [
            '特殊行为',
            '担保行为',
            '居住变迁',
            '职业生涯',
            '借贷倾向'
          ],
          'creditScoreBody': {
            '特殊行为': '0',
            '担保行为': '0',
            '居住变迁': '0',
            '职业生涯': '2',
            '借贷倾向': '3'
          },
          'radarList': [
            '50.0000',
            '50.0000',
            '50.0000',
            '50.0000',
            '64.2616',
            '50.0000',
            '50.9484'
          ],
          'radarHeadList': [
            {
              'text': '授信状况',
              'max': 100
            },
            {
              'text': '特殊行为',
              'max': 100
            },
            {
              'text': '担保行为',
              'max': 100
            },
            {
              'text': '居住变迁',
              'max': 100
            },
            {
              'text': '职业生涯',
              'max': 100
            },
            {
              'text': '借贷倾向',
              'max': 100
            },
            {
              'text': '身份信息',
              'max': 100
            }
          ],
          'reportFeatureIndexBos': [
            {
              'feaCnName': '授信状况',
              'meanIndex': '80.8443',
              'personIndex': '50.0000',
              'arrow': 'down',
              'colorBlue': false
            },
            {
              'feaCnName': '特殊行为',
              'meanIndex': '67.8571',
              'personIndex': '50.0000',
              'arrow': 'down',
              'colorBlue': true
            },
            {
              'feaCnName': '担保行为',
              'meanIndex': '61.5219',
              'personIndex': '50.0000',
              'arrow': 'down',
              'colorBlue': true
            },
            {
              'feaCnName': '居住变迁',
              'meanIndex': '71.4286',
              'personIndex': '50.0000',
              'arrow': 'down',
              'colorBlue': true
            },
            {
              'feaCnName': '职业生涯',
              'meanIndex': '82.5204',
              'personIndex': '64.2616',
              'arrow': 'down',
              'colorBlue': true
            },
            {
              'feaCnName': '借贷倾向',
              'meanIndex': '73.8649',
              'personIndex': '50.0000',
              'arrow': 'down',
              'colorBlue': true
            },
            {
              'feaCnName': '身份信息',
              'meanIndex': '71.5641',
              'personIndex': '50.9484',
              'arrow': 'down',
              'colorBlue': false
            }
          ],
          'reportScoreDistBos': [
            {
              'range': '(300, 310]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(310, 320]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(320, 330]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(330, 340]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(340, 350]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(350, 360]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(360, 370]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(370, 380]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(380, 390]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(390, 400]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(400, 410]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(410, 420]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(420, 430]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(430, 440]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(440, 450]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(450, 460]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(460, 470]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(470, 480]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(480, 490]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'red-row'
            },
            {
              'range': '(490, 500]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(500, 510]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(510, 520]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(520, 530]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(530, 540]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(540, 550]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(550, 560]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(560, 570]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(570, 580]',
              'cumRate': '0.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(580, 590]',
              'cumRate': '16.67%',
              'defaultRate': '1.00%',
              'risk': '3.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(590, 600]',
              'cumRate': '16.67%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(600, 610]',
              'cumRate': '33.33%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-high-row'
            },
            {
              'range': '(610, 620]',
              'cumRate': '50.00%',
              'defaultRate': '1.00%',
              'risk': '3.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(620, 630]',
              'cumRate': '83.33%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(630, 640]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(640, 650]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(650, 660]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(660, 670]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(670, 680]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(680, 690]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'yellow-row'
            },
            {
              'range': '(690, 700]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(700, 710]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(710, 720]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(720, 730]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(730, 740]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(740, 750]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(750, 760]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(760, 770]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(770, 780]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(780, 790]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(790, 800]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(800, 810]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(810, 820]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(820, 830]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(830, 840]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(840, 850]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(850, 860]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(860, 870]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(870, 880]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(880, 890]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            },
            {
              'range': '(890, 900]',
              'cumRate': '100.00%',
              'defaultRate': '0.00%',
              'risk': '0.0000',
              'backgroundColor': 'green-row'
            }
          ]
        }
      }
    }
  }

]
