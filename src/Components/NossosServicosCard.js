import React from 'react';
import './NossosServicosCard.css';

const NossosServicosCard = ({ image, title }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} className='card-image' />
            <div className='card-title'>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default NossosServicosCard;
