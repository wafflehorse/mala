import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Page from "./Page";
import Home from "./Home";

const Sauce = props => {
  return <h1>Sauce</h1>;
};

const Recipes = props => {
  return <h1>Recipes</h1>;
};

const Newsletter = props => {
  return <h1>Newsletter</h1>;
};

class App extends Component {
  render = () => (
    <div>
      <BrowserRouter>
        <Page>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/sauce" component={Sauce} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/news" component={Newsletter} />
          </div>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
