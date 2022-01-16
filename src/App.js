import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useGlobalContext } from './context';

const App = () => {
    const { loading } = useGlobalContext();

    if (loading) {
        return (
            <>
                <Navbar />
                <div className='title'>
                    <h2>Loading...</h2>
                    <span className='title-underline'></span>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Cart />
        </>
    );
};

export default App;
