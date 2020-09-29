import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.div`
  height: 50vw;
  background-image: url("https://images.unsplash.com/photo-1535536609565-9675cafeff32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 3vw;
  font-size: 2.5vw;
  color: white;
  font-size: 4vw;
  font-weight: 400;
  text-shadow: 1px 1px 3px #fafcc2;
  width: 90%;
  margin: 0 auto 5vw auto;

  @media screen and (max-width: 740px) {
    margin-top: 3vw;
  }
`;

export const Links = styled(Link)``;

export const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 2vw;
`;

export const Items = styled.div`
  margin-left: 1.5vw;
  margin-right: 1.5vw;
`;

export const ItemPic = styled.img`
  width: 100%;
`;

export const ItemName = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
  text-decoration: none;
  color: #838383;
  font-weight: 400;
  :hover {
    color: #cf7500;
    transform: scale(1.1);
  }
`;
export const ItemPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: 300;
  text-decoration: none;
  color: #838383;
  font-weight: 400;
  font-family: "Dancing Script", cursive;
`;

export const Footer = styled.div`
  height: 6vw;
  background: #43658b;
  border-top: 1px solid #133b5c;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2vw;
`;
