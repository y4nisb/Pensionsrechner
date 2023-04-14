import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/App.js">Home</Link>
        </li>
        <li>
          <Link to="/page2.js">Page2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
