import { fetchCategoryList } from '../../api/category'

const state = {
  menuList: []
}

const mutations = {
  SET_MENU: (state, item) => {
      state.menuList = item
  }
}

const actions = {
  async loadMenu({ commit }) {
      if (!state.menuList.length) {
          const { data } = await fetchCategoryList()
          if (data && data.length) {
              commit('SET_MENU', data.filter(menu => menu.itemsCount > 0))
          }
      }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
