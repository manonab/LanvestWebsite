import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const HomeContainer = styled.div`
position:relative;
height:auto;
background:#053F8D;
padding:15px;
`

export const HomeLink = styled(Link)`
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
    display:flex;
    justify-content:center;
    position:relative;
}
`
export const HomeText = styled.h1`
font-size:50px;
text-align:center;
margin-top:2.2em;
margin-bottom:2.2em;
color:#fff;
@media screen and (max-width:780px){
    font-size:30px;
}
`
export const HomeWrapper = styled.div`
align-items:center;
text-align:center;
`
export const HomeLinkMenu = styled.div`
display:flex;
justify-content:center;
position:relative;
margin-bottom:4em;
margin-top:3em;
height:auto;
padding-bottom:0;

`
export const HomeContent = styled.div`
margin-top:2em;
margin-bottom:5em;
color:#fff;
letter-spacing:0.1em;
text-align:center;
line-height:35px;
`

export const HomeContext = styled.p`
@media screen and (max-width:780px){
    font-size:14px;
}
`

export const ImageContent = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
flex-wrap:no-wrap;
background-color:#017c89;
border-radius:20px;
padding:1em;
width:100%;
height:600px;

@media screen and (max-width:1500px){
    flex-direction:row;
    flex-wrap: wrap;
    width:100%;
    height:auto;
    justify-content:center;
}
`
export const ImageItem = styled.span`
padding:15px;
`
