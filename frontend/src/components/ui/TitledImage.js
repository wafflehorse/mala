import React from "react";

const TitledImage = props => {
  return (
    <div
      className="d-inline-block position-relative"
      style={{ width: props.width, height: props.height }}
    >
      <img
        className="w-100 h-100 collage__element-image"
        src={props.imgSrc}
        alt={""}
      />
      <div className="position-absolute text-center w-100 z-1 absolute-centered font-weight-bold text-white josefin-sans collage__element-text">
        {props.text}
      </div>
    </div>
  );
};

export default TitledImage;
