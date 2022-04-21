import React from 'react'

import lanvest from "../Assets/lanvest.png"

import { Bars, NavbarContainer, NavbarWrapper, NavLink, OtherLink, Nav, NavBarLink } from "./Navbar.elements";

const Navbar = () => {
    return (
            <Nav>
                <OtherLink to={"/"}>
                    <img src={lanvest} style={{width:"200px"}}/>
                </OtherLink>
                    <NavBarLink to="/download" activeStyle>
                        TELECHARGER
                    </NavBarLink>
            </Nav>
    )
}

export default Navbar;
