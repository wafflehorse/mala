import React from "react";

const Selector = props => {
  return <button>Vegetarian</button>;
};

const RecipeSelection = props => {
  return (
    <div>
      <h2>Check out Our Recipes with the Sauce</h2>
      <button>Vegetarian</button>
      <button>Classic</button>
      <button>Omnivore</button>
    </div>
  );
};

export default RecipeSelection;
