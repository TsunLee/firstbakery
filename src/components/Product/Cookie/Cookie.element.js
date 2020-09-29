import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{

    background-image:url("https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60")
}`;

export const Bar = styled.div`
  height: 6vw;
  background: #df7861;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: #ecdfc8;
  text-shadow: 1px 1px 5px #87431d;
  font-weight: 400;
  @media screen and (max-width: 740px) {
    margin-top: 3vw;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  margin: 2vw 8vw 0 8vw;
`;

export const Card = styled.div`
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  margin: 10px 10px;
  box-shadow: 1px 1px 15px #dbcbbd;
`;

export const CardPic = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 80px 0;
  opacity: 0.9;
  border-radius: 5px;
  font-weight: 500;
`;

export const CardTitle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 24px;
  font-weight: 400;
  border-radius: 999em;
  height: 100%;
  text-decoration: none;
  margin-top: 2vw;
  text-shadow: 1px 1px 3px #dbcbbd;
  :hover {
    cursor: pointer;
    margin-right: 4vw;
    margin-left: 4vw;
    transform: scale(1.1);
  }
`;

export const CardText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  width: auto;
  font-size: 14px;
  padding: 10px 15px 0 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Button = styled(Link)`
  border: none;
  outline: none;
  margin: 20px 0 0 15px;
  text-decoration: none;
  color: black;
  font-size: 13px;
  display: block;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
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
