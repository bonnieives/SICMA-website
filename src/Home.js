import React from 'react';
import MainDiv from './Components/MainDiv';
import Parceiros from './Components/Parceiros';
import AreasDeAtuacao from './Components/AreasDeAtuacao';
import NossosServicos from './Components/NossosServicos';
import NewsApi from './Services/NewsApi';
import LocationApi from './Services/LocationApi';
import LocationDiv from './Components/LocationDiv';


function Home() {
    return (
        <div>
            <MainDiv />
            <Parceiros />
            <AreasDeAtuacao />
            <NossosServicos />
            <NewsApi />
            <LocationDiv />
        </div>
    );
}

export default Home; 
