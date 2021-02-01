import React from 'react';
import AccountButton from '../AccountButton';
import CartButton from '../CartButton';

import './style.css';

const AccountNav = () => {
    return (
        <div className='account-nav'>
            <CartButton />
            <AccountButton />
        </div>
    );
};
export default AccountNav;
