import React from "react";
import Hero from "./Hero/Hero";
import {
  Items,
  ItemDiv,
  ItemName,
  ItemPic,
  Title,
  Main,
  Contact,
  ContactDiv,
  ContactTitle,
  ContactNumber,
  ContactAddress,
  Intro,
  IntroTitle,
  IntroText,
  Footer,
} from "./Home.element";

const Home = () => {
  const item = [
    {
      pic:
        "https://images.unsplash.com/photo-1591204959490-40014e09bb46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      name: "杯子蛋糕",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1583127667348-22da6d3165b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      name: "圓麵包",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1501721358449-1505ca840822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      name: "楓糖可頌",
    },
  ];
  return (
    <Main>
      <Hero />
      <Title>本店招牌</Title>
      <ItemDiv>
        {item.map((item, index) => (
          <Items>
            <ItemPic src={item.pic} key={index} />
            <ItemName key={item.name}>{item.name}</ItemName>
          </Items>
        ))}
      </ItemDiv>
      <Contact>
        <ContactDiv>
          <ContactTitle>來電預定</ContactTitle>
          <ContactNumber>電話/07-333-9999</ContactNumber>
          <ContactNumber>傳真/07-344-7799</ContactNumber>
        </ContactDiv>
        <ContactDiv>
          <ContactTitle>營業時間</ContactTitle>
          <ContactAddress>週一～週日：10:00 - 22:00</ContactAddress>
          <ContactAddress>
            臺北市內湖區科雅六街七段101巷122弄12號
          </ContactAddress>
        </ContactDiv>
      </Contact>
      <Intro>
        <IntroTitle>Japon的企業精神只給予你最優質的麵包</IntroTitle>
        <IntroText>
          呷PON以代表「健康」，「天然」，「環保」且具有「浪漫愛情」意象的小瓢蟲作為企業吉祥物代表，代表著「JAPON點心坊」
        </IntroText>
        <IntroText>
          以「愛」為出發，用心，謹慎製作每一份烘焙產品，傳達幸福意念。「愛情與麵包」不可得兼？!
        </IntroText>
      </Intro>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </Main>
  );
};

export default Home;
