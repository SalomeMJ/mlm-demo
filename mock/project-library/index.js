const projectLibrary = {
  status: 200,
  message: 'success',
  data: {
    'projectList|5': [
      {
        'projectId|+1': [1, 2, 3, 4, 5],
        'projectName|+1': ['name1', 'name2', 'name3', 'name4', 'name5'],
        'projectPrimary|+1': [true, true, false, true, false],
        'projectDesc|+1': ['name', 'name', 'name', 'name', 'name'],
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
