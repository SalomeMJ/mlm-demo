const modelDocument = {
  status: 200,
  message: 'success',
  data: {
    'modelDocument': [{
      'id': 0,
      'parent': 0,
      'level': '1',
      'identify': 'ALL',
      'count': null,
      'roleCount': 0,
      'userCount': 0,
      'name': '所有文档',
      'type': 'ALL',
      'checked': false,
      'selected': false,
      'children': null,
      'canBeSelected': null,
      'leaf': false
    }, {
      'id': 1,
      'parent': 0,
      'level': '1',
      'identify': 'DEPARTMENT_1',
      'count': null,
      'roleCount': 0,
      'userCount': 2,
      'name': '数据文件',
      'type': 'DEPARTMENT',
      'checked': false,
      'selected': false,
      'children': [],
      'canBeSelected': null,
      'leaf': false
    }, {
      'id': 2,
      'parent': 0,
      'level': '1',
      'identify': 'DEPARTMENT_1',
      'count': null,
      'roleCount': 0,
      'userCount': 2,
      'name': '需求文档',
      'type': 'DEPARTMENT',
      'checked': false,
      'selected': false,
      'children': [],
      'canBeSelected': null,
      'leaf': false
    }, {
      'id': 3,
      'parent': 0,
      'level': '1',
      'identify': 'DEPARTMENT_1',
      'count': null,
      'roleCount': 0,
      'userCount': 2,
      'name': '开发文档',
      'type': 'DEPARTMENT',
      'checked': false,
      'selected': false,
      'children': [],
      'canBeSelected': null,
      'leaf': false
    }],
    'documentList': {
      'dataDocu': [{
        'documentName': '测试数据01.csv',
        'operator': '黎簇',
        'operateTime': '2020.06.05 12:00:12'
      }, {
        'documentName': '测试数据02.csv',
        'operator': '王盟',
        'operateTime': '2020.06.05 12:00:12'
      }],
      'demandDocu': [{
        'documentName': '评分卡模型需求.doc',
        'operator': '黎簇',
        'operateTime': '2020.06.05 12:00:12'
      }],
      'developDocu': [{
        'documentName': '数据清洗报告.doc',
        'operator': '黎簇',
        'operateTime': '2020.06.05 12:00:12'
      }, {
        'documentName': '特征衍生报告.doc',
        'operator': '王盟',
        'operateTime': '2020.06.05 12:00:12'
      }, {
        'documentName': '模型训练报告.doc',
        'operator': '田雨',
        'operateTime': '2020.06.05 12:00:12'
      }]
    }
  }
}
export default {
  url: '/model-document',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: modelDocument
    }
  }
}
