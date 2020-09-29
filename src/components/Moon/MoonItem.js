import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  GlobalStyle,
  Image,
  Title,
  Price,
  ItemPrice,
  ItemText,
  TitleText,
  Bar,
  Div,
  Footer,
} from "./MoonItem.element";

const MoonItem = (props) => {
  const [Item, setItem] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/moons/${props.match.params.id}`)
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
      <GlobalStyle />
      <Bar>2020最新月餅</Bar>
      <Container>
        <Image src={Item.img} />
        <Div>
          <TitleText>門市限定！！ 每日熱銷中</TitleText>
          <Title>{Item.title}</Title>
          <ItemText>{Item.text}</ItemText>
          <Price>
            建議售價
            <ItemPrice>{Item.price}</ItemPrice>
          </Price>
        </Div>
      </Container>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default MoonItem;
