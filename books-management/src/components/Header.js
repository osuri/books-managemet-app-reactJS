import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div>
        <NavLink to="/" activeClassName="active" exact>
          Book List
        </NavLink>
        <NavLink to="/add" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
