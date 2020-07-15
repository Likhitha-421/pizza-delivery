const getters = {
    cartItems: state => state.cart.cartItems,
    cartCount: state => state.cart.cartCount,
    selectedCurrency: state => state.currency.selectedCurrency,
    menuList: state => state.menu.menuList,
    itemList: state => state.item.itemList
}
export default getters
