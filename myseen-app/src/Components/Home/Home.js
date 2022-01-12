import React from 'react';
import './Home.css';
import { HomeContainer, HomeLink, HomeText, HomeWrapper,HomeLinkMenu, HomeContent, HomeContext, ImageItem, ImageContent} from "./Home.elements";
import Typical from 'react-typical';

import logo from "../Assets/myseenlogo.png";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";

import video from "../Assets/video.mp4";

function Home() {
    return (
        <>
            <HomeContainer>
                <div className="image-logo-div">
                <img src={logo} className="image-logo" />
                </div>
                <HomeWrapper>
                <HomeText>Je veux
                    <span className="typed-text">
                    <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        'gérer mes employés',
                        1500,
                        'gérer les plannings',
                        1500,
                        "My S.E.E.N",
                        1500
                    ]}/>
                </span>
                </HomeText>
                </HomeWrapper>
                <HomeContent>
                    <HomeContext>Optimiser la gestion de votre entreprise avec la nouvelle application interactive par Lanvest </HomeContext>
                    <HomeContext>My S.E.E.N . Création et réception de plannings et de fiches d’heure en direct, elle permet </HomeContext>
                    <HomeContext>une communication rapide entre employeurs et employés. Un double système de</HomeContext>
                    <HomeContext>messagerie fluide et ergonomique pour des échanges facilités. </HomeContext>
                    <br></br>
                    <HomeContext>My S.E.E.N permet également à l’employeur de créer plus profils d’employés (manager, chef </HomeContext>
                    <HomeContext>de chantier et employé) avec des fonctionnalités personnalisées. </HomeContext>
                    <br></br>
                    <HomeContext><b>L’application est disponible sur l’apple store et sur play store.</b></HomeContext>
                </HomeContent>

                <ImageContent>
                    <ImageItem><video src={video} playsInline muted autoPlay="true" loop="true" style={{width:"250px"}}/></ImageItem>
                <ImageItem><img src={img1} style={{width:"200px"}}/></ImageItem>
                    <ImageItem> <img src={img2} style={{width:"200px"}}/></ImageItem>
                    <ImageItem> <img src={img3} style={{width:"200px"}}/></ImageItem>
                    <ImageItem> <img src={img4} style={{width:"200px"}}/></ImageItem>
                    <ImageItem> <img src={img5} style={{width:"200px"}}/></ImageItem>
                </ImageContent>
                <HomeLinkMenu>
                    <HomeLink to="/download" activeStyle>
                        TELECHARGER
                    </HomeLink>
                </HomeLinkMenu>
            </HomeContainer>
        </>
    )
}

export default Home
