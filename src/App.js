import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useGlobalContext } from './context';

const App = () => {
    const { loading } = useGlobalContext();

    if (loading) {
        return <h1>loading</h1>;
    }

    return (
        <>
            <Navbar />
            <Cart />
        </>
    );
};

export default App;
