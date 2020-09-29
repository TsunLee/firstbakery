import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  Div,
  ItemTitle,
  ItemImage,
  ItemText,
  Title,
  Card,
  Today,
  Line,
  ButtonDiv,
  Button,
  Bar,
  Footer,
} from "./NewsItem.element";

const NewsItem = (props) => {
  const [Item, setItem] = useState("");

  const Time = new Date().toLocaleString();
  useEffect(() => {
    axios
      .get(
        `hhttps://first-bakery.herokuapp.com/events/${props.match.params.id}`
      )
      .then(function (response) {
        let data = response.data;
        setItem(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Bar>最新情報</Bar>
      <Div>
        <Card>
          <Title>{Item.title}</Title>
          <Today>{Time}</Today>
          <ItemText>{Item.text}</ItemText>
          <ItemImage img={Item.img}>
            <ItemTitle color={Item.color}>{Item.title}</ItemTitle>
          </ItemImage>
          <ButtonDiv>
            <Button to="/product">找麵包！</Button>
            <Button to="/latest">查看活動</Button>
            <Button to="/contact">聯繫我們</Button>
            <Button to="/moon">最新月餅</Button>
          </ButtonDiv>
          <Line />
        </Card>
        <Sidebar />
      </Div>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default NewsItem;
