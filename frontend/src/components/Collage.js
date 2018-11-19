import React from "react";

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

const CollageElement = props => {
  return (
    <li
      className="position-relative h-50 collage__element"
      key={props.index}
      style={{ width: props.width }}
    >
      <img className="w-100 h-100 collage__element-image" src={props.imgSrc} />
      <div className="position-absolute text-center w-100 z-1 absolute-centered text-white collage__element-text">
        {props.text}
      </div>
    </li>
  );
};

const Collage = props => {
  return (
    <div className="w-75 h-70 mx-auto collage">
      <ul className="list-unstyled d-flex flex-wrap align-items-start collage__list">
        {collageItems.map((item, index) => (
          <CollageElement {...item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Collage;
