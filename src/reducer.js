const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }
    if (action.type === 'DISPLAY_CART') {
        return { ...state, cart: action.payload, loading: false };
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] };
    }
    if (action.type === 'REMOVE_CART_ITEM') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    }
    if (action.type === 'TOGGLE_CART_ITEM_AMOUNT') {
        const newCart = state.cart
            .map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload.key === 'increase'
                        ? { ...item, amount: item.amount++ }
                        : { ...item, amount: item.amount-- };
                }
                return item;
            })
            .filter((item) => item.amount > 0);
        return { ...state, cart: newCart };
    }
    if (action.type === 'CALCULATE_CART_TOTALS') {
        const { totalAmount, totalPrice } = state.cart.reduce(
            (obj, item) => {
                obj.totalAmount += item.amount;
                obj.totalPrice += item.amount * item.price;
                return obj;
            },
            { totalAmount: 0, totalPrice: 0 }
        );
        return { ...state, totalAmount, totalPrice };
    }
    throw new Error('No matching action type!!!');
};

export default reducer;
