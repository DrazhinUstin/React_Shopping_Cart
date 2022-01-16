import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        loading: true,
        cart: [],
        totalAmount: 0,
        totalPrice: 0,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const removeCartItem = (id) => {
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
    };

    const toggleCartItemAmount = (id, key) => {
        dispatch({ type: 'TOGGLE_CART_ITEM_AMOUNT', payload: { id, key } });
    };

    useEffect(() => {
        dispatch({ type: 'CALCULATE_CART_TOTALS' });
    }, [state.cart]);

    useEffect(async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await fetch('https://course-api.com/react-useReducer-cart-project');
            const data = await response.json();
            dispatch({ type: 'DISPLAY_CART', payload: data });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <AppContext.Provider value={{ ...state, clearCart, removeCartItem, toggleCartItemAmount }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
