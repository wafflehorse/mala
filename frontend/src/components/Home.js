import React from "react";
import Collage from "./Collage";
import RecipeSelection from "./RecipeSelection";

const Home = props => {
  return (
    <div>
      <Collage />
      <h2 className="text-center amiko font-weight-bold">
        All the Above Come Together to Make
        <br />
        Mala Sauce
      </h2>
      <p className="text-center amiko">
        Use the sauce to make an authentic, yummy Sichuan dish.
        <br /> It is like Pasta sauce for Italian cuisine,
        <br /> essential, hearty and delicious.
      </p>
      <RecipeSelection />
    </div>
  );
};

export default Home;
