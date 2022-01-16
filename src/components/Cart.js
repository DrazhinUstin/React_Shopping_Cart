import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../context';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useGlobalContext();

    if (!cart.length) {
        return (
            <section className='section-center'>
                <div className='title'>
                    <h2>your cart</h2>
                    <span className='title-underline'></span>
                </div>
                <p className='empty-cart'>Is currently empty...</p>
            </section>
        );
    }

    return (
        <section className='section-center'>
            <div className='title'>
                <h2>your cart</h2>
                <span className='title-underline'></span>
            </div>
            <div className='cart'>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
                <div className='cart-total'>
                    <h4>total:</h4>
                    <span>{`$${totalPrice.toFixed(2)}`}</span>
                </div>
                <button className='cart-clear-btn' onClick={clearCart}>
                    clear cart
                </button>
            </div>
        </section>
    );
};

export default Cart;
