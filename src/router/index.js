import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/model-market',
    children: [
      {
        path: 'model-market',
        component: () => import('@/views/model-market'),
        name: 'ModelMarket',
        meta: { title: 'model-market', affix: true, activeMenu: '/model-market' }
      },
      {
        path: 'nuclearsign-center',
        component: () => import('@/views/nuclearsign-center'),
        name: 'NuclearsignCenter',
        meta: { title: 'nuclearsign-center', affix: true, activeMenu: '/nuclearsign-center' }
      },
      {
        path: 'project-library',
        component: () => import('@/views/project-library'),
        name: 'ProjectLibrary',
        meta: { title: 'project-library', affix: true, activeMenu: '/project-library' },
        children: [
          {
            path: 'project-detail',
            component: () => import('@/views/project-library/project-detail'),
            name: 'ProjectDetail',
            meta: { title: 'project-detail', affix: true, activeMenu: '/project-library' }
          },
          {
            path: 'model-record',
            component: () => import('@/views/project-library/project-detail/model-record'),
            name: 'ModelRecord',
            meta: { title: 'model-record', affix: true, activeMenu: '/project-library' }
          },
          {
            path: 'validation-detail',
            component: () => import('@/views/project-library/project-detail/validation-detail'),
            name: 'ValidationDetail',
            meta: { title: 'validation-detail', affix: true, activeMenu: '/project-library' }
          },
          {
            path: 'using-detail',
            component: () => import('@/views/project-library/project-detail/using-event'),
            name: 'UsingDetail',
            meta: { title: 'using-detail', affix: true, activeMenu: '/project-library' }
          },
          {
            path: 'warning-rule',
            component: () => import('@/views/project-library/project-detail/warning-rule'),
            name: 'WarningRule',
            meta: { title: 'warning-rule', affix: true, activeMenu: '/project-library' }
          }
          // {
          //   path: 'warningrule-detail',
          //   component: () => import('@/views/project-library/project-detail/warning-rule'),
          //   name: 'ComplateRuleDetail',
          //   meta: { title: 'warning-rule', affix: true, activeMenu: '/project-library' }
          // }
        ]
      },
      // {
      //   path: 'project-detail',
      //   component: () => import('@/views/project-library/project-detail'),
      //   name: 'ProjectDetail',
      //   meta: { title: 'project-detail', affix: true, activeMenu: '/project-detail' }
      // },
      {
        path: 'model-library',
        component: () => import('@/views/model-library'),
        name: 'ModelLibrary',
        meta: { title: 'model-library', affix: true, activeMenu: '/model-library' }
      }
    ]
  }
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard1',
  //   children: [
  //     {
  //       path: '/dashboard1',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'dashboard1'
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
