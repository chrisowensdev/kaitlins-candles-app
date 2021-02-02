import React, { useState } from 'react';

import './style.css';

const ExpandingCards = () => {
    const [active, setActive] = useState(5);

    const _handleCardChange = (number) => {
        setActive(number);
    };
    return (
        <div class='expanding-cards'>
            <div
                className={`card ${active === 1 ? 'active' : ''}`}
                onClick={(e) => _handleCardChange(1)}
            >
                <img src='/expandingcards/pic1.png' alt='pic1' />
                <div className='text'>
                    <p>Hearts</p>
                </div>
            </div>
            <div
                className={`card ${active === 2 ? 'active' : ''}`}
                onClick={(e) => _handleCardChange(2)}
            >
                <img src='/expandingcards/pic2.png' alt='pic2' />
                <div className='text'>
                    <p>Dreamin' Away</p>
                    <p>Some text here</p>
                </div>
            </div>
            <div
                className={`card ${active === 3 ? 'active' : ''}`}
                onClick={(e) => _handleCardChange(3)}
            >
                <img src='/expandingcards/pic3.png' alt='pic1' />
                <div className='text'>
                    <p>Lavender</p>
                </div>
            </div>
            <div
                className={`card ${active === 4 ? 'active' : ''}`}
                onClick={(e) => _handleCardChange(4)}
            >
                <img src='/expandingcards/pic4.png' alt='pic1' />
                <div className='text'>
                    <p>Rose</p>
                </div>
            </div>
            <div
                className={`card ${active === 5 ? 'active' : ''}`}
                onClick={(e) => _handleCardChange(5)}
            >
                <img
                    className='valentine'
                    src='/expandingcards/valentine.png'
                    alt='pic1'
                />
            </div>
        </div>
    );
};

export default ExpandingCards;
