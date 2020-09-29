import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GlobalStyle,
  Bar,
  Div,
  Card,
  CardPic,
  CardTitle,
  CardText,
  Button,
  Footer,
} from "./Cake.element";

const Bread = () => {
  const [cake, setCake] = useState("");

  useEffect(() => {
    axios
      .get("https://first-bakery.herokuapp.com/cakes")
      .then(function (response) {
        let data = response.data;
        setCake(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Bar>人氣蛋糕</Bar>
      <Div>
        <GlobalStyle />
        {[...cake].map((cakes, index) => (
          <Card id={cakes._id} key={cakes._id}>
            <CardPic img={cakes.img}></CardPic>
            <CardTitle
              to={{
                pathname: `/product/${cakes._id}`,
                category: "cakes",
              }}
              id={cakes._id}
            >
              {cakes.title}
            </CardTitle>
            <CardText>{cakes.text}</CardText>
            <Button
              id={cakes._id}
              to={{
                pathname: `/product/${cakes._id}`,
                category: "cakes",
              }}
            >
              READ MORE {`->`}
            </Button>
          </Card>
        ))}
      </Div>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default Bread;
