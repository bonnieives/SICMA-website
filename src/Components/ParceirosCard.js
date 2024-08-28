import React from 'react';
import './ParceirosCard.css';

const ParceirosCard = ({ image, title }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} className='card-image' />
            <div className='card-title'>
                <h5>{title}</h5>
            </div>
        </div>
    );
}

export default ParceirosCard;
