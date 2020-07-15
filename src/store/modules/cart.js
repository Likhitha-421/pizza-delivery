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
  },
  UPDATE_ITEMS: (state, item) => {
    state.cartItems =item
    Ls.set('cart', JSON.stringify(state.cartItems).toString())
    state.cartCount = state.cartItems.length
    Ls.set('cartCount', state.cartCount)
    state.cartItemsLs = state.cartItems
  }
}

const actions = {

  addToCart({ commit }, item) {
      if (state.cartItems.length && state.cartItems.find(element => element.id === item.id)) {
          const selectItem = state.cartItems.find(element => element.id === item.id);
          selectItem.qty += 1
          commit('UPDATE_ITEMS', selectItem)
      } else {
          commit('SET_ITEMS', item)
      }

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
  },
  removeItem({ commit }, item) {
      const index = state.cartItems.findIndex(element => element.id === item)
      console.log(index)
      state.cartItems.splice(0, index)
      commit('UPDATE_ITEMS', state.cartItems)
  },
  changeQty({ commit }, item) {
      state.cartItems.find(element => element.id === item.id).qty = item.qty
      commit('UPDATE_ITEMS', state.cartItems)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
