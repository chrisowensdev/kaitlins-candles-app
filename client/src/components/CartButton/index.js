import React from 'react';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import './style.css';

const CartButton = () => {
    return (
        <button className='cart-button'>
            <LocalMallOutlinedIcon className='icon' />
            <p>Cart</p>
        </button>
    );
};

export default CartButton;
