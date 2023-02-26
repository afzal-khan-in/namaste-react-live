import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const Logo = () => {
  return (
    <a href="#">
      <img src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png" />
    </a>
  );
};
const SearchBar = () => (
  <div className="search">
    <input type="text" placeHolder="Search" />
    <button type="button">Search</button>
  </div>
);
const ProfileIcon = () => (
  <a href="#">
    <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" />
  </a>
);
const HeaderComponent1 = () => (
  <div className="container">
    <Logo />
    <SearchBar />
    <ProfileIcon />
  </div>
);

export default HeaderComponent1;
