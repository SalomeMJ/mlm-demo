const featureAnalysis = {
  status: 200,
  message: 'success',
  data: {
    'featureList': [
      { 'featureName': '性别', 'featureType': '离散型' },
      { 'featureName': '年龄', 'featureType': '连续性' },
      { 'featureName': '学历', 'featureType': '离散型' },
      { 'featureName': '婚姻状况', 'featureType': '离散型' },
      { 'featureName': '行业', 'featureType': '连续性' },
      { 'featureName': '职业', 'featureType': '离散型' },
      { 'featureName': '居住时间', 'featureType': '连续性' },
      { 'featureName': '居住状况', 'featureType': '连续性' },
      { 'featureName': '有无房贷', 'featureType': '离散型' },
      { 'featureName': '是否有车贷', 'featureType': '离散型' },
      { 'featureName': '报告信息AEA3', 'featureType': '连续性' },
      { 'featureName': '报告信息AEA4', 'featureType': '连续性' },
      { 'featureName': '报告信息AFA1', 'featureType': '离散型' },
      { 'featureName': '报告信息AFB1', 'featureType': '离散型' },
      { 'featureName': '贷款信息BAA1', 'featureType': '连续性' },
      { 'featureName': '贷款信息BAA2', 'featureType': '离散型' },
      { 'featureName': '贷款信息BAA3', 'featureType': '连续性' },
      { 'featureName': '贷款信息BAA4', 'featureType': '离散型' },
      { 'featureName': '贷款信息BAB1', 'featureType': '连续性' },
      { 'featureName': '贷款信息BAB2', 'featureType': '连续性' }

    ],
    'chartDistractData': [
      { 'score': 202001, 'PSI': 0.0112, 'CSI': 0.31 },
      { 'score': 202002, 'PSI': 0.0234, 'CSI': '-0.56' },
      { 'score': 202003, 'PSI': 0.0293, 'CSI': '-0.09' },
      { 'score': 202004, 'PSI': 0.0184, 'CSI': 0.14 },
      { 'score': 202005, 'PSI': 0.0713, 'CSI': 1.23 },
      { 'score': 202006, 'PSI': 0.0381, 'CSI': '-0.45' }
    ],
    'chartContinuteData': [
      { 'score': 202001, 'PSI': 0.0112, 'CSI': 0.31 },
      { 'score': 202002, 'PSI': 0.0234, 'CSI': '-0.56' },
      { 'score': 202003, 'PSI': 0.0293, 'CSI': '-0.09' },
      { 'score': 202004, 'PSI': 0.0184, 'CSI': 0.14 },
      { 'score': 202005, 'PSI': 0.0713, 'CSI': 1.23 },
      { 'score': 202006, 'PSI': 0.0381, 'CSI': '-0.45' }
    ],
    'distractFeature': [
      { 'score': '男', 'developSampleNum': 6778, 'developSampleRate': '86.82%', 'actualSapleNum': 5033, 'actualSapleRate': '86.33%', 'proportionGap': '-0.0049 ', 'proportionWeight': '-0.0057 ', 'PSI': '0.0000 ', 'boxfraction': 40, 'CSI': '-0.1961 ' },
      { 'score': '女', 'developSampleNum': 1029, 'developSampleRate': '13.18%', 'actualSapleNum': 797, 'actualSapleRate': '13.67%', 'proportionGap': '0.0049 ', 'proportionWeight': '0.0365 ', 'PSI': '0.0002 ', 'boxfraction': 25, 'CSI': '0.1225 ' },
      { 'score': '合计', 'developSampleNum': 7807, 'developSampleRate': '100.00%', 'actualSapleNum': 5830, 'actualSapleRate': '100.00%', 'proportionGap': '/', 'proportionWeight': '/', 'PSI': '0.0002 ', 'boxfraction': '/', 'CSI': '-0.0735 ' }
    ],
    'continuteFeature': [
      { 'score': '(0,1]', 'developSampleNum': 5599, 'developSampleRate': '71.74%', 'actualSapleNum': 4213, 'actualSapleRate': '72.30%', 'proportionGap': '0.0057 ', 'proportionWeight': '0.0078 ', 'PSI': '0.0000 ', 'boxfraction': 17, 'CSI': '0.0961 ' },
      { 'score': '(1,2]', 'developSampleNum': 871, 'developSampleRate': '11.16%', 'actualSapleNum': 647, 'actualSapleRate': '11.10%', 'proportionGap': '-0.0006 ', 'proportionWeight': '-0.0050 ', 'PSI': '0.0000 ', 'boxfraction': 19, 'CSI': '-0.0106 ' },
      { 'score': '(2,5]', 'developSampleNum': 688, 'developSampleRate': '8.81%', 'actualSapleNum': 511, 'actualSapleRate': '8.77%', 'proportionGap': '-0.0005 ', 'proportionWeight': '-0.0052 ', 'PSI': '0.0000 ', 'boxfraction': 26, 'CSI': '-0.0118 ' },
      { 'score': '(5,10]', 'developSampleNum': 561, 'developSampleRate': '7.19%', 'actualSapleNum': 403, 'actualSapleRate': '6.92%', 'proportionGap': '-0.0027 ', 'proportionWeight': '-0.0385 ', 'PSI': '0.0001 ', 'boxfraction': 30, 'CSI': '-0.0815 ' },
      { 'score': '(10,23]', 'developSampleNum': 86, 'developSampleRate': '1.10%', 'actualSapleNum': 53, 'actualSapleRate': '0.91%', 'proportionGap': '-0.0019 ', 'proportionWeight': '-0.1918 ', 'PSI': '0.0004 ', 'boxfraction': 40, 'CSI': '-0.0769 ' },
      { 'score': '合计', 'developSampleNum': 7805, 'developSampleRate': '100.00%', 'actualSapleNum': 5827, 'actualSapleRate': '100.00%', 'proportionGap': '/', 'proportionWeight': '/', 'PSI': '0.0005 ', 'boxfraction': '/', 'CSI': '-0.0847 ' }
    ]
  }
}
export default {
  url: '/monitor/feature-analysis',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: featureAnalysis
    }
  }
}
