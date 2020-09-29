import styled from "styled-components";
import { Link } from "react-router-dom";

import { ChevronCompactDown } from "@styled-icons/bootstrap/ChevronCompactDown";

export const Menubar = styled.div`
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  width: 18%;
  height: 100%;
  padding-top: 10px;
  @media screen and (max-width: 990px) {
    width: 70%;
    margin: auto;
    background: #f9f9f9;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    margin: auto;
  }
  @media screen and (max-width: 550px) {
    width: 85%;
    margin: auto;
  }
`;

export const MenuOl = styled.ol`
  padding: 1vw 1vw 0 1vw;
  font-size: 14px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const MenuLi = styled.li`
  list-style-type: none;
  padding: 10px 0 10px 23%;
  border-top: 1px solid #c5c5c5;
  @media screen and (max-width: 990px) {
    padding: 7px 0 7px 8%;
  }
`;

export const MenuTitle = styled(Link)`
  text-decoration: none;
  padding-left: 17%;
  padding-right: 3vw;
  font-weight: 500;
  font-size: 16px;
  color: #d49e6a;
  @media screen and (max-width: 1072px) {
    padding-right: 2vw;
  }
  @media screen and (max-width: 990px) {
    padding: 0 51vw 0 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 60vw 0 20px;
  }
  @media screen and (max-width: 740px) {
    padding: 0 58vw 0 20px;
  }
  @media screen and (max-width: 673px) {
    padding: 0 56vw 0 20px;
  }
  @media screen and (max-width: 620px) {
    padding: 0 54vw 0 20px;
  }
  @media screen and (max-width: 570px) {
    padding: 0 52vw 0 20px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 55vw 0 20px;
  }
`;

export const Down = styled(ChevronCompactDown)`
  color: #b8b0b0;
  width: 20px;
  transform: rotate(${(props) => (props.open ? "0deg" : "180deg")});
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  outline-style: none;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #a3a3a3;
  :hover {
    color: #ff9a00;
    padding-left: 12%;
    transition: ease 0.5s;
  }
  @media screen and (max-width: 990px) {
    :hover {
      padding-left: 16px;
    }
  }
`;
