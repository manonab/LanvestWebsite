import React from "react";
import {HomeContainer, HomeContent, ContactWrapper,ListContact} from "../Home/Home.elements";


function Contact(){
    return(
        <HomeContainer>
            <HomeContent>
                <h1>Si vous avez des questions:</h1>
                <ContactWrapper>
                    <ul style={{
                        listStyle:"none"
                    }}>
                        <ListContact>Au sujet du développement mobile ou web : abelcoindozm@gmail.com</ListContact>
                        <ListContact>Au sujet de l'application : contact@lanvest.fr</ListContact>
                    </ul>
                </ContactWrapper>
            </HomeContent>
        </HomeContainer>
    );
};

export default Contact;
