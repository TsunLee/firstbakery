import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Title,
  Card,
  Image,
  CardTitle,
  CardPrice,
  Line,
  Div,
} from "./Slider.element.js";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#faf6e9" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#faf6e9" }}
      onClick={onClick}
    />
  );
}

const Sliders = ({ bread, cake, cookie }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Line>
        <Title>美味麵包</Title>
        <Slider {...settings}>
          {[...bread].map((breads, index) => (
            <Div>
              <Card>
                <Link
                  to={{
                    pathname: `/product/${breads._id}`,
                  }}
                >
                  <Image src={breads.img} />
                </Link>
                <CardTitle
                  to={{
                    pathname: `/product/${breads._id}`,
                  }}
                >
                  {breads.title}
                </CardTitle>
                <CardPrice>{breads.price}</CardPrice>
              </Card>
            </Div>
          ))}
        </Slider>
      </Line>
      <Line>
        <Title>人氣蛋糕</Title>
        <Slider {...settings}>
          {[...cake].map((cakes, index) => (
            <Div>
              <Card>
                <Link to={{ pathname: `/product/${cakes._id}` }}>
                  <Image src={cakes.img} />
                </Link>
                <CardTitle to={{ pathname: `/product/${cakes._id}` }}>
                  {cakes.title}
                </CardTitle>
                <CardPrice>{cakes.price}</CardPrice>
              </Card>
            </Div>
          ))}
        </Slider>
      </Line>
      <Line>
        <Title>療癒餅乾</Title>
        <Slider {...settings}>
          {[...cookie].map((cookies, index) => (
            <Div>
              <Card>
                <Link
                  to={{
                    pathname: `/product/${cookies._id}`,
                  }}
                >
                  <Image src={cookies.img} />
                </Link>
                <CardTitle
                  to={{
                    pathname: `/product/${cookies._id}`,
                  }}
                >
                  {cookies.title}
                </CardTitle>
                <CardPrice>{cookies.price}</CardPrice>
              </Card>
            </Div>
          ))}
        </Slider>
      </Line>
    </>
  );
};

export default Sliders;
