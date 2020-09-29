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
} from "./New.element";

const New = () => {
  const [Latest, setLatest] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then(function (response) {
        let data = response.data;
        setLatest(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Bar>最新消息</Bar>
      <Div>
        <GlobalStyle />
        {[...Latest].map((latest, index) => (
          <Card id={latest._id} key={latest._id}>
            <CardPic img={latest.img}>
              <CardTitle
                id={latest._id}
                to={{
                  pathname: `/latest/${latest._id}`,
                }}
                color={latest.color}
              >
                {latest.title}
              </CardTitle>
            </CardPic>
            <CardText>{latest.text}</CardText>
            <Button id={latest._id} to={{ pathname: `/latest/${latest._id}` }}>
              READ MORE {`->`}
            </Button>
          </Card>
        ))}
      </Div>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default New;
