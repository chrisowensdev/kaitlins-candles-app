import React from 'react';

import './style.css';

const PictureCarousel = () => {
    return (
        <div className='picture-carousel'>
            <div className='picture-container'>
                <img src='/picturecarousel/pic1.jpeg' alt='picture1' />
            </div>
            <div className='picture-container'>
                <img src='/picturecarousel/pic2.jpeg' alt='picture1' />
            </div>
            <div className='picture-container'>
                <img src='/picturecarousel/pic3.jpeg' alt='picture1' />
            </div>
            <div className='picture-container'>
                <img src='/picturecarousel/pic4.jpeg' alt='picture1' />
            </div>
            <div className='picture-container'>
                <img src='/picturecarousel/pic5.jpeg' alt='picture1' />
            </div>
        </div>
    );
};

export default PictureCarousel;
