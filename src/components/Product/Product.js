import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Container, Menu, Bar, Footer } from "./Product.element";
import Sliders from "./Slider/Slider";

const Product = () => {
  const [bread, setBread] = useState("");
  const [cake, setCake] = useState("");
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    axios
      .get("https://bakery-data.herokuapp.com/products/breads")
      .then(function (response) {
        let data = response.data;
        setBread(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    axios
      .get("https://bakery-data.herokuapp.com/products/cakes")
      .then(function (response) {
        let data = response.data;
        setCake(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    axios
      .get("https://bakery-data.herokuapp.com/products/cookies")
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
      <Bar>精選麵包</Bar>
      <Container>
        <Sidebar />
        <Menu>
          <Sliders bread={bread} cake={cake} cookie={cookie} />
        </Menu>
      </Container>
      <Footer>奇怪烘焙坊版權所有 © 2020 strange All Rights Reserved.</Footer>
    </>
  );
};

export default Product;
