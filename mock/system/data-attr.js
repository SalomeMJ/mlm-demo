const dataAttr = {
  status: 200,
  message: 'success',
  data: {
    'dataAttr': [{
      'id': 1,
      'creator': '刘倩',
      'createTime': '2020-03-31T06:55:46.000Z',
      'updater': '刘倩',
      'updateTime': '2020-03-31T06:55:52.000Z',
      'name': '项目',
      'desc': '项目',
      'code': 'A01',
      'orderNum': 1,
      'attrKey': 'attr1',
      'selected': null,
      'attributeLines': [{
        'id': 1,
        'creator': '刘倩',
        'createTime': '2020-03-31T06:55:46.000Z',
        'updater': '刘倩',
        'updateTime': '2020-03-31T06:55:46.000Z',
        'name': '新车预审批',
        'desc': '新车预审批',
        'code': 'A0101',
        'attrId': 1,
        'attrKey': 'attr1',
        'attrValue': 1,
        'selected': null
      }, {
        'id': 2,
        'creator': '刘倩',
        'createTime': '2020-03-31T06:55:46.000Z',
        'updater': '刘倩',
        'updateTime': '2020-03-31T06:55:46.000Z',
        'name': '二手车审批',
        'desc': '二手车审批',
        'code': 'A0102',
        'attrId': 1,
        'attrKey': 'attr1',
        'attrValue': 2,
        'selected': null
      }, {
        'id': 3,
        'creator': '刘倩',
        'createTime': '2020-03-31T06:55:46.000Z',
        'updater': '刘倩',
        'updateTime': '2020-03-31T06:55:46.000Z',
        'name': '自营车审批',
        'desc': '自营车审批',
        'code': 'A0103',
        'attrId': 1,
        'attrKey': 'attr1',
        'attrValue': 3,
        'selected': null
      }, {
        'id': 2,
        'creator': '刘倩',
        'createTime': '2020-03-31T06:55:46.000Z',
        'updater': '刘倩',
        'updateTime': '2020-03-31T06:55:46.000Z',
        'name': '小额信贷审批',
        'desc': '小额信贷审批',
        'code': 'A0102',
        'attrId': 1,
        'attrKey': 'attr1',
        'attrValue': 2,
        'selected': null
      }, {
        'id': 3,
        'creator': '刘倩',
        'createTime': '2020-03-31T06:55:46.000Z',
        'updater': '刘倩',
        'updateTime': '2020-03-31T06:55:46.000Z',
        'name': '消费贷款审批',
        'desc': '消费贷款审批',
        'code': 'A0103',
        'attrId': 1,
        'attrKey': 'attr1',
        'attrValue': 3,
        'selected': null
      }],
      'attributeLine': null
    }]
  }
}
export default {
  url: '/system/data-attr',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: dataAttr
    }
  }
}
