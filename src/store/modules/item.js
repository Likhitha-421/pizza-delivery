import { fetchList } from '../../api/item'

const state = {
  itemList: []
}

const mutations = {
  SET_ITEM: (state, item) => {
      state.itemList = item
  }
}

const actions = {
  async loadMenu({ commit }) {
      if (!state.itemList.length) {
          const { data } = await fetchList()
          commit('SET_ITEM', data)
      }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
