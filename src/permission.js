import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  const isActive = await store.dispatch('activation/isActive')
  // 判断是否激活
  if (isActive.status === '0') {
    //  判断是否登录
    const hasToken = getToken()
    if (hasToken) {
      // 已经登陆则跳转dashboard
      if (to.path === '/login' || to.path === '/activation') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        const hasRoles = store.getters.roles && store.getters.roles.length > 0
        if (hasRoles) {
          next()
        } else {
          try {
            // get user info
            await store.dispatch('user/getInfo')
            next({ ...to, replace: true })
          } catch (error) {
            // remove token and go to login page to re-login
            await store.dispatch('user/resetToken')
            Message.error(error || 'Has Error')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        }
      }
    } else {
      /* 没有token*/
      if (to.path === '/login') {
        next()
      } else {
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    /* 没有激活报错，跳转激活页面*/
    if (to.path === '/activation') {
      next()
      NProgress.done()
    } else {
      switch (isActive.status) {
        case '1':
          Message({
            message: '激活码过期',
            type: 'error',
            duration: 3 * 1000
          })
          break
        case '2':
          Message({
            message: 'mac地址错误',
            type: 'error',
            duration: 3 * 1000
          })
          break
        case '3':
          Message({
            message: '激活码错误',
            type: 'error',
            duration: 3 * 1000
          })
          break
        case '4':
          Message({
            message: '系统时间错误',
            type: 'error',
            duration: 3 * 1000
          })
          break
      }
      next(`/activation?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
