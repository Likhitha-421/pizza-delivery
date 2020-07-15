import Ls from '../../utils/ls'

const state = {
  selectedCurrency: ''
}

const mutations = {
  SET_CURRENCY: (state, item) => {
      state.selectedCurrency = item
      Ls.set('currency', item)
  }
}

const actions = {

  selectCurrency({ commit }, item) {
      commit('SET_CURRENCY', item)
      Ls.set('currency', item)
  },

  loadCurrency({ commit }) {
      const defaultCurrency = Ls.get('currency') ? Ls.get('currency') : 'USD'
      Ls.set('currency', defaultCurrency)
      commit('SET_CURRENCY', defaultCurrency)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
