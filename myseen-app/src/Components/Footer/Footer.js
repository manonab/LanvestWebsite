import React from 'react'

import {FooterContainer, FooterItem, FooterLink, FootList, FootListItem} from "./Footer.elements"

function Footer() {
    return (
        <>
        <FooterContainer>
            <FooterItem>
            <FootList>
                <FootListItem>contact@lanvest.fr</FootListItem>
                <FooterLink to="/legacy">Engagement de confidentialité</FooterLink>
                <FootListItem>Lanvest @ 2022</FootListItem>
            </FootList>
            </FooterItem>
        </FooterContainer>
        </>
    )
}

export default Footer;
