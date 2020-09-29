import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  margin: 0 0 25px 7px;
  border-left: 3px solid #d49e6a;
  padding-left: 5px;
`;

export const Div = styled.div`
  :focus {
    outline-style: none;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #c5c5c5;
  margin: 0 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
  margin-bottom: 10px;
  :hover {
    opacity: 0.7;
  }
`;

export const CardTitle = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  text-shadow: 1px 1px 2px #d6e0f0;

  :hover {
    margin-left: 20px;
    transition: ease-in 0.2s;
  }
`;

export const CardPrice = styled.h3`
  color: #d49e6a;
  font-weight: 500;
  margin: 3vw 0 1vw 10px;
  padding: auto;
  text-shadow: 0.5px 0.5px 0.5px #edb177;
`;

export const Line = styled.div`
  margin-bottom: 7vw;
`;
