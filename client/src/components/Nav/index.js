import React from 'react';
import './style.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>Candles</li>
                <li>Wax Melts</li>
                <li>Seasonal</li>
                <li>Special Occasion</li>
                <li>Other</li>
                <li>Sale</li>
                <li>Contact</li>
            </ul>
            {/* <section className='banner'>
                <p className='left'>10 - 15% OFF</p>
                <p className='center'>
                    <span>Select Items</span> <br />
                    Limited Quantities
                </p>
                <p className='right'>Shop Sale</p>
            </section> */}
        </nav>
    );
};

export default Nav;
