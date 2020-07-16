import Ls from '../../utils/ls'

const state = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0
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
      state.cartItems = JSON.parse(Ls.get('cart')) !== null &&  JSON.parse(Ls.get('cart')) !== undefined && Object.assign(JSON.parse(Ls.get('cart')), {}).length ? JSON.parse(Ls.get('cart')) : []
      // count items  
      let itemsCount = 0;
      if (state.cartItems !== null && state.cartItems !== undefined && Object.assign(state.cartItems, {}).length) {
          state.cartItems.forEach((item) => {
              itemsCount += item ? item.qty : 0;
          });
      }
      state.cartCount = itemsCount
      Ls.set('cartCount', itemsCount)
  },
  UPDATE_PRICE: (state) => {
      // count items
      let itemsPrice = 0;
      if (state.cartItems !== null && state.cartItems !== undefined && Object.assign(state.cartItems, {}).length) {
          state.cartItems.forEach((item) => {
              itemsPrice += item && item.qty ? item.qty : 0;
          });
      }
      state.cartCount = itemsPrice
  }
}

const actions = {

  async addToCart({ commit }, item) {
      const indexItem = await state.cartItems.findIndex(x => x.id === item.id)
      if (Object.assign(state.cartItems, {}) && indexItem  > -1) {
          state.cartItems[indexItem].qty = state.cartItems[indexItem].qty + item.qty
          await commit('UPDATE_ITEMS', state.cartItems)
      } else {
          await commit('SET_ITEMS', item)
      }

      await commit('UPDATE_COUNT')
  },
  loadCart({ commit }) {
      commit('UPDATE_COUNT')
      commit('UPDATE_PRICE')
  },
  async clearCart({ commit }) {
      await commit('CLEAR_CART')
      commit('UPDATE_COUNT')
  },
  async removeItem({ commit }, item) {
      const index = await state.cartItems.findIndex(element => element.id === item)
      state.cartItems.splice(index, 1)
      await commit('UPDATE_ITEMS', state.cartItems)
      commit('UPDATE_COUNT')
  },
  async changeQty({ commit }, item) {
      state.cartItems.find(x => x.id === item.id).qty = item.qty
      await commit('UPDATE_ITEMS', state.cartItems)
      commit('UPDATE_COUNT')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
