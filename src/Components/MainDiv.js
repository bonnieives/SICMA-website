import React from "react";
import './MainDiv.css';
import CustomButton from "./CustomButton";

import img1 from '../Assets/Pictures/R.jpg';
import img2 from '../Assets/Pictures/tree-5102896_1280.jpg';
import img3 from '../Assets/Pictures/pexels-obviouslyarthur-1296265.jpg';
import img4 from '../Assets/Pictures/Ethics-renewables.webp';

const MainDiv =() => {
    return(
        <div>
            <div className="section-main-div">
                <div className="text-container">
                    <h1>Encontre a solução que precisa com uma empresa que visa a resolução da sua demanda com respeito, escelência e cuidado com o meio ambiente.</h1>
                    <p>A tecnologia não precisa ultrapassar aquilo que é natural, ela anda de mãos dadas e em harmonia com com o meio em que vivemos.</p>
                    <CustomButton text='Saiba mais' size='medium' clickable={true} />
                </div>
                <div className="pictures-container-1">
                    <div className="pictures-1-img1">
                        <img src={img1} alt="Predio de vidro" className="img img1"/>
                    </div>
                    <div className="pictures-1-img2">
                        <img src={img2} alt="Casal andando perto da arvore" className="img img2"/>
                    </div>
                </div>
                <div className="pictures-container-2">
                    <div className="pictures-2-img3">
                        <img src={img3} alt="Mao segura esfera de vidro" className="img img3"/>
                    </div>
                    <div className="pictures-2-img4">
                        <img src={img4} alt="Campo de cataventos" className="img img4"/>
                    </div>
                </div>
            </div>
            <div className="under-line">

            </div>
        </div>

    );
};

export default MainDiv;