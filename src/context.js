import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        loading: false,
        cart: [],
        totalAmount: 0,
        totalPrice: 0,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

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

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
