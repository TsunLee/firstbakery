import React from "react";
import {
  Div,
  Card,
  SidebarTitle,
  SidebarLink,
  SidebarText,
  NewItem,
  GlobalStyle,
} from "./Sidebar.element";

const Sidebar = () => {
  return (
    <Div>
      <GlobalStyle />
      <Card>
        <SidebarTitle>所有文章主題</SidebarTitle>
        <SidebarLink to="/latest">美味專欄</SidebarLink>
        <SidebarLink to="/latest">最新動態</SidebarLink>
      </Card>
      <Card>
        <SidebarTitle>最新動態</SidebarTitle>
        <SidebarText>在月亮最圓的日子舉杯邀月 共祝月圓人圓</SidebarText>
        <SidebarText>
          在此中秋佳節來臨之際，願你心情如秋高氣爽！笑臉如鮮花常開！願望個個如願，中秋快樂！
        </SidebarText>
      </Card>
      <Card>
        <SidebarTitle>新品上市</SidebarTitle>
        <ol>
          <li>
            <NewItem to="/">皇家小吐司</NewItem>
          </li>
          <li>
            <NewItem to="/">小牛角</NewItem>
          </li>
          <li>
            <NewItem to="/">草莓大福</NewItem>
          </li>
        </ol>
      </Card>
    </Div>
  );
};

export default Sidebar;
