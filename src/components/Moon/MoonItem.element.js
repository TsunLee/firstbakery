import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-image:url("https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60");
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
    
}`;

export const Container = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
`;

export const Image = styled.img`
  height: 35vw;
  border-radius: 999rem;
`;

export const Div = styled.div`
  font-size: 4vw;
  margin-left: 3vw;
  margin-top: 1vw;
`;

export const Title = styled.div`
  text-shadow: 1px 1px 1px #2d4059;
`;

export const TitleText = styled.div`
  font-size: 1.5vw;
  color: #cf1b1b;
`;

export const Price = styled.div`
  font-size: 1.5vw;
  margin-top: 4vw;
  margin-left: 2vw;
`;

export const ItemPrice = styled.div`
  font-size: 2.5vw;
  margin-top: 0.5vw;
  color: #d49e6a;
  text-shadow: 0.5px 0.5px 0.5px #edb177;
  font-family: "Dancing Script", cursive;
  @media screen and (max-width: 640px) {
    margin-bottom: 4vw;
  }
`;

export const ItemText = styled.div`
  width: 80%;
  font-size: 1.5vw;
  margin-top: 3vw;
  margin-left: 2vw;
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
  margin-bottom: 8vw;
  text-shadow: 1px 1px 5px #87431d;
  @media screen and (max-width: 740px) {
    margin-top: 3vw;
  }
`;
export const Footer = styled.div`
  height: 6vw;
  background: #43658b;
  margin-top: 10vw;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2vw;
`;
