import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <div class = "nav">
      <Link class = "Home" to="/">Home</Link>
      <Link class = "About" to="/about">About</Link>
    </div>
  );
}

export default Navigation;