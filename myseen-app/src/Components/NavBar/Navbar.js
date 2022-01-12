import React from 'react'

import lanvest from "../Assets/lanvest.png"

import { Bars, NavbarContainer, NavbarWrapper, NavLink, NavMenu, Nav, NavBarLink } from "./Navbar.elements";

const Navbar = () => {
    return (
        <>
            <Nav>
                    <img src={lanvest} style={{width:"200px"}}/>
                    <NavBarLink to="/download" activeStyle>
                        TELECHARGER
                    </NavBarLink>
            </Nav>
        </>
    )
}

export default Navbar;