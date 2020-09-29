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
} from "./Cookie.element";

const Bread = () => {
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/cookies")
      .then(function (response) {
        let data = response.data;
        setCookie(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Bar>療癒點心</Bar>
      <Div>
        <GlobalStyle />
        {[...cookie].map((cookies, index) => (
          <Card id={cookies._id} key={cookies._id}>
            <CardPic img={cookies.img}></CardPic>
            <CardTitle
              to={{
                pathname: `/product/${cookies._id}`,
                category: "cookies",
              }}
              id={cookies._id}
            >
              {cookies.title}
            </CardTitle>
            <CardText>{cookies.text}</CardText>
            <Button
              id={cookies._id}
              to={{
                pathname: `/product/${cookies._id}`,
                category: "cookies",
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
