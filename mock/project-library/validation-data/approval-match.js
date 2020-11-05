const approvalMatch = {
  status: 200,
  message: 'success',
  data: {
    'approvalList': [
      { 'score': '(~,500]', 'actual': '3', 'actualApproval': '0 ', 'approvalRate': '0.00%', 'actualRefuse': '3 ', 'refuseRate': '100.00%' },
      { 'score': '(500, 510]', 'actual': '8', 'actualApproval': '0 ', 'approvalRate': '0.00%', 'actualRefuse': '8 ', 'refuseRate': '100.00%' },
      { 'score': '(510, 520]', 'actual': '15', 'actualApproval': '0 ', 'approvalRate': '0.00%', 'actualRefuse': '15 ', 'refuseRate': '100.00%' },
      { 'score': '(520, 530]', 'actual': '45', 'actualApproval': '0 ', 'approvalRate': '0.00%', 'actualRefuse': '45 ', 'refuseRate': '100.00%' },
      { 'score': '(530, 540]', 'actual': '61', 'actualApproval': '3 ', 'approvalRate': '4.92%', 'actualRefuse': '58 ', 'refuseRate': '95.08%' },
      { 'score': '(540, 550]', 'actual': '104', 'actualApproval': '4 ', 'approvalRate': '3.85%', 'actualRefuse': '100 ', 'refuseRate': '96.15%' },
      { 'score': '(550, 560]', 'actual': '148', 'actualApproval': '3 ', 'approvalRate': '2.03%', 'actualRefuse': '145 ', 'refuseRate': '97.97%' },
      { 'score': '(560, 570]', 'actual': '167', 'actualApproval': '2 ', 'approvalRate': '1.20%', 'actualRefuse': '165 ', 'refuseRate': '98.80%' },
      { 'score': '(570, 580]', 'actual': '264', 'actualApproval': '3 ', 'approvalRate': '1.14%', 'actualRefuse': '261 ', 'refuseRate': '98.86%' },
      { 'score': '(580, 590]', 'actual': '324', 'actualApproval': '1 ', 'approvalRate': '0.31%', 'actualRefuse': '323 ', 'refuseRate': '99.69%' },
      { 'score': '(590, 600]', 'actual': '391', 'actualApproval': '9 ', 'approvalRate': '2.30%', 'actualRefuse': '382 ', 'refuseRate': '97.70%' },
      { 'score': '(600, 610]', 'actual': '438', 'actualApproval': '14 ', 'approvalRate': '3.20%', 'actualRefuse': '424 ', 'refuseRate': '96.80%' },
      { 'score': '(610, 620]', 'actual': '753', 'actualApproval': '19 ', 'approvalRate': '2.52%', 'actualRefuse': '734 ', 'refuseRate': '97.48%' },
      { 'score': '(620, 630]', 'actual': '740', 'actualApproval': '11 ', 'approvalRate': '1.49%', 'actualRefuse': '729 ', 'refuseRate': '98.51%' },
      { 'score': '(630, 640]', 'actual': '718', 'actualApproval': '18 ', 'approvalRate': '2.51%', 'actualRefuse': '700 ', 'refuseRate': '97.49%' },
      { 'score': '(640, 650]', 'actual': '648', 'actualApproval': '627 ', 'approvalRate': '96.76%', 'actualRefuse': '21 ', 'refuseRate': '3.24%' },
      { 'score': '(650, 660]', 'actual': '372', 'actualApproval': '362 ', 'approvalRate': '97.31%', 'actualRefuse': '10 ', 'refuseRate': '2.69%' },
      { 'score': '(660, 670]', 'actual': '267', 'actualApproval': '262 ', 'approvalRate': '98.13%', 'actualRefuse': '5 ', 'refuseRate': '1.87%' },
      { 'score': '(670, 680]', 'actual': '171', 'actualApproval': '169 ', 'approvalRate': '98.83%', 'actualRefuse': '2 ', 'refuseRate': '1.17%' },
      { 'score': '(680, 690]', 'actual': '110', 'actualApproval': '109 ', 'approvalRate': '99.09%', 'actualRefuse': '1 ', 'refuseRate': '0.91%' },
      { 'score': '(690, 700]', 'actual': '61', 'actualApproval': '60 ', 'approvalRate': '98.36%', 'actualRefuse': '1 ', 'refuseRate': '1.64%' },
      { 'score': '(700,~)', 'actual': '22', 'actualApproval': '22 ', 'approvalRate': '100.00%', 'actualRefuse': '0 ', 'refuseRate': '0.00%' },
      { 'score': 'total', 'actual': '5830', 'actualApproval': '1698 ', 'approvalRate': '29.13%', 'actualRefuse': '4132 ', 'refuseRate': '70.87%' }

    ]

  }
}
export default {
  url: '/monitor/approval-match',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: approvalMatch
    }
  }
}
