import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { totalAmount } = useGlobalContext();
    return (
        <nav className='nav'>
            <div className='navbar section-center'>
                <h1 className='navbar-logo'>shopping cart</h1>
                <div className='navbar-counter'>
                    <FaShoppingBag />
                    <span>{totalAmount}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
