import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{
    background:linear-gradient(white 10%,#f0ece3 100%);
    color: #393e46;
}`;

export const Div = styled.div`
  background: white;
  margin: 10px;
  width: 25%;
  display: flex;
  flex-direction: column;
  grid-gap: 2vw;
  background: linear-gradient(white -20%, #f0ece3 100%);
  @media screen and (max-width: 960px) {
    width: 79%;
    margin: 0 auto 3vw auto;
    background: linear-gradient(white -130%, #f0ece3 100%);
  }
  @media screen and (max-width: 760px) {
    width: 80%;
  }
  @media screen and (max-width: 630px) {
    width: 81%;
  }
  @media screen and (max-width: 530px) {
    width: 82%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-gap: 1vw;
  background: white;
  border: 1px solid rgba(241, 241, 241, 0.6);
  padding-bottom: 1vw;
`;

export const SidebarTitle = styled.div`
  font-size: 2vw;
  margin: 1vw 2vw;
  padding-bottom: 1vw;
  border-bottom: 1px solid #c9d6df;
`;

export const SidebarLink = styled(Link)`
  font-size: 1.5vw;
  text-decoration: none;
  margin-left: 4vw;
  color: #52616b;
  padding-bottom: 1vw;
`;

export const SidebarText = styled.div`
  font-size: 1vw;
  margin: 0 2vw;
  padding: 0 10px;
  text-decoration: none;
  color: #52616b;
  padding-bottom: 10px;
`;

export const NewItem = styled(Link)`
  font-size: 1.5vw;
  text-decoration: none;
  color: #52616b;
`;
