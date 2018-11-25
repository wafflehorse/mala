import React from "react";
import Logo from "../assets/mala-logo.svg";
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

const Footer = () => {
  return (
    <div className="w-100 position-relative" style={{ height: "200px" }}>
      <div className="d-flex justify-content-between position-absolute absolute-centered w-25">
        <a href="#">About Us</a>
        <img src={Logo} />
        <a href="#">Work With Us</a>
      </div>
    </div>
  );
};

const Page = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Page;
