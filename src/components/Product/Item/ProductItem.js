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
} from "./ProductItem.element";

const ProductItem = (props) => {
  const [Item, setItem] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://bakery-data.herokuapp.com/products/${props.match.params.id}`
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
      <GlobalStyle />
      <Bar>每日現烤</Bar>
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

export default ProductItem;
