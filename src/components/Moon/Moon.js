import React, { useState, useEffect } from "react";
import {
  Bar,
  Footer,
  ItemDiv,
  ItemName,
  ItemPic,
  ItemPrice,
  Items,
  Links,
} from "./Moon.element";
import axios from "axios";

const Moon = () => {
  const [moonCake, setMoonCake] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/moons")
      .then(function (response) {
        let data = response.data;
        setMoonCake(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <Bar>2020月餅專區</Bar>
      <ItemDiv>
        {[...moonCake].map((moonCake, index) => (
          <Items>
            <Links to={`/moon/${moonCake._id}`}>
              <ItemPic src={moonCake.img} key={index} />
            </Links>
            <ItemName to={`/moon/${moonCake._id}`} key={moonCake.title}>
              {moonCake.title}
            </ItemName>
            <ItemPrice>{moonCake.price}</ItemPrice>
          </Items>
        ))}
      </ItemDiv>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default Moon;
