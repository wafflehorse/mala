import React from "react";

import TitledImage from "./ui/TitledImage";

import imgMalaFishFillet from "../assets/img/mala-fish-fillet.png";
import imgMapoTofu from "../assets/img/mapo-tofu.png";

const imageDimensions = {
  width: "446px",
  height: "336px"
};

const RecipeSelection = props => {
  return (
    <div className="mx-auto" style={{ maxWidth: "1440px" }}>
      <h2 className="text-center amiko mb-3">
        Check out Our Recipes with the Sauce
      </h2>
      <div className="d-flex justify-content-between w-60 mx-auto mb-4">
        <button className="recipe-button">Vegetarian</button>
        <button className="recipe-button active-recipe-button">Classic</button>
        <button className="recipe-button">Omnivore</button>
      </div>
      <div
        className="d-flex mx-auto justify-content-between mb-5"
        style={{ width: "900px" }}
      >
        <TitledImage
          {...imageDimensions}
          text={"Mala Fish Fillet"}
          imgSrc={imgMalaFishFillet}
        />
        <TitledImage
          {...imageDimensions}
          text={"Mapo Tofu"}
          imgSrc={imgMapoTofu}
        />
      </div>
    </div>
  );
};

export default RecipeSelection;
