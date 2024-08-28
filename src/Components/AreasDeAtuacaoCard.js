import React from 'react';
import './AreasDeAtuacaoCard.css';

const AreasDeAtuacaoCard = ({ title, text }) => {
    return (
        <div className='areas-card'>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    );
}

export default AreasDeAtuacaoCard;
