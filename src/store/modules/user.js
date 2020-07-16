import { checkOtp, checkToken } from '../../api/user'
import Ls from '../../utils/ls'

const state = {
  isAuthenticated: false,
  token: Ls.get('token'),
  username: Ls.get('username'),
}

const mutations = {
  SET_USERNAME: (state, item) => {
      state.username = item
      Ls.set('username', item)
  },
  SET_TOKEN: (state, item) => {
      state.token = item
      Ls.set('token', item)
  },
  UPDATE_STATUS: (state, item) => {
      state.isAuthenticated = item
  }
}

const actions = {
  async addToken({ commit }, token) {
      commit('SET_TOKEN', token)
  },
  async authOtp({ commit }, otp) {
      await checkOtp(otp).then(response => {
          const { code, data } = response
          if (code === 20000) {
              commit('SET_TOKEN', data.token)
              commit('SET_USERNAME', data.username)
              commit('UPDATE_STATUS', true)
          }
      })
  },
  async checkAuth({ commit }) {
      await checkToken(state.token).then(response => {
          const { code } = response
          if (code === 20000) {
              commit('UPDATE_STATUS', true)
          } else {
              commit('SET_TOKEN', '')
              commit('SET_USERNAME', '')
              commit('UPDATE_STATUS', false)
          }
      })
  },
  async logout({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_USERNAME', '')
      commit('UPDATE_STATUS', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
