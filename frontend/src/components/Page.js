import React from "react";
// import Logo from "../assets/mala-logo.svg";
import { Link } from "react-router-dom";

const Header = props => (
  <div className="navbar navbar-expand-md header">
    <div className="container-fluid">
      <div className="navbar-header header__title">
        {/* <img className="header__title-icon" src={Logo} /> */}
        <div className="header__title-text">mala sauce</div>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link amiko" to={{ pathname: "/sauce" }}>
            The Sauce
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link amiko" to={{ pathname: "/recipes" }}>
            Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link amiko" to={{ pathname: "/news" }}>
            Newsletter
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const Page = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Page;
