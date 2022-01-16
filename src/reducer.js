const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }
    if (action.type === 'DISPLAY_CART') {
        return { ...state, cart: action.payload, loading: false };
    }
    return state;
};

export default reducer;
