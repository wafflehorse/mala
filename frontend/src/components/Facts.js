import React from "react";

import svgFactsPepperPlate from "../assets/img/facts_pepper-plate.svg";
import svgFactsChef from "../assets/img/facts_chef.svg";
import svgChopsticks from "../assets/img/facts_chopsticks.svg";

const Fact = props => {
  return (
    <div style={{ width: "300px" }}>
      <img
        className="mx-auto d-block mb-3"
        src={props.imgSrc}
        style={{ width: "114px", height: "114px" }}
        alt=""
      />
      <h5 className="amiko font-weight-bold text-center mb-3">{props.fact}</h5>
      <p className="amiko text-center">{props.description}</p>
    </div>
  );
};

const Facts = () => {
  return (
    <div className="mb-5 mx-auto" style={{ maxWidth: "1440px" }}>
      <h2 className="text-center amiko mb-5">
        Spicy and Yummy, Ready in Spring 2019
      </h2>
      <div className="d-flex justify-content-between w-80 mx-auto">
        <Fact
          imgSrc={svgFactsPepperPlate}
          fact="1 Jar = 1 Serving"
          description="Easy to cook with, and no worries 
for the sauce getting stale."
        />
        <Fact
          imgSrc={svgFactsChef}
          fact="Made Freshly and Locally"
          description="We make everything in California, and ship the sauce fresh off the batch."
        />
        <Fact
          imgSrc={svgChopsticks}
          fact="Authentic & Good"
          description="We compared tested over 15 recipes and got the best one. "
        />
      </div>
    </div>
  );
};

export default Facts;
