const getters = {
    cartItems: state => state.cart.cartItems,
    cartCount: state => state.cart.cartCount,
    selectedCurrency: state => state.currency.selectedCurrency,
    menuList: state => state.menu.menuList,
    isAuthenticated: state => state.user.isAuthenticated,
    token: state => state.user.token,
    username: state => state.user.username,
    itemList: state => state.item.itemList
}
export default getters
