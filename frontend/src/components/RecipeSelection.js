import React from "react";

const RecipeSelection = props => {
  return (
    <div>
      <h2 className="text-center amiko">
        Check out Our Recipes with the Sauce
      </h2>
      <div className="d-flex justify-content-between w-60 mx-auto">
        <button className="mala-button">Vegetarian</button>
        <button className="mala-button active-button">Classic</button>
        <button className="mala-button">Omnivore</button>
      </div>
    </div>
  );
};

export default RecipeSelection;
