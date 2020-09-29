import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  padding: 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: white;
  @media screen and (max-width: 741px) {
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;
  }
`;

export const Logo = styled(Link)``;

export const Logopic = styled.img`
  height: 70px;
`;
export const Logoheader = styled.img`
  height: 70px;
`;

export const Collection = styled.div`
  display: flex;
`;

export const LinkHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0;
  :hover {
    color: dodgerblue;
    transition: all 0.5s ease;
    font-weight: bold;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: black;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5vw;
    margin-right: 15px;
    margin-left: 15px;
  }
  @media screen and (max-width: 470px) {
    font-size: 2vw;
    margin-right: 6px;
    margin-left: 6px;
  }
  @media screen and (max-width: 370px) {
    font-size: 2.5vw;
    margin-right: 4px;
    margin-left: 4px;
  }
`;
