import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import './style.css';

const AccountButton = () => {
    return (
        <button className='account-button'>
            <AccountCircleOutlinedIcon className='icon' />
            <p>Account</p>
        </button>
    );
};

export default AccountButton;
