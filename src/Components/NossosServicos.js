import React from 'react';
import './NossosServicos.css';
import NossosServicosCard from './NossosServicosCard';

import img1 from "../Assets/Icons/icons8-book-64.png";
import img2 from "../Assets/Icons/icons8-environment-care-100.png";
import img3 from "../Assets/Icons/icons8-partner-100.png";
import img4 from "../Assets/Icons/icons8-training-100.png";

function NossosServicos() {
    return (
        <div className='parceiros-div'>
            <div className='parceiros-top'>
                <div className='parceiros-horizontal-line'></div>
                <div className='parceiros-title'>
                    <h1>Nossos serviços</h1>
                </div>
            </div>
            <div className='caroussel'>
                <NossosServicosCard
                    image={img1}
                    title="The Method of Trusted Software"
                />
                <NossosServicosCard
                    image={img2}
                    title="The Method of Trusted Software"
                />
                <NossosServicosCard
                    image={img3}
                    title="The Method of Trusted Software"
                />
                <NossosServicosCard
                    image={img4}
                    title="The Method of Trusted Software"
                />
            </div>
        </div>
    );
}

export default NossosServicos; 
