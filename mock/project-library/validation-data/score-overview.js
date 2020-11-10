const scoreOverview = {
  status: 200,
  message: 'success',
  data: {
    'scoreDistributionChart': {
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
    },
    'scoreDistriratioChart': {
      'data1': [
        { 'range': '(~,500]', 'countNum': 1, 'ratio': '0.05%' },
        { 'range': '(500, 510]', 'countNum': 2, 'ratio': '0.14%' },
        { 'range': '(510, 520]', 'countNum': 5, 'ratio': '0.26%' },
        { 'range': '(520, 530]', 'countNum': 14, 'ratio': '0.77%' },
        { 'range': '(530, 540]', 'countNum': 18, 'ratio': '1.05%' },
        { 'range': '(540, 550]', 'countNum': 31, 'ratio': '1.78%' },
        { 'range': '(550, 560]', 'countNum': 44, 'ratio': '2.54%' },
        { 'range': '(560, 570]', 'countNum': 50, 'ratio': '2.86%' },
        { 'range': '(570, 580]', 'countNum': 79, 'ratio': '4.53%' },
        { 'range': '(580, 590]', 'countNum': 97, 'ratio': '5.56%' },
        { 'range': '(590, 600]', 'countNum': 117, 'ratio': '6.71%' },
        { 'range': '(600, 610]', 'countNum': 131, 'ratio': '7.51%' },
        { 'range': '(610, 620]', 'countNum': 226, 'ratio': '12.92%' },
        { 'range': '(620, 630]', 'countNum': 222, 'ratio': '12.69%' },
        { 'range': '(630, 640]', 'countNum': 215, 'ratio': '12.32%' },
        { 'range': '(640, 650]', 'countNum': 194, 'ratio': '11.11%' },
        { 'range': '(650, 660]', 'countNum': 112, 'ratio': '6.38%' },
        { 'range': '(660, 670]', 'countNum': 80, 'ratio': '4.58%' },
        { 'range': '(670, 680]', 'countNum': 51, 'ratio': '2.93%' },
        { 'range': '(680, 690]', 'countNum': 33, 'ratio': '1.89%' },
        { 'range': '(690, 700]', 'countNum': 18, 'ratio': '1.05%' },
        { 'range': '(700,~)', 'countNum': 7, 'ratio': '0.38%' }
      ],
      'data2': [
        { 'range': '(~,500]', 'countNum': 1, 'ratio': '0.04%' },
        { 'range': '(500, 510]', 'countNum': 1, 'ratio': '0.10%' },
        { 'range': '(510, 520]', 'countNum': 4, 'ratio': '0.30%' },
        { 'range': '(520, 530]', 'countNum': 12, 'ratio': '0.91%' },
        { 'range': '(530, 540]', 'countNum': 14, 'ratio': '1.10%' },
        { 'range': '(540, 550]', 'countNum': 24, 'ratio': '1.90%' },
        { 'range': '(550, 560]', 'countNum': 29, 'ratio': '2.26%' },
        { 'range': '(560, 570]', 'countNum': 37, 'ratio': '2.90%' },
        { 'range': '(570, 580]', 'countNum': 59, 'ratio': '4.60%' },
        { 'range': '(580, 590]', 'countNum': 73, 'ratio': '5.67%' },
        { 'range': '(590, 600]', 'countNum': 78, 'ratio': '6.10%' },
        { 'range': '(600, 610]', 'countNum': 99, 'ratio': '7.69%' },
        { 'range': '(610, 620]', 'countNum': 173, 'ratio': '13.50%' },
        { 'range': '(620, 630]', 'countNum': 150, 'ratio': '11.68%' },
        { 'range': '(630, 640]', 'countNum': 176, 'ratio': '13.67%' },
        { 'range': '(640, 650]', 'countNum': 154, 'ratio': '12.00%' },
        { 'range': '(650, 660]', 'countNum': 90, 'ratio': '7.00%' },
        { 'range': '(660, 670]', 'countNum': 53, 'ratio': '4.10%' },
        { 'range': '(670, 680]', 'countNum': 30, 'ratio': '2.30%' },
        { 'range': '(680, 690]', 'countNum': 19, 'ratio': '1.47%' },
        { 'range': '(690, 700]', 'countNum': 6, 'ratio': '0.50%' },
        { 'range': '(700,~)', 'countNum': 3, 'ratio': '0.21%' }
      ],
      'data3': [
        { 'range': '(~,500]', 'countNum': 0, 'ratio': '0.02%' },
        { 'range': '(500, 510]', 'countNum': 0, 'ratio': '0.05%' },
        { 'range': '(510, 520]', 'countNum': 2, 'ratio': '0.24%' },
        { 'range': '(520, 530]', 'countNum': 3, 'ratio': '0.45%' },
        { 'range': '(530, 540]', 'countNum': 7, 'ratio': '0.93%' },
        { 'range': '(540, 550]', 'countNum': 10, 'ratio': '1.34%' },
        { 'range': '(550, 560]', 'countNum': 16, 'ratio': '2.26%' },
        { 'range': '(560, 570]', 'countNum': 15, 'ratio': '2.10%' },
        { 'range': '(570, 580]', 'countNum': 34, 'ratio': '4.82%' },
        { 'range': '(580, 590]', 'countNum': 36, 'ratio': '5.10%' },
        { 'range': '(590, 600]', 'countNum': 44, 'ratio': '6.20%' },
        { 'range': '(600, 610]', 'countNum': 59, 'ratio': '8.30%' },
        { 'range': '(610, 620]', 'countNum': 97, 'ratio': '13.62%' },
        { 'range': '(620, 630]', 'countNum': 93, 'ratio': '13.00%' },
        { 'range': '(630, 640]', 'countNum': 100, 'ratio': '14.00%' },
        { 'range': '(640, 650]', 'countNum': 74, 'ratio': '10.44%' },
        { 'range': '(650, 660]', 'countNum': 52, 'ratio': '7.30%' },
        { 'range': '(660, 670]', 'countNum': 36, 'ratio': '5.02%' },
        { 'range': '(670, 680]', 'countNum': 24, 'ratio': '3.40%' },
        { 'range': '(680, 690]', 'countNum': 6, 'ratio': '0.91%' },
        { 'range': '(690, 700]', 'countNum': 3, 'ratio': '0.40%' },
        { 'range': '(700,~)', 'countNum': 1, 'ratio': '0.10%' }

      ],
      'data4': [
        { 'range': '(~,500]', 'countNum': 1, 'ratio': '0.05%' },
        { 'range': '(500, 510]', 'countNum': 1, 'ratio': '0.10%' },
        { 'range': '(510, 520]', 'countNum': 4, 'ratio': '0.30%' },
        { 'range': '(520, 530]', 'countNum': 7, 'ratio': '0.60%' },
        { 'range': '(530, 540]', 'countNum': 12, 'ratio': '1.00%' },
        { 'range': '(540, 550]', 'countNum': 25, 'ratio': '2.00%' },
        { 'range': '(550, 560]', 'countNum': 25, 'ratio': '2.00%' },
        { 'range': '(560, 570]', 'countNum': 45, 'ratio': '3.65%' },
        { 'range': '(570, 580]', 'countNum': 49, 'ratio': '4.00%' },
        { 'range': '(580, 590]', 'countNum': 74, 'ratio': '6.00%' },
        { 'range': '(590, 600]', 'countNum': 86, 'ratio': '7.00%' },
        { 'range': '(600, 610]', 'countNum': 98, 'ratio': '8.00%' },
        { 'range': '(610, 620]', 'countNum': 172, 'ratio': '14.00%' },
        { 'range': '(620, 630]', 'countNum': 160, 'ratio': '13.00%' },
        { 'range': '(630, 640]', 'countNum': 148, 'ratio': '12.00%' },
        { 'range': '(640, 650]', 'countNum': 123, 'ratio': '10.00%' },
        { 'range': '(650, 660]', 'countNum': 74, 'ratio': '6.00%' },
        { 'range': '(660, 670]', 'countNum': 49, 'ratio': '4.00%' },
        { 'range': '(670, 680]', 'countNum': 37, 'ratio': '3.00%' },
        { 'range': '(680, 690]', 'countNum': 25, 'ratio': '2.00%' },
        { 'range': '(690, 700]', 'countNum': 12, 'ratio': '1.00%' },
        { 'range': '(700,~)', 'countNum': 4, 'ratio': '0.30%' }

      ],
      'data5': [
        { 'range': '(~,500]', 'countNum': 1, 'ratio': '0.05%' },
        { 'range': '(500, 510]', 'countNum': 2, 'ratio': '0.13%' },
        { 'range': '(510, 520]', 'countNum': 9, 'ratio': '0.45%' },
        { 'range': '(520, 530]', 'countNum': 14, 'ratio': '0.72%' },
        { 'range': '(530, 540]', 'countNum': 29, 'ratio': '1.50%' },
        { 'range': '(540, 550]', 'countNum': 35, 'ratio': '1.82%' },
        { 'range': '(550, 560]', 'countNum': 49, 'ratio': '2.53%' },
        { 'range': '(560, 570]', 'countNum': 71, 'ratio': '3.71%' },
        { 'range': '(570, 580]', 'countNum': 82, 'ratio': '4.30%' },
        { 'range': '(580, 590]', 'countNum': 117, 'ratio': '6.12%' },
        { 'range': '(590, 600]', 'countNum': 156, 'ratio': '8.12%' },
        { 'range': '(600, 610]', 'countNum': 167, 'ratio': '8.73%' },
        { 'range': '(610, 620]', 'countNum': 296, 'ratio': '15.42%' },
        { 'range': '(620, 630]', 'countNum': 259, 'ratio': '13.50%' },
        { 'range': '(630, 640]', 'countNum': 240, 'ratio': '12.50%' },
        { 'range': '(640, 650]', 'countNum': 135, 'ratio': '7.06%' },
        { 'range': '(650, 660]', 'countNum': 90, 'ratio': '4.67%' },
        { 'range': '(660, 670]', 'countNum': 71, 'ratio': '3.68%' },
        { 'range': '(670, 680]', 'countNum': 49, 'ratio': '2.55%' },
        { 'range': '(680, 690]', 'countNum': 32, 'ratio': '1.67%' },
        { 'range': '(690, 700]', 'countNum': 13, 'ratio': '0.67%' },
        { 'range': '(700,~)', 'countNum': 2, 'ratio': '0.10%' }

      ],
      'data6': [
        { 'range': '(~,500]', 'countNum': 0, 'ratio': '0.01%' },
        { 'range': '(500, 510]', 'countNum': 1, 'ratio': '0.07%' },
        { 'range': '(510, 520]', 'countNum': 9, 'ratio': '0.57%' },
        { 'range': '(520, 530]', 'countNum': 5, 'ratio': '0.32%' },
        { 'range': '(530, 540]', 'countNum': 14, 'ratio': '0.93%' },
        { 'range': '(540, 550]', 'countNum': 25, 'ratio': '1.64%' },
        { 'range': '(550, 560]', 'countNum': 33, 'ratio': '2.15%' },
        { 'range': '(560, 570]', 'countNum': 44, 'ratio': '2.91%' },
        { 'range': '(570, 580]', 'countNum': 51, 'ratio': '3.38%' },
        { 'range': '(580, 590]', 'countNum': 78, 'ratio': '5.10%' },
        { 'range': '(590, 600]', 'countNum': 100, 'ratio': '6.58%' },
        { 'range': '(600, 610]', 'countNum': 121, 'ratio': '7.92%' },
        { 'range': '(610, 620]', 'countNum': 206, 'ratio': '13.50%' },
        { 'range': '(620, 630]', 'countNum': 168, 'ratio': '11.00%' },
        { 'range': '(630, 640]', 'countNum': 226, 'ratio': '14.81%' },
        { 'range': '(640, 650]', 'countNum': 152, 'ratio': '10.01%' },
        { 'range': '(650, 660]', 'countNum': 114, 'ratio': '7.50%' },
        { 'range': '(660, 670]', 'countNum': 53, 'ratio': '3.51%' },
        { 'range': '(670, 680]', 'countNum': 67, 'ratio': '4.40%' },
        { 'range': '(680, 690]', 'countNum': 44, 'ratio': '2.90%' },
        { 'range': '(690, 700]', 'countNum': 9, 'ratio': '0.59%' },
        { 'range': '(700,~)', 'countNum': 3, 'ratio': '0.20%' }

      ],
      'data7': [
        { 'range': '(~,500]', 'countNum': 5, 'ratio': '0.06%' },
        { 'range': '(500, 510]', 'countNum': 6, 'ratio': '0.09%' },
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
        { 'range': '(620, 630]', 'countNum': 974, 'ratio': '12.76%' },
        { 'range': '(630, 640]', 'countNum': 779, 'ratio': '12.48%' },
        { 'range': '(640, 650]', 'countNum': 504, 'ratio': '9.98%' },
        { 'range': '(650, 660]', 'countNum': 329, 'ratio': '6.46%' },
        { 'range': '(660, 670]', 'countNum': 242, 'ratio': '4.21%' },
        { 'range': '(670, 680]', 'countNum': 179, 'ratio': '3.10%' },
        { 'range': '(680, 690]', 'countNum': 87, 'ratio': '2.29%' },
        { 'range': '(690, 700]', 'countNum': 25, 'ratio': '1.11%' },
        { 'range': '(700,~)', 'countNum': 3, 'ratio': '0.32%' }

      ]
    },
    'customerStabilityAnalysisChart': {
      'psi': [0.0021, 0.0048, 0.0841, 0.1419, 0.0496, 0.0105],
      'datarange': [202001, 202002, 202003, 202004, 202005, 202006]
    },
    'psi': [
      { 'score': '(~,500]', 'trainNum': '5', 'trainRate': '0.06%', 'checkNum': '3', 'checkRate': '0.05%', 'rateGap': '-0.0001 ', 'rateWeight': '-0.2188 ', 'PSI': '0.0000 ' },
      { 'score': '(500, 510]', 'trainNum': '7', 'trainRate': '0.09%', 'checkNum': '8', 'checkRate': '0.14%', 'rateGap': '0.0005 ', 'rateWeight': '0.4255 ', 'PSI': '0.0002 ' },
      { 'score': '(510, 520]', 'trainNum': '23', 'trainRate': '0.29%', 'checkNum': '15', 'checkRate': '0.26%', 'rateGap': '-0.0004 ', 'rateWeight': '-0.1354 ', 'PSI': '0.0001 ' },
      { 'score': '(520, 530]', 'trainNum': '44', 'trainRate': '0.56%', 'checkNum': '45', 'checkRate': '0.77%', 'rateGap': '0.0021 ', 'rateWeight': '0.3145 ', 'PSI': '0.0007 ' },
      { 'score': '(530, 540]', 'trainNum': '94', 'trainRate': '1.20%', 'checkNum': '61', 'checkRate': '1.05%', 'rateGap': '-0.0016 ', 'rateWeight': '-0.1404 ', 'PSI': '0.0002 ' },
      { 'score': '(540, 550]', 'trainNum': '130', 'trainRate': '1.67%', 'checkNum': '104', 'checkRate': '1.78%', 'rateGap': '0.0012 ', 'rateWeight': '0.0689 ', 'PSI': '0.0001 ' },
      { 'score': '(550, 560]', 'trainNum': '194', 'trainRate': '2.48%', 'checkNum': '148', 'checkRate': '2.54%', 'rateGap': '0.0005 ', 'rateWeight': '0.0214 ', 'PSI': '0.0000 ' },
      { 'score': '(560, 570]', 'trainNum': '263', 'trainRate': '3.37%', 'checkNum': '167', 'checkRate': '2.86%', 'rateGap': '-0.0050 ', 'rateWeight': '-0.1622 ', 'PSI': '0.0008 ' },
      { 'score': '(570, 580]', 'trainNum': '322', 'trainRate': '4.12%', 'checkNum': '264', 'checkRate': '4.53%', 'rateGap': '0.0040 ', 'rateWeight': '0.0934 ', 'PSI': '0.0004 ' },
      { 'score': '(580, 590]', 'trainNum': '459', 'trainRate': '5.88%', 'checkNum': '324', 'checkRate': '5.56%', 'rateGap': '-0.0032 ', 'rateWeight': '-0.0563 ', 'PSI': '0.0002 ' },
      { 'score': '(590, 600]', 'trainNum': '512', 'trainRate': '6.56%', 'checkNum': '391', 'checkRate': '6.71%', 'rateGap': '0.0015 ', 'rateWeight': '0.0224 ', 'PSI': '0.0000 ' },
      { 'score': '(600, 610]', 'trainNum': '645', 'trainRate': '8.26%', 'checkNum': '438', 'checkRate': '7.51%', 'rateGap': '-0.0075 ', 'rateWeight': '-0.0950 ', 'PSI': '0.0007 ' },
      { 'score': '(610, 620]', 'trainNum': '994', 'trainRate': '12.73%', 'checkNum': '753', 'checkRate': '12.92%', 'rateGap': '0.0018 ', 'rateWeight': '0.0143 ', 'PSI': '0.0000 ' },
      { 'score': '(620, 630]', 'trainNum': '996', 'trainRate': '12.76%', 'checkNum': '740', 'checkRate': '12.69%', 'rateGap': '-0.0006 ', 'rateWeight': '-0.0051 ', 'PSI': '0.0000 ' },
      { 'score': '(630, 640]', 'trainNum': '974', 'trainRate': '12.48%', 'checkNum': '718', 'checkRate': '12.32%', 'rateGap': '-0.0016 ', 'rateWeight': '-0.0129 ', 'PSI': '0.0000 ' },
      { 'score': '(640, 650]', 'trainNum': '779', 'trainRate': '9.98%', 'checkNum': '648', 'checkRate': '11.11%', 'rateGap': '0.0114 ', 'rateWeight': '0.1079 ', 'PSI': '0.0012 ' },
      { 'score': '(650, 660]', 'trainNum': '504', 'trainRate': '6.46%', 'checkNum': '372', 'checkRate': '6.38%', 'rateGap': '-0.0007 ', 'rateWeight': '-0.0117 ', 'PSI': '0.0000 ' },
      { 'score': '(660, 670]', 'trainNum': '329', 'trainRate': '4.21%', 'checkNum': '267', 'checkRate': '4.58%', 'rateGap': '0.0037 ', 'rateWeight': '0.0832 ', 'PSI': '0.0003 ' },
      { 'score': '(670, 680]', 'trainNum': '242', 'trainRate': '3.10%', 'checkNum': '171', 'checkRate': '2.93%', 'rateGap': '-0.0017 ', 'rateWeight': '-0.0553 ', 'PSI': '0.0001 ' },
      { 'score': '(680, 690]', 'trainNum': '179', 'trainRate': '2.29%', 'checkNum': '110', 'checkRate': '1.89%', 'rateGap': '-0.0041 ', 'rateWeight': '-0.1949 ', 'PSI': '0.0008 ' },
      { 'score': '(690, 700]', 'trainNum': '87', 'trainRate': '1.11%', 'checkNum': '61', 'checkRate': '1.05%', 'rateGap': '-0.0007 ', 'rateWeight': '-0.0630 ', 'PSI': '0.0000 ' },
      { 'score': '(700,~)', 'trainNum': '25', 'trainRate': '0.32%', 'checkNum': '22', 'checkRate': '0.38%', 'rateGap': '0.0006 ', 'rateWeight': '0.1642 ', 'PSI': '0.0001 ' },
      { 'score': '合计', 'trainNum': '7807', 'trainRate': '100.00%', 'checkNum': '5830', 'checkRate': '100.00%', 'rateGap': '/', 'rateWeight': '/', 'PSI': '0.0060 ' }
    ]

  }
}
export default {
  url: '/monitor/score-overview',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: scoreOverview
    }
  }
}
