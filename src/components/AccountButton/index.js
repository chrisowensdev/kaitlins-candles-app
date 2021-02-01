import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './style.css';

const AccountButton = () => {
    return (
        <button className='account-button'>
            <AccountCircleIcon className='icon' />
            <p>Account</p>
        </button>
    );
};

export default AccountButton;
