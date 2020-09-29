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
} from "./Bread.element";

const Bread = () => {
  const [bread, setBread] = useState("");

  useEffect(() => {
    axios
      .get("https://first-bakery.herokuapp.com/products/breads")
      .then(function (response) {
        let data = response.data;
        setBread(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Bar>美味麵包</Bar>
      <Div>
        <GlobalStyle />
        {[...bread].map((breads, index) => (
          <Card id={breads._id} key={breads._id}>
            <CardPic img={breads.img}></CardPic>
            <CardTitle
              to={{
                pathname: `/product/${breads._id}`,
              }}
              id={breads._id}
            >
              {breads.title}
            </CardTitle>
            <CardText>{breads.text}</CardText>
            <Button
              id={breads._id}
              to={{
                pathname: `/product/${breads._id}`,
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
