import Ls from '../../utils/ls'

const state = {
  cartItems: JSON.parse(Ls.get('cart')) !== null &&  JSON.parse(Ls.get('cart')) !== undefined && Object.assign(JSON.parse(Ls.get('cart')), {}).length ? JSON.parse(Ls.get('cart')) : [],
  cartCount: Ls.get('cartCount') && Ls.get('cartCount') !== 'NaN'  && Ls.get('cartCount') !== 'undefined' ? Ls.get('cartCount') : 0
}

const mutations = {
  SET_ITEMS: (state, item) => {
    state.cartItems.push(item)
    Ls.set('cart', JSON.stringify(state.cartItems).toString())
  },
  UPDATE_ITEMS: (state, item) => {
    state.cartItems = item
    Ls.set('cart', JSON.stringify(state.cartItems).toString())
  },
  CLEAR_CART: (state) => {
      Ls.remove('cartCount')
      Ls.remove('cart')
      state.cartItems = []
      state.cartCount = 0
  },
  UPDATE_COUNT: (state) => {
      // count items  
      let itemsCount = 0;
      if (state.cartItems !== null && state.cartItems !== undefined && Object.assign(state.cartItems, {}).length) {
          state.cartItems.forEach((item) => {
              itemsCount += item ? item.qty : 0;
          });
      }
      state.cartCount = itemsCount
      Ls.set('cartCount', itemsCount)
      Ls.set('cart', JSON.stringify(state.cartItems).toString())
  }
}

const actions = {

  addToCart({ commit }, item) {
      const indexItem = state.cartItems.findIndex(x => x.id === item.id)
      if (Object.assign(state.cartItems, {}) && indexItem  > -1) {
          state.cartItems[indexItem].qty = state.cartItems[indexItem].qty + item.qty
          commit('UPDATE_ITEMS', state.cartItems)
      } else {
          commit('SET_ITEMS', item)
      }

      commit('UPDATE_COUNT')
  },
  loadCart({ commit }) {
      commit('UPDATE_COUNT')
  },
  clearCart({ commit }) {
      commit('CLEAR_CART')
      commit('UPDATE_COUNT')
  },
  removeItem({ commit }, item) {
      const index = state.cartItems.findIndex(element => element.id === item)
      state.cartItems.splice(index, 1)
      commit('UPDATE_ITEMS', state.cartItems)
      commit('UPDATE_COUNT')
  },
  changeQty({ commit }, item) {
      state.cartItems.find(x => x.id === item.id).qty = item.qty
      commit('UPDATE_ITEMS', state.cartItems)
      commit('UPDATE_COUNT')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
