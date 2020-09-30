import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-image:url("https://images.unsplash.com/photo-1547104442-044448b73426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center}
  ;`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  grid-gap: 1vw;
  @media screen and (max-width: 990px) {
    display: block;
  }
  @media screen and (max-width: 741px) {
    margin-top: 4vw;
  }
`;

export const Menu = styled.div`
  padding: 30px;
  width: 60%;
  @media screen and (max-width: 990px) {
    width: 70%;
    margin: auto;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    margin: auto;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
    margin: auto;
  }
`;

export const Bar = styled.div`
  height: 6vw;
  background: #df7861;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: #ecdfc8;
  font-weight: 400;
  margin-bottom: 3vw;
  text-shadow: 1px 1px 5px #87431d;
  @media screen and (max-width: 740px) {
    margin-top: 3vw;
  }
`;
export const Footer = styled.div`
  height: 6vw;
  background: #43658b;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2vw;
`;
