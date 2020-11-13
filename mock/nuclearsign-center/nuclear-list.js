const nuclearList = {
  status: 200,
  message: 'success',
  data: {
    'nuclearList|4': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'eventName|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批'],
        'desc|+1': ['易速贷申请易速贷申请易速贷申请易速贷申请易速贷申请', '自营车审批', '新车审批', '二手车预审批'],
        'head|+1': ['黎簇', '黎簇', '黎簇', '黎簇'],
        'status|+1': ['已通过', '审批中', '已拒绝', '已撤销'],
        'touchTime|+1': ['11', '5', '1', '0'],
        'time|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24']
      }
    ]
  }
}
export default {
  url: '/nuclear-list',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: nuclearList
    }
  }
}
