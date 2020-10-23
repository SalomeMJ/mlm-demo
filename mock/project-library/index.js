const projectLibrary = {
  status: 200,
  message: 'success',
  data: {
    'projectList|5': [
      {
        'projectName|+1': ['name', 'name', 'name', 'name', 'name'],
        'projectPrimary|+1': [true, true, false, true, false],
        'projectNum|+1': [123, 123, 123, 123, 123],
        'memberNum|+1': [123, 123, 123, 123, 123],
        'creatTime|+1': ['202.08.09-12:00:00', '202.08.09-12:00:00', '202.08.09-12:00:00', '202.08.09-12:00:00', '202.08.09-12:00:00']
      }
    ]
  }
}
export default {
  url: '/project-library',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: projectLibrary
    }
  }
}
