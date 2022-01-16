import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const CartItem = ({ id, img, title, price, amount }) => {
    const { removeCartItem, toggleCartItemAmount } = useGlobalContext();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
                <button className='remove-btn' onClick={() => removeCartItem(id)}>
                    remove
                </button>
            </div>
            <div>
                <button className='icon-btn' onClick={() => toggleCartItemAmount(id, 'increase')}>
                    <FaChevronUp />
                </button>
                <p>{amount}</p>
                <button className='icon-btn' onClick={() => toggleCartItemAmount(id, 'decrease')}>
                    <FaChevronDown />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
