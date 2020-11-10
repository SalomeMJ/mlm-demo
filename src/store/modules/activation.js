
// import { isActive } from '@/api/activation'
// import router, { resetRouter } from '@/router'

const state = {
  isActive: false
}

const mutations = {
  SET_ACTIVE: (state, isActive) => {
    state.isActive = isActive
  }
}

const actions = {
  // 激活状态
  // isActive({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     isActive().then(response => {
  //       const { data } = response
  //       commit('SET_ACTIVE', data)
  //       resolve(response)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
