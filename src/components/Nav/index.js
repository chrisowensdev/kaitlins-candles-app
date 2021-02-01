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
            <section className='banner'>
                <p class='left'>10 - 15% OFF</p>
                <p class='center'>
                    <span>Select Items</span> <br />
                    Limited Quantities
                </p>
                <p class='right'>Shop Sale</p>
            </section>
        </nav>
    );
};

export default Nav;
