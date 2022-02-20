import React from 'react';
import ExpandingCards from '../ExpandingCards';
import NewItem from '../NewItem';

import './style.css';

const SaleMain = () => {
    return (
        <div className='sale-main'>
            <ExpandingCards />
            <NewItem />
        </div>
    );
};

export default SaleMain;
