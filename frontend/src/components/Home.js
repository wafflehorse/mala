import React from 'react';
import Collage from './Collage';
import RecipeSelection from './RecipeSelection';
import Facts from './Facts';
import Subscribe from './Subscribe';

import preorderArrow from '../assets/img/preorder-arrow.svg';

const Preorder = () => {
  return (
    <div
      className="d-flex justify-content-between mx-auto mb-5"
      style={{paddingLeft: '27px', width: '230px'}}>
      <div className="d-inline" style={{width: '183px'}}>
        <button className="preorder-button amiko d-block mb-2">
          Pre-order
        </button>
        <a href="#" className="amiko black">
          or get free samples
        </a>
      </div>
      <img src={preorderArrow} alt="" style={{marginLeft: '10px'}} />
    </div>
  );
};

const Home = props => {
  return (
    <div>
      <Collage />
      <h2 className="text-center mb-3 amiko">
        All the Above Come Together to Make
        <br />
        Mala Sauce
      </h2>
      <p className="text-center amiko mb-5">
        Use the sauce to make an authentic, yummy Sichuan dish.
        <br /> It is like Pasta sauce for Italian cuisine,
        <br /> essential, hearty and delicious.
      </p>
      <RecipeSelection />
      <Facts />
      <Preorder />
      <Subscribe />
    </div>
  );
};

export default Home;
