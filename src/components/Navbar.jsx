import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Tracker</Link>
      <ul>
        <li>
          <Link to="/edit">Exercises</Link>
        </li>
        <li>
          <Link to="/create">Create Exercise</Link>
        </li>
        <li>
          <Link to="/user">Create User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
