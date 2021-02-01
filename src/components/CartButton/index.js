import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './style.css';

const CartButton = () => {
    return (
        <button className='cart-button'>
            <ShoppingCartIcon className='icon' />
            <p>Cart</p>
        </button>
    );
};

export default CartButton;
