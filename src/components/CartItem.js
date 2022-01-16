import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
                <button className='remove-btn'>remove</button>
            </div>
            <div>
                <button className='icon-btn'>
                    <FaChevronUp />
                </button>
                <p>{amount}</p>
                <button className='icon-btn'>
                    <FaChevronDown />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
