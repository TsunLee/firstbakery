import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  margin: auto;
  max-width: 960px;
  @media screen and (max-width: 960px) {
    display: grid;
  }
`;

export const Card = styled.div`
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  background: white;
  margin: 10px;
  height: auto;
  width: 75%;
  border: 1px solid rgba(241, 241, 241, 0.6);
  @media screen and (max-width: 960px) {
    margin: 2vw auto;
  }
`;

export const Title = styled.div`
  font-size: 4vw;
  margin: 1vw 0 0 2vw;
  border-left: 3px solid #15b7b9;
  padding-left: 1vw;
`;

export const Today = styled.div`
  margin: 0 0 2vw 4vw;
`;

export const ItemTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: 4vw;
  font-weight: 400;
  border-radius: 999em;
  height: 100%;
  text-decoration: none;
  text-shadow: 0.1em 0.1em 0.2em #5f6769;
`;

export const ItemImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 14vw 0;
  margin: 0 4vw;
  height: auto;
  opacity: 0.9;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 10vw;
`;
export const ItemText = styled.div`
  white-space: normal;
  width: auto;
  padding: 2vw 7vw;
`;

export const Line = styled.div`
  border-top: 1px solid #c9d6df;
  margin: 1vw 0 0 3vw;
  width: 90%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-left: 3vw;
`;

export const Button = styled(Link)`
  font-size: 1.5vw;
  margin: 2vw 0 1vw 1vw;
  color: #649dad;
  border: 1.5px solid #66c6ba;
  background: white;
  border-radius: 999em;
  outline: none;
  padding: 1px 1.5vw;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: white;
    background: #66c6ba;
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
  margin-top: 7vw;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2vw;
`;
