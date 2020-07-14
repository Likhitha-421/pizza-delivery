import Ls from '../../utils/ls'

const state = {
  cartItems: [],
  cartCount: Ls.get('cartCount'),
  cartItemsLs: JSON.parse(Ls.get('cart'))
}

const mutations = {
  SET_ITEMS: (state, item) => {
    state.cartItems.push(item)
    Ls.set('cart', JSON.stringify(state.cartItems).toString())
    state.cartCount = state.cartItems.length
    Ls.set('cartCount', state.cartCount)
    state.cartItemsLs = state.cartItems
  }
}

const actions = {

  addToCart({ commit }, item) {
      commit('SET_ITEMS', item)
  },

  loadCart() {
      const itemsLs = Ls.get('cart') ? Object.assign(JSON.parse(Ls.get('cart')), {}) : []
      state.cartItems = itemsLs
      state.cartItemsLs = itemsLs
      state.cartCount = itemsLs.length
  },

  clearCart() {
      Ls.remove('cart')
      Ls.remove('cartCount')
      state.cartItems = []
      state.cartItemsLs = []
      state.cartCount = 0
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
