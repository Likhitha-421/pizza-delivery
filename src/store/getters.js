const getters = {
    cartItems: state => state.cart.cartItems,
    cartItemsLs: state => state.cart.cartItemsLs,
    cartCount: state => state.cart.cartCount,
    selectedCurrency: state => state.currency.selectedCurrency
}
export default getters
