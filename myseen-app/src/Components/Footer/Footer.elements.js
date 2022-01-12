import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const FooterContainer = styled.div`
background : #000;
height: 80px;
padding: 1rem calc((100vw - 1000px) /2);
z-index: 10;
margin-top: auto;
color:#fff;
position:absolute;
width:100%;
`

export const FooterItem = styled.div`
`

export const FootList = styled.ul`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
list-style: none;

@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    align-items:center;
}
`
export const FootListItem = styled.li`
padding:6px;
`