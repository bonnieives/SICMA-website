import React from 'react';
import './LocationDiv.css';
import LocationApi from '../Services/LocationApi';

import img1 from '../Assets/Icons/18.png';

const LocationDiv = () => {
    return (
        <div className='location-div'>
            <div className='location-api-div'>
                <LocationApi />
            </div>
            <div className='location-address'>
                <p>Av. Xavier da Silveira, 377</p>
                <p>Tirol, Natal - RN, 59015-430</p>
            </div>
            <div className='background-location-div'>
                <div>
                </div>
                <div className='lista-links-div'>
                    <a href="#">Projetos</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Solucoes</a>
                    <a href="#">Publicacoes</a>
                    <a href="#">Arquivos</a>
                </div>
                <div className='img-div'>
                    <img src={img1} alt="imgLocation" className="imgLocation"/>
                </div>
            </div>
        </div>
    );
};

export default LocationDiv;