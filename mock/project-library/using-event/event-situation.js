const eventSituation = {
  status: 200,
  message: 'success',
  data: {
    'situationList': {
      'trainData': [{
        'range': '202001',
        'countNum': 15,
        'ratio': '15'
      }, {
        'range': '202002',
        'countNum': 17,
        'ratio': '17'
      }, {
        'range': '202003',
        'countNum': 23,
        'ratio': '23'
      }, {
        'range': '202004',
        'countNum': 44,
        'ratio': '44'
      }, {
        'range': '202005',
        'countNum': 94,
        'ratio': '94'
      }, {
        'range': '202006',
        'countNum': 130,
        'ratio': '130'
      }, {
        'range': '202007',
        'countNum': 194,
        'ratio': '194'
      }, {
        'range': '202008',
        'countNum': 263,
        'ratio': '263'
      }, {
        'range': '202009',
        'countNum': 222,
        'ratio': '222'
      }, {
        'range': '202010',
        'countNum': 259,
        'ratio': '259'
      }],
      'actualData': [{
        'range': '(~,500]',
        'countNum': 3,
        'ratio': '0.05%'
      }, {
        'range': '(500, 510]',
        'countNum': 8,
        'ratio': '0.14%'
      }, {
        'range': '(510, 520]',
        'countNum': 15,
        'ratio': '0.26%'
      }, {
        'range': '(520, 530]',
        'countNum': 45,
        'ratio': '0.77%'
      }, {
        'range': '(530, 540]',
        'countNum': 61,
        'ratio': '1.05%'
      }, {
        'range': '(540, 550]',
        'countNum': 104,
        'ratio': '1.78%'
      }, {
        'range': '(550, 560]',
        'countNum': 148,
        'ratio': '2.54%'
      }, {
        'range': '(560, 570]',
        'countNum': 167,
        'ratio': '2.86%'
      }, {
        'range': '(570, 580]',
        'countNum': 264,
        'ratio': '4.53%'
      }, {
        'range': '(580, 590]',
        'countNum': 324,
        'ratio': '5.56%'
      }, {
        'range': '(590, 600]',
        'countNum': 391,
        'ratio': '6.71%'
      }, {
        'range': '(600, 610]',
        'countNum': 438,
        'ratio': '7.51%'
      }, {
        'range': '(610, 620]',
        'countNum': 753,
        'ratio': '12.92%'
      }, {
        'range': '(620, 630]',
        'countNum': 740,
        'ratio': '12.69%'
      }, {
        'range': '(630, 640]',
        'countNum': 718,
        'ratio': '12.32%'
      }, {
        'range': '(640, 650]',
        'countNum': 648,
        'ratio': '11.11%'
      }, {
        'range': '(650, 660]',
        'countNum': 372,
        'ratio': '6.38%'
      }, {
        'range': '(660, 670]',
        'countNum': 267,
        'ratio': '4.58%'
      }, {
        'range': '(670, 680]',
        'countNum': 171,
        'ratio': '2.93%'
      }, {
        'range': '(680, 690]',
        'countNum': 110,
        'ratio': '1.89%'
      }, {
        'range': '(690, 700]',
        'countNum': 61,
        'ratio': '1.05%'
      }, {
        'range': '(700,~)',
        'countNum': 22,
        'ratio': '0.38%'
      }],
      'total': [{
        'trainNum': 7807,
        'trainratio': 1,
        'actualNum': 5830,
        'actualratio': 1
      }]
    }
  }
}
export default {
  url: '/event-situation',
  type: 'get',
  response: response => {
    console.log(response)
    return {
      code: 200,
      data: eventSituation
    }
  }
}
