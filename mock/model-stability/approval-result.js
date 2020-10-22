const approvalResult = {
  status: 200,
  message: 'success',
  data: {
    'approvalMatching': [
      { 'range': '(~,500]', 'totalNum': 3, 'approvalNum': 0, 'approvalRate': '1.88%', 'refuseNum': 3, 'refuseRate': '98.12%' },
      { 'range': '(500, 510]', 'totalNum': 8, 'approvalNum': 0, 'approvalRate': '2.77%', 'refuseNum': 8, 'refuseRate': '97.23%' },
      { 'range': '(510, 520]', 'totalNum': 15, 'approvalNum': 0, 'approvalRate': '1.48%', 'refuseNum': 15, 'refuseRate': '98.52%' },
      { 'range': '(520, 530]', 'totalNum': 45, 'approvalNum': 0, 'approvalRate': '0.50%', 'refuseNum': 45, 'refuseRate': '99.50%' },
      { 'range': '(530, 540]', 'totalNum': 61, 'approvalNum': 3, 'approvalRate': '4.40%', 'refuseNum': 58, 'refuseRate': '95.60%' },
      { 'range': '(540, 550]', 'totalNum': 104, 'approvalNum': 4, 'approvalRate': '4.19%', 'refuseNum': 100, 'refuseRate': '95.81%' },
      { 'range': '(550, 560]', 'totalNum': 148, 'approvalNum': 3, 'approvalRate': '2.33%', 'refuseNum': 145, 'refuseRate': '97.67%' },
      { 'range': '(560, 570]', 'totalNum': 167, 'approvalNum': 2, 'approvalRate': '1.43%', 'refuseNum': 165, 'refuseRate': '98.57%' },
      { 'range': '(570, 580]', 'totalNum': 264, 'approvalNum': 3, 'approvalRate': '1.29%', 'refuseNum': 261, 'refuseRate': '98.71%' },
      { 'range': '(580, 590]', 'totalNum': 324, 'approvalNum': 1, 'approvalRate': '0.32%', 'refuseNum': 323, 'refuseRate': '99.68%' },
      { 'range': '(590, 600]', 'totalNum': 391, 'approvalNum': 9, 'approvalRate': '2.33%', 'refuseNum': 382, 'refuseRate': '97.67%' },
      { 'range': '(600, 610]', 'totalNum': 438, 'approvalNum': 14, 'approvalRate': '3.22%', 'refuseNum': 424, 'refuseRate': '96.78%' },
      { 'range': '(610, 620]', 'totalNum': 753, 'approvalNum': 19, 'approvalRate': '2.48%', 'refuseNum': 734, 'refuseRate': '97.52%' },
      { 'range': '(620, 630]', 'totalNum': 740, 'approvalNum': 11, 'approvalRate': '1.54%', 'refuseNum': 729, 'refuseRate': '98.46%' },
      { 'range': '(630, 640]', 'totalNum': 718, 'approvalNum': 18, 'approvalRate': '2.44%', 'refuseNum': 700, 'refuseRate': '97.56%' },
      { 'range': '(640, 650]', 'totalNum': 648, 'approvalNum': 627, 'approvalRate': '96.80%', 'refuseNum': 21, 'refuseRate': '3.20%' },
      { 'range': '(650, 660]', 'totalNum': 372, 'approvalNum': 362, 'approvalRate': '97.40%', 'refuseNum': 10, 'refuseRate': '2.60%' },
      { 'range': '(660, 670]', 'totalNum': 267, 'approvalNum': 262, 'approvalRate': '98.30%', 'refuseNum': 5, 'refuseRate': '1.70%' },
      { 'range': '(670, 680]', 'totalNum': 171, 'approvalNum': 169, 'approvalRate': '98.97%', 'refuseNum': 2, 'refuseRate': '1.03%' },
      { 'range': '(680, 690]', 'totalNum': 110, 'approvalNum': 109, 'approvalRate': '98.96%', 'refuseNum': 1, 'refuseRate': '1.04%' },
      { 'range': '(690, 700]', 'totalNum': 61, 'approvalNum': 60, 'approvalRate': '99.07%', 'refuseNum': 1, 'refuseRate': '0.93%' },
      { 'range': '(700,~)', 'totalNum': 22, 'approvalNum': 22, 'approvalRate': '99.49%', 'refuseNum': 0, 'refuseRate': '0.51%' },
      { 'range': '合计', 'totalNum': 5830, 'approvalNum': 1701, 'approvalRate': '29.18%', 'refuseNum': 4129, 'refuseRate': '70.82%' }
    ],
    'autoApproval': [
      { 'range': 202001, 'totalNum': 1749, 'approvalNum': 1075, 'approvalRate': '61.48%', 'refuseNum': 674, 'refuseRate': '38.52%' },
      { 'range': 202002, 'totalNum': 1285, 'approvalNum': 700, 'approvalRate': '54.50%', 'refuseNum': 585, 'refuseRate': '45.50%' },
      { 'range': 202003, 'totalNum': 712, 'approvalNum': 503, 'approvalRate': '70.66%', 'refuseNum': 209, 'refuseRate': '29.34%' },
      { 'range': 202004, 'totalNum': 1231, 'approvalNum': 810, 'approvalRate': '65.77%', 'refuseNum': 421, 'refuseRate': '34.23%' },
      { 'range': 202005, 'totalNum': 1917, 'approvalNum': 1144, 'approvalRate': '59.70%', 'refuseNum': 773, 'refuseRate': '40.30%' },
      { 'range': 202006, 'totalNum': 1523, 'approvalNum': 927, 'approvalRate': '60.88%', 'refuseNum': 596, 'refuseRate': '39.12%' }
    ],
    'resuseAnalysis': [
      { 'range': 202001, 'refuseNum': 3, 'refuseRate': '0.20%' },
      { 'range': 202002, 'refuseNum': 2, 'refuseRate': '0.04%' },
      { 'range': 202003, 'refuseNum': 5, 'refuseRate': '0.70%' },
      { 'range': 202004, 'refuseNum': 14, 'refuseRate': '0.55%' },
      { 'range': 202005, 'refuseNum': 2, 'refuseRate': '0.09%' },
      { 'range': 202006, 'refuseNum': 4, 'refuseRate': '0.20%' }
    ]
  }
}
export default {
  url: '/monitor/approval-result',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: approvalResult
    }
  }
}
