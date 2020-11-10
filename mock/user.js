import qs from 'qs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

// const users = {
//   'admin-token': {
//     roles: 'admin',
//     introduction: 'I am a super administrator',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     userName: 'Super Admin'
//   },
//   'editor-token': {
//     roles: 'editor',
//     introduction: 'I am an editor',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     userName: 'Normal Editor'
//   }

// }

export default [
  // user login
  {
    url: '/login',
    type: 'post',
    response: config => {
      const { p_username } = qs.parse(config.body)
      const token = tokens[p_username]
      console.log(!tokens[p_username])
      // mock error
      if (!token) {
        return {
          code: 401,
          errorMessage: '账号或密码错误,请确认！'
        }
      } else {
        return {
          code: 200,
          data: token
        }
      }
    }
  },

  // get user info
  {
    url: '/account/getUserInfo',
    type: 'get',
    response: config => {
      // const { token } = config.query
      // const info = users['admin-token']
      const info = { 'roles': 'admin', 'authorities': [], 'loginName': 'admin', 'realName': 'admin', 'enabled': true, 'userDbId': 1, 'locale': 'zh_CN', 'screenLocked': false, 'csrf': null, 'manage': false, 'username': 'admin', 'credentialsNonExpired': true, 'accountNonLocked': true, 'accountNonExpired': true }
      // mock error
      if (!info) {
        return {
          code: 500,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  },
  {
    url: '/account/user/online',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          code: 200
        }
      }
    }
  }
]
