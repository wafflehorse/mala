import React from "react";
import Collage from "./Collage";
import RecipeSelection from "./RecipeSelection";

const Home = props => {
  return (
    <div>
      <Collage />
      <h2 className="text-center">
        All the Above Come Together to Make Mala Sauce
      </h2>
      <p>
        Use the sauce to make authentic, yummy Sichuan dish. It is like Pasta
        sauce for Italian cuisine, essential, hearty and delicious.
      </p>
      <RecipeSelection />
    </div>
  );
};

export default Home;
