import React from 'react'

import {FooterContainer, FooterItem, FootList, FootListItem}  from "./Footer.elements"

function Footer() {
    return (
        <>
        <FooterContainer>
            <FooterItem>
            <FootList>
                <FootListItem>contact@lanvest.fr</FootListItem>
                <FootListItem>Lanvest @ 2021</FootListItem>
            </FootList>
            </FooterItem>
        </FooterContainer> 
        </>
    )
}

export default Footer;
