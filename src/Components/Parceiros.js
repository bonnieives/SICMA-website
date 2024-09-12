import React from 'react';
import './Parceiros.css';
import ParceirosCard from './ParceirosCard';

function Parceiros() {
    return (
        <div className='parceiros-div'>
            <div className='parceiros-top'>
                <div className='parceiros-horizontal-line'></div>
                <div className='parceiros-title'>
                    <h1>Nossos Parceiros</h1>
                </div>
            </div>
            <div className='caroussel'>
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Method of Trusted Software"
                />
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Compression of Universal Perception"
                />
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Capability of Adaptative Level"
                />
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Innovation of Vital Deception"
                />
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Source of Present Software"
                />
                <ParceirosCard
                    image="https://via.placeholder.com/300"
                    title="The Emergency of Intercangeable Agenda"
                />
            </div>
        </div>
    );
}

export default Parceiros; 
