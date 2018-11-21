import React from "react";
import TitledImage from "./ui/TitledImage";

import imgChiliPepper from "../assets/img/chili-pepper.png";
import imgFermentedBeanPaste from "../assets/img/fermented-bean-paste.png";
import imgSichuanPeppercorn from "../assets/img/sichuan-peppercorn.png";
import imgFermentedBlackBeans from "../assets/img/fermented-black-beans.png";
import imgGarlic from "../assets/img/garlic.png";
import imgSpringOnion from "../assets/img/spring-onion.png";

const collageItems = [
  {
    text: "chili pepper",
    imgSrc: imgChiliPepper,
    width: "49%"
  },
  {
    text: "fermented bean paste",
    imgSrc: imgFermentedBeanPaste,
    width: "49%"
  },
  {
    text: "sichuan peppercorn",
    imgSrc: imgSichuanPeppercorn,
    width: "36.5%"
  },
  {
    text: "fermented black beans",
    imgSrc: imgFermentedBlackBeans,
    width: "23.8%"
  },
  {
    text: "garlic",
    imgSrc: imgGarlic,
    width: "11.1%"
  },
  {
    text: "spring onion",
    imgSrc: imgSpringOnion,
    width: "23.4%"
  }
];

const CollageElements = () => {
  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-between align-items-start collage__list">
      {collageItems.map((item, index) => (
        <TitledImage key={index} {...item} height={"50%"} />
      ))}
    </ul>
  );
};

const Collage = props => {
  return (
    <div className="w-75 h-70 mb-5 mx-auto collage">
      <CollageElements />
    </div>
  );
};

export default Collage;
