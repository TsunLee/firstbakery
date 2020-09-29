import React, { useState } from "react";
import {
  Menubar,
  MenuLink,
  MenuTitle,
  MenuButton,
  MenuLi,
  MenuOl,
  Down,
} from "./Sidebar.element";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Menubar
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuTitle to="/product">門市產品一覽</MenuTitle>
        <MenuButton>
          <Down open={open} />
        </MenuButton>
        <MenuOl open={open}>
          <MenuLi>
            <MenuLink to="/product/bread">美味麵包</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="/product/cake">人氣蛋糕</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="/product/cookie">療癒點心</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="/">特色伴手禮</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="/">點心餐盒</MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink to="/">茶點外匯</MenuLink>
          </MenuLi>
        </MenuOl>
      </Menubar>
    </>
  );
};

export default Sidebar;
