import React from "react";
import Pic from "./logo.png";
import Pic1 from "./logo1.png";
import {
  Navbar,
  Collection,
  LinkHeader,
  NavLink,
  Logo,
  Logopic,
  Logoheader,
} from "./Navbar.element";

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">
        <Logopic src={Pic} />
        <Logoheader src={Pic1} />
      </Logo>
      <Collection>
        <NavLink to="/">
          <LinkHeader>首頁</LinkHeader>
        </NavLink>
        <NavLink to="/latest">
          <LinkHeader>最新消息</LinkHeader>
        </NavLink>
        <NavLink to="/product">
          <LinkHeader>產品一覽</LinkHeader>
        </NavLink>
        <NavLink to="/contact">
          <LinkHeader>聯絡我們</LinkHeader>
        </NavLink>
        <NavLink to="/moon">
          <LinkHeader>2020中秋月餅專區</LinkHeader>
        </NavLink>
      </Collection>
    </Navbar>
  );
};

export default Header;
