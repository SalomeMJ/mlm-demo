const validationScore = {
  status: 200,
  message: 'success',
  data: {
    'validationDatas': {
      'score': [
        {
          'scoreBin': '(~,500]',
          'sampleNum': 3,
          'sampleRate': '0.05%',
          'goodSampleNum': 2,
          'badSampleNum': 1,
          'goodSampleRate': '66.67%',
          'badSampleRate': '33.33%',
          'totalGoodRate': '0.04%',
          'totalBadRate': '0.43%',
          'ODDS': '0.50 '
        },
        {
          'scoreBin': '(500, 510]',
          'sampleNum': 8,
          'sampleRate': '0.19%',
          'goodSampleNum': 2,
          'badSampleNum': 6,
          'goodSampleRate': '25.00%',
          'badSampleRate': '75.00%',
          'totalGoodRate': '0.07%',
          'totalBadRate': '3.02%',
          'ODDS': '3.00 '
        },
        {
          'scoreBin': '(510, 520]',
          'sampleNum': 15,
          'sampleRate': '0.45%',
          'goodSampleNum': 8,
          'badSampleNum': 7,
          'goodSampleRate': '53.33%',
          'badSampleRate': '46.67%',
          'totalGoodRate': '0.21%',
          'totalBadRate': '6.03%',
          'ODDS': '0.88 '
        },
        {
          'scoreBin': '(520, 530]',
          'sampleNum': 45,
          'sampleRate': '1.22%',
          'goodSampleNum': 35,
          'badSampleNum': 10,
          'goodSampleRate': '77.78%',
          'badSampleRate': '22.22%',
          'totalGoodRate': '0.84%',
          'totalBadRate': '10.34%',
          'ODDS': '0.29 '
        },
        {
          'scoreBin': '(530, 540]',
          'sampleNum': 61,
          'sampleRate': '2.26%',
          'goodSampleNum': 50,
          'badSampleNum': 11,
          'goodSampleRate': '81.97%',
          'badSampleRate': '18.03%',
          'totalGoodRate': '1.73%',
          'totalBadRate': '15.09%',
          'ODDS': '0.22 '
        },
        {
          'scoreBin': '(540, 550]',
          'sampleNum': 104,
          'sampleRate': '4.05%',
          'goodSampleNum': 87,
          'badSampleNum': 17,
          'goodSampleRate': '83.65%',
          'badSampleRate': '16.35%',
          'totalGoodRate': '3.29%',
          'totalBadRate': '22.41%',
          'ODDS': '0.20 '
        },
        {
          'scoreBin': '(550, 560]',
          'sampleNum': 148,
          'sampleRate': '6.59%',
          'goodSampleNum': 122,
          'badSampleNum': 26,
          'goodSampleRate': '82.43%',
          'badSampleRate': '17.57%',
          'totalGoodRate': '5.47%',
          'totalBadRate': '33.62%',
          'ODDS': '0.21 '
        },
        {
          'scoreBin': '(560, 570]',
          'sampleNum': 167,
          'sampleRate': '9.45%',
          'goodSampleNum': 151,
          'badSampleNum': 16,
          'goodSampleRate': '90.42%',
          'badSampleRate': '9.58%',
          'totalGoodRate': '8.16%',
          'totalBadRate': '40.52%',
          'ODDS': '0.11 '
        },
        {
          'scoreBin': '(570, 580]',
          'sampleNum': 264,
          'sampleRate': '13.98%',
          'goodSampleNum': 246,
          'badSampleNum': 18,
          'goodSampleRate': '93.18%',
          'badSampleRate': '6.82%',
          'totalGoodRate': '12.56%',
          'totalBadRate': '48.28%',
          'ODDS': '0.07 '
        },
        {
          'scoreBin': '(580, 590]',
          'sampleNum': 324,
          'sampleRate': '19.54%',
          'goodSampleNum': 301,
          'badSampleNum': 23,
          'goodSampleRate': '92.90%',
          'badSampleRate': '7.10%',
          'totalGoodRate': '17.93%',
          'totalBadRate': '58.19%',
          'ODDS': '0.08 '
        },
        {
          'scoreBin': '(590, 600]',
          'sampleNum': 391,
          'sampleRate': '26.24%',
          'goodSampleNum': 366,
          'badSampleNum': 25,
          'goodSampleRate': '93.61%',
          'badSampleRate': '6.39%',
          'totalGoodRate': '24.47%',
          'totalBadRate': '68.97%',
          'ODDS': '0.07 '
        },
        {
          'scoreBin': '(600, 610]',
          'sampleNum': 438,
          'sampleRate': '33.76%',
          'goodSampleNum': 419,
          'badSampleNum': 19,
          'goodSampleRate': '95.66%',
          'badSampleRate': '4.34%',
          'totalGoodRate': '31.96%',
          'totalBadRate': '77.16%',
          'ODDS': '0.05 '
        },
        {
          'scoreBin': '(610, 620]',
          'sampleNum': 753,
          'sampleRate': '46.67%',
          'goodSampleNum': 728,
          'badSampleNum': 25,
          'goodSampleRate': '96.68%',
          'badSampleRate': '3.32%',
          'totalGoodRate': '44.96%',
          'totalBadRate': '87.93%',
          'ODDS': '0.03 '
        },
        {
          'scoreBin': '(620, 630]',
          'sampleNum': 740,
          'sampleRate': '59.37%',
          'goodSampleNum': 733,
          'badSampleNum': 7,
          'goodSampleRate': '99.05%',
          'badSampleRate': '0.95%',
          'totalGoodRate': '58.06%',
          'totalBadRate': '90.95%',
          'ODDS': '0.01 '
        },
        {
          'scoreBin': '(630, 640]',
          'sampleNum': 718,
          'sampleRate': '71.68%',
          'goodSampleNum': 707,
          'badSampleNum': 11,
          'goodSampleRate': '98.47%',
          'badSampleRate': '1.53%',
          'totalGoodRate': '70.69%',
          'totalBadRate': '95.69%',
          'ODDS': '0.02 '
        },
        {
          'scoreBin': '(640, 650]',
          'sampleNum': 648,
          'sampleRate': '82.80%',
          'goodSampleNum': 642,
          'badSampleNum': 6,
          'goodSampleRate': '99.07%',
          'badSampleRate': '0.93%',
          'totalGoodRate': '82.15%',
          'totalBadRate': '98.28%',
          'ODDS': '0.01 '
        },
        {
          'scoreBin': '(650, 660]',
          'sampleNum': 372,
          'sampleRate': '89.18%',
          'goodSampleNum': 370,
          'badSampleNum': 2,
          'goodSampleRate': '99.46%',
          'badSampleRate': '0.54%',
          'totalGoodRate': '88.76%',
          'totalBadRate': '99.14%',
          'ODDS': '0.01 '
        },
        {
          'scoreBin': '(660, 670]',
          'sampleNum': 267,
          'sampleRate': '93.76%',
          'goodSampleNum': 265,
          'badSampleNum': 2,
          'goodSampleRate': '99.25%',
          'badSampleRate': '0.75%',
          'totalGoodRate': '93.50%',
          'totalBadRate': '100.00%',
          'ODDS': '0.01 '
        },
        {
          'scoreBin': '(670, 680]',
          'sampleNum': 171,
          'sampleRate': '96.69%',
          'goodSampleNum': 171,
          'badSampleNum': 0,
          'goodSampleRate': '100.00%',
          'badSampleRate': '0.00%',
          'totalGoodRate': '96.55%',
          'totalBadRate': '100.00%',
          'ODDS': '0.00 '
        },
        {
          'scoreBin': '(680, 690]',
          'sampleNum': 110,
          'sampleRate': '98.58%',
          'goodSampleNum': 110,
          'badSampleNum': 0,
          'goodSampleRate': '100.00%',
          'badSampleRate': '0.00%',
          'totalGoodRate': '98.52%',
          'totalBadRate': '100.00%',
          'ODDS': '0.00 '
        },
        {
          'scoreBin': '(690, 700]',
          'sampleNum': 61,
          'sampleRate': '99.62%',
          'goodSampleNum': 61,
          'badSampleNum': 0,
          'goodSampleRate': '100.00%',
          'badSampleRate': '0.00%',
          'totalGoodRate': '99.61%',
          'totalBadRate': '100.00%',
          'ODDS': '0.00 '
        },
        {
          'scoreBin': '(700,~)',
          'sampleNum': 22,
          'sampleRate': '100.00%',
          'goodSampleNum': 22,
          'badSampleNum': 0,
          'goodSampleRate': '100.00%',
          'badSampleRate': '0.00%',
          'totalGoodRate': '100.00%',
          'totalBadRate': '100.00%',
          'ODDS': '0.00 '
        },
        {
          'scoreBin': '合计',
          'sampleNum': 5830,
          'sampleRate': '/',
          'goodSampleNum': 5598,
          'badSampleNum': 232,
          'goodSampleRate': '96.02%',
          'badSampleRate': '3.98%',
          'totalGoodRate': '/',
          'totalBadRate': '/',
          'ODDS': '0.04 '
        }
      ],
      'overdue1': [
        {
          'score': '(~,500]',
          'customer': '3',
          'M1OverdueNum': '1',
          'M1Inversion': '33.33%',
          'M1OverdueRate': '33.33%',
          'M2OverdueNum': '0',
          'M2Inersion': '0.00%',
          'M2OversdueRate': '0.00%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '(500, 510]',
          'customer': '8',
          'M1OverdueNum': '3',
          'M1Inversion': '37.50%',
          'M1OverdueRate': '37.50%',
          'M2OverdueNum': '0',
          'M2Inersion': '0.00%',
          'M2OversdueRate': '0.00%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '(510, 520]',
          'customer': '15',
          'M1OverdueNum': '2',
          'M1Inversion': '13.33%',
          'M1OverdueRate': '13.33%',
          'M2OverdueNum': '0',
          'M2Inersion': '0.00%',
          'M2OversdueRate': '0.00%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '(520, 530]',
          'customer': '45',
          'M1OverdueNum': '6',
          'M1Inversion': '13.33%',
          'M1OverdueRate': '13.33%',
          'M2OverdueNum': '1',
          'M2Inersion': '16.67%',
          'M2OversdueRate': '2.22%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '2.22%'
        },
        {
          'score': '(530, 540]',
          'customer': '61',
          'M1OverdueNum': '5',
          'M1Inversion': '8.20%',
          'M1OverdueRate': '8.20%',
          'M2OverdueNum': '1',
          'M2Inersion': '20.00%',
          'M2OversdueRate': '1.64%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '1.64%'
        },
        {
          'score': '(540, 550]',
          'customer': '104',
          'M1OverdueNum': '2',
          'M1Inversion': '1.92%',
          'M1OverdueRate': '1.92%',
          'M2OverdueNum': '1',
          'M2Inersion': '50.00%',
          'M2OversdueRate': '0.96%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '0.96%'
        },
        {
          'score': '(550, 560]',
          'customer': '148',
          'M1OverdueNum': '11',
          'M1Inversion': '7.43%',
          'M1OverdueRate': '7.43%',
          'M2OverdueNum': '2',
          'M2Inersion': '18.18%',
          'M2OversdueRate': '1.35%',
          'M3Overdue': '1',
          'M3Inersion': '50.00%',
          'M3OversdueRate': '0.68%'
        },
        {
          'score': '(560, 570]',
          'customer': '167',
          'M1OverdueNum': '13',
          'M1Inversion': '7.78%',
          'M1OverdueRate': '7.78%',
          'M2OverdueNum': '3',
          'M2Inersion': '23.08%',
          'M2OversdueRate': '1.80%',
          'M3Overdue': '2',
          'M3Inersion': '66.67%',
          'M3OversdueRate': '1.20%'
        },
        {
          'score': '(570, 580]',
          'customer': '264',
          'M1OverdueNum': '6',
          'M1Inversion': '2.27%',
          'M1OverdueRate': '2.27%',
          'M2OverdueNum': '1',
          'M2Inersion': '16.67%',
          'M2OversdueRate': '0.38%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '0.38%'
        },
        {
          'score': '(580, 590]',
          'customer': '324',
          'M1OverdueNum': '21',
          'M1Inversion': '6.48%',
          'M1OverdueRate': '6.48%',
          'M2OverdueNum': '2',
          'M2Inersion': '9.52%',
          'M2OversdueRate': '0.62%',
          'M3Overdue': '1',
          'M3Inersion': '50.00%',
          'M3OversdueRate': '0.31%'
        },
        {
          'score': '(590, 600]',
          'customer': '391',
          'M1OverdueNum': '15',
          'M1Inversion': '3.84%',
          'M1OverdueRate': '3.84%',
          'M2OverdueNum': '1',
          'M2Inersion': '6.67%',
          'M2OversdueRate': '0.26%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '0.26%'
        },
        {
          'score': '(600, 610]',
          'customer': '438',
          'M1OverdueNum': '21',
          'M1Inversion': '4.79%',
          'M1OverdueRate': '4.79%',
          'M2OverdueNum': '2',
          'M2Inersion': '9.52%',
          'M2OversdueRate': '0.46%',
          'M3Overdue': '2',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '0.46%'
        },
        {
          'score': '(610, 620]',
          'customer': '753',
          'M1OverdueNum': '17',
          'M1Inversion': '2.26%',
          'M1OverdueRate': '2.26%',
          'M2OverdueNum': '1',
          'M2Inersion': '5.88%',
          'M2OversdueRate': '0.13%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '(620, 630]',
          'customer': '740',
          'M1OverdueNum': '14',
          'M1Inversion': '1.89%',
          'M1OverdueRate': '1.89%',
          'M2OverdueNum': '1',
          'M2Inersion': '7.14%',
          'M2OversdueRate': '0.14%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '0.14%'
        },
        {
          'score': '(630, 640]',
          'customer': '718',
          'M1OverdueNum': '20',
          'M1Inversion': '2.79%',
          'M1OverdueRate': '2.79%',
          'M2OverdueNum': '2',
          'M2Inersion': '10.00%',
          'M2OversdueRate': '0.28%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '(640, 650]',
          'customer': '648',
          'M1OverdueNum': '18',
          'M1Inversion': '2.78%',
          'M1OverdueRate': '2.78%',
          'M2OverdueNum': '6',
          'M2Inersion': '33.33%',
          'M2OversdueRate': '0.93%',
          'M3Overdue': '4',
          'M3Inersion': '66.67%',
          'M3OversdueRate': '0.62%'
        },
        {
          'score': '(650, 660]',
          'customer': '372',
          'M1OverdueNum': '9',
          'M1Inversion': '2.42%',
          'M1OverdueRate': '2.42%',
          'M2OverdueNum': '4',
          'M2Inersion': '44.44%',
          'M2OversdueRate': '1.08%',
          'M3Overdue': '3',
          'M3Inersion': '75.00%',
          'M3OversdueRate': '0.81%'
        },
        {
          'score': '(660, 670]',
          'customer': '267',
          'M1OverdueNum': '5',
          'M1Inversion': '1.87%',
          'M1OverdueRate': '1.87%',
          'M2OverdueNum': '4',
          'M2Inersion': '80.00%',
          'M2OversdueRate': '1.50%',
          'M3Overdue': '2',
          'M3Inersion': '50.00%',
          'M3OversdueRate': '0.75%'
        },
        {
          'score': '(670, 680]',
          'customer': '171',
          'M1OverdueNum': '5',
          'M1Inversion': '2.92%',
          'M1OverdueRate': '2.92%',
          'M2OverdueNum': '2',
          'M2Inersion': '40.00%',
          'M2OversdueRate': '1.17%',
          'M3Overdue': '1',
          'M3Inersion': '50.00%',
          'M3OversdueRate': '0.58%'
        },
        {
          'score': '(680, 690]',
          'customer': '110',
          'M1OverdueNum': '2',
          'M1Inversion': '1.82%',
          'M1OverdueRate': '1.82%',
          'M2OverdueNum': '2',
          'M2Inersion': '100.00%',
          'M2OversdueRate': '1.82%',
          'M3Overdue': '1',
          'M3Inersion': '50.00%',
          'M3OversdueRate': '0.91%'
        },
        {
          'score': '(690, 700]',
          'customer': '61',
          'M1OverdueNum': '3',
          'M1Inversion': '4.92%',
          'M1OverdueRate': '4.92%',
          'M2OverdueNum': '1',
          'M2Inersion': '33.33%',
          'M2OversdueRate': '1.64%',
          'M3Overdue': '1',
          'M3Inersion': '100.00%',
          'M3OversdueRate': '1.64%'
        },
        {
          'score': '(700,~)',
          'customer': '22',
          'M1OverdueNum': '1',
          'M1Inversion': '4.55%',
          'M1OverdueRate': '4.55%',
          'M2OverdueNum': '1',
          'M2Inersion': '100.00%',
          'M2OversdueRate': '4.55%',
          'M3Overdue': '0',
          'M3Inersion': '0.00%',
          'M3OversdueRate': '0.00%'
        },
        {
          'score': '合计',
          'customer': '5830 ',
          'M1OverdueNum': '200',
          'M1Inversion': '3.43%',
          'M1OverdueRate': '3.43%',
          'M2OverdueNum': '38',
          'M2Inersion': '19.00%',
          'M2OversdueRate': '0.65%',
          'M3Overdue': '24',
          'M3Inersion': '63.16%',
          'M3OversdueRate': '0.41%'
        }
      ],
      'overdue2': [
        {
          'score': '(~,500]',
          'approvalNum': '0 ',
          'approvalRate': '0.00%',
          'noArrearsNum': '0 ',
          'noArrearsRate': '0.00%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(500, 510]',
          'approvalNum': '0 ',
          'approvalRate': '0.01%',
          'noArrearsNum': '0 ',
          'noArrearsRate': '0.00%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(510, 520]',
          'approvalNum': '0 ',
          'approvalRate': '0.01%',
          'noArrearsNum': '0 ',
          'noArrearsRate': '0.00%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(520, 530]',
          'approvalNum': '0 ',
          'approvalRate': '0.01%',
          'noArrearsNum': '0 ',
          'noArrearsRate': '0.00%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(530, 540]',
          'approvalNum': '3 ',
          'approvalRate': '0.16%',
          'noArrearsNum': '1 ',
          'noArrearsRate': '37.26%',
          'M1OverdueNum': '2 ',
          'M1ArreareRate': '74.52%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '37.26%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(540, 550]',
          'approvalNum': '4 ',
          'approvalRate': '0.26%',
          'noArrearsNum': '3 ',
          'noArrearsRate': '68.85%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '22.95%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(550, 560]',
          'approvalNum': '3 ',
          'approvalRate': '0.20%',
          'noArrearsNum': '1 ',
          'noArrearsRate': '29.00%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '29.00%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '29.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(560, 570]',
          'approvalNum': '2 ',
          'approvalRate': '0.14%',
          'noArrearsNum': '1 ',
          'noArrearsRate': '41.87%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '41.87%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(570, 580]',
          'approvalNum': '3 ',
          'approvalRate': '0.20%',
          'noArrearsNum': '3 ',
          'noArrearsRate': '88.09%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(580, 590]',
          'approvalNum': '1 ',
          'approvalRate': '0.06%',
          'noArrearsNum': '0 ',
          'noArrearsRate': '0.00%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '96.45%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(590, 600]',
          'approvalNum': '9 ',
          'approvalRate': '0.54%',
          'noArrearsNum': '6 ',
          'noArrearsRate': '65.86%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '10.98%',
          'M2OverdueNum': '2 ',
          'M2ArreareRate': '21.95%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(600, 610]',
          'approvalNum': '14 ',
          'approvalRate': '0.83%',
          'noArrearsNum': '13 ',
          'noArrearsRate': '92.18%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '7.09%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(610, 620]',
          'approvalNum': '19 ',
          'approvalRate': '1.10%',
          'noArrearsNum': '15 ',
          'noArrearsRate': '80.32%',
          'M1OverdueNum': '2 ',
          'M1ArreareRate': '10.71%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '5.35%',
          'M3OverdueNum': '1 ',
          'M3ArreareRate': '5.35%'
        },
        {
          'score': '(620, 630]',
          'approvalNum': '11 ',
          'approvalRate': '0.67%',
          'noArrearsNum': '11 ',
          'noArrearsRate': '96.53%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(630, 640]',
          'approvalNum': '18 ',
          'approvalRate': '1.03%',
          'noArrearsNum': '16 ',
          'noArrearsRate': '91.33%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '5.71%',
          'M3OverdueNum': '1 ',
          'M3ArreareRate': '5.71%'
        },
        {
          'score': '(640, 650]',
          'approvalNum': '627 ',
          'approvalRate': '36.87%',
          'noArrearsNum': '609 ',
          'noArrearsRate': '97.09%',
          'M1OverdueNum': '12 ',
          'M1ArreareRate': '1.91%',
          'M2OverdueNum': '4 ',
          'M2ArreareRate': '0.64%',
          'M3OverdueNum': '2 ',
          'M3ArreareRate': '0.32%'
        },
        {
          'score': '(650, 660]',
          'approvalNum': '362 ',
          'approvalRate': '21.30%',
          'noArrearsNum': '348 ',
          'noArrearsRate': '96.05%',
          'M1OverdueNum': '9 ',
          'M1ArreareRate': '2.48%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '0.28%',
          'M3OverdueNum': '4 ',
          'M3ArreareRate': '1.10%'
        },
        {
          'score': '(660, 670]',
          'approvalNum': '262 ',
          'approvalRate': '15.43%',
          'noArrearsNum': '252 ',
          'noArrearsRate': '96.01%',
          'M1OverdueNum': '10 ',
          'M1ArreareRate': '3.81%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(670, 680]',
          'approvalNum': '169 ',
          'approvalRate': '9.95%',
          'noArrearsNum': '165 ',
          'noArrearsRate': '97.50%',
          'M1OverdueNum': '3 ',
          'M1ArreareRate': '1.77%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '0.59%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(680, 690]',
          'approvalNum': '109 ',
          'approvalRate': '6.40%',
          'noArrearsNum': '108 ',
          'noArrearsRate': '99.21%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '0.92%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(690, 700]',
          'approvalNum': '60 ',
          'approvalRate': '3.55%',
          'noArrearsNum': '58 ',
          'noArrearsRate': '95.97%',
          'M1OverdueNum': '1 ',
          'M1ArreareRate': '1.65%',
          'M2OverdueNum': '1 ',
          'M2ArreareRate': '1.65%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '(700,~)',
          'approvalNum': '22 ',
          'approvalRate': '1.29%',
          'noArrearsNum': '22 ',
          'noArrearsRate': '100.00%',
          'M1OverdueNum': '0 ',
          'M1ArreareRate': '0.00%',
          'M2OverdueNum': '0 ',
          'M2ArreareRate': '0.00%',
          'M3OverdueNum': '0 ',
          'M3ArreareRate': '0.00%'
        },
        {
          'score': '合计',
          'approvalNum': '1701 ',
          'approvalRate': '100.00%',
          'noArrearsNum': '1632 ',
          'noArrearsRate': '95.92%',
          'M1OverdueNum': '45 ',
          'M1ArreareRate': '2.64%',
          'M2OverdueNum': '14 ',
          'M2ArreareRate': '0.82%',
          'M3OverdueNum': '8 ',
          'M3ArreareRate': '0.47%'
        }
      ]
    }

  }
}
export default {
  url: '/validation-score',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: validationScore
    }
  }
}
