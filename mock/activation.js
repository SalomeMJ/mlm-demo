
export default [
  {
    url: '/business/license/activation',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: { 'datenum': 10490, 'status': '0' }
      }
    }
  },
  {
    url: '/business/license/isactivation',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: { 'datenum': 10490, 'status': '0' }
      }
    }
  }

]
