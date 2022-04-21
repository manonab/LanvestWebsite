import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
display:flex;
flex-direction:row;
margin:auto;
align-items:center;
justify-content:space-around;
background : #000;
position: relative;
top:0;
height: 80px;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index:10;
`
export const OtherLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;
export const NavBarLink = styled(Link)`
    border-radius: 4px;
    background: #d4af37;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    @media screen and (max-width:780px){
    display:none;
    }
`
