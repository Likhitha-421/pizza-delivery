import Ls from '../../utils/ls'

const state = {
  cartItems: [],
  cartCount: Ls.get('cartCount')
}

const mutations = {
  SET_ITEMS: (state, item) => {
    state.cartItems.push(item)
    Ls.set('cart', JSON.stringify(state.cartItems).toString())
    state.cartCount = state.cartItems.length
    Ls.set('cartCount', state.cartCount)
  }
}

const actions = {
  addToCart({ commit }, item) {
      commit('SET_ITEMS', item)
  },
  loadCart() {
      const items = Ls.get('cart') && Object.assign(JSON.parse(Ls.get('cart'))).length
          ? JSON.parse(Ls.get('cart'))
          : []

      state.cartItems = items
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
