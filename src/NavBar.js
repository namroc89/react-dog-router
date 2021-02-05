import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ dogs }) {
  const dogLinks = dogs.map((d) => (
    <NavLink to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>
  ));

  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      {dogLinks}
    </nav>
  );
}

export default NavBar;
