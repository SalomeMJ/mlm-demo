const eventSituation = {
  status: 200,
  message: 'success',
  data: {
    'situationList': {
      'trainData': [
        { 'range': '(~,500]', 'countNum': 5, 'ratio': '0.06%' },
        { 'range': '(500, 510]', 'countNum': 7, 'ratio': '0.09%' },
        { 'range': '(510, 520]', 'countNum': 23, 'ratio': '0.29%' },
        { 'range': '(520, 530]', 'countNum': 44, 'ratio': '0.56%' },
        { 'range': '(530, 540]', 'countNum': 94, 'ratio': '1.20%' },
        { 'range': '(540, 550]', 'countNum': 130, 'ratio': '1.67%' },
        { 'range': '(550, 560]', 'countNum': 194, 'ratio': '2.48%' },
        { 'range': '(560, 570]', 'countNum': 263, 'ratio': '3.37%' },
        { 'range': '(570, 580]', 'countNum': 322, 'ratio': '4.12%' },
        { 'range': '(580, 590]', 'countNum': 459, 'ratio': '5.88%' },
        { 'range': '(590, 600]', 'countNum': 512, 'ratio': '6.56%' },
        { 'range': '(600, 610]', 'countNum': 645, 'ratio': '8.26%' },
        { 'range': '(610, 620]', 'countNum': 994, 'ratio': '12.73%' },
        { 'range': '(620, 630]', 'countNum': 996, 'ratio': '12.76%' },
        { 'range': '(630, 640]', 'countNum': 974, 'ratio': '12.48%' },
        { 'range': '(640, 650]', 'countNum': 779, 'ratio': '9.98%' },
        { 'range': '(650, 660]', 'countNum': 504, 'ratio': '6.46%' },
        { 'range': '(660, 670]', 'countNum': 329, 'ratio': '4.21%' },
        { 'range': '(670, 680]', 'countNum': 242, 'ratio': '3.10%' },
        { 'range': '(680, 690]', 'countNum': 179, 'ratio': '2.29%' },
        { 'range': '(690, 700]', 'countNum': 87, 'ratio': '1.11%' },
        { 'range': '(700,~)', 'countNum': 25, 'ratio': '0.32%' }

      ],
      'actualData': [
        { 'range': '(~,500]', 'countNum': 3, 'ratio': '0.05%' },
        { 'range': '(500, 510]', 'countNum': 8, 'ratio': '0.14%' },
        { 'range': '(510, 520]', 'countNum': 15, 'ratio': '0.26%' },
        { 'range': '(520, 530]', 'countNum': 45, 'ratio': '0.77%' },
        { 'range': '(530, 540]', 'countNum': 61, 'ratio': '1.05%' },
        { 'range': '(540, 550]', 'countNum': 104, 'ratio': '1.78%' },
        { 'range': '(550, 560]', 'countNum': 148, 'ratio': '2.54%' },
        { 'range': '(560, 570]', 'countNum': 167, 'ratio': '2.86%' },
        { 'range': '(570, 580]', 'countNum': 264, 'ratio': '4.53%' },
        { 'range': '(580, 590]', 'countNum': 324, 'ratio': '5.56%' },
        { 'range': '(590, 600]', 'countNum': 391, 'ratio': '6.71%' },
        { 'range': '(600, 610]', 'countNum': 438, 'ratio': '7.51%' },
        { 'range': '(610, 620]', 'countNum': 753, 'ratio': '12.92%' },
        { 'range': '(620, 630]', 'countNum': 740, 'ratio': '12.69%' },
        { 'range': '(630, 640]', 'countNum': 718, 'ratio': '12.32%' },
        { 'range': '(640, 650]', 'countNum': 648, 'ratio': '11.11%' },
        { 'range': '(650, 660]', 'countNum': 372, 'ratio': '6.38%' },
        { 'range': '(660, 670]', 'countNum': 267, 'ratio': '4.58%' },
        { 'range': '(670, 680]', 'countNum': 171, 'ratio': '2.93%' },
        { 'range': '(680, 690]', 'countNum': 110, 'ratio': '1.89%' },
        { 'range': '(690, 700]', 'countNum': 61, 'ratio': '1.05%' },
        { 'range': '(700,~)', 'countNum': 22, 'ratio': '0.38%' }

      ],
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
