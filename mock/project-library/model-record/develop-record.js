const developRecord = {
  status: 200,
  message: 'success',
  data: {
    'developDataset': 'DataSet.csv',
    'developFeature': 'Feature.xls',
    'developAlgorithm': 'Algorithm.docx',
    'developTest': 'Test.docx'
  }
}
export default {
  url: '/develop-record',
  type: 'get',
  response: response => {
    console.log(response)
    return {
      code: 200,
      data: developRecord
    }
  }
}
