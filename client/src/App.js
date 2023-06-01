import React from "react";
import Page1 from "./page1";
import Page3 from "./page3";
import Navbar from "./navbar.js";
import Popup from "reactjs-popup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case "/Page1":
      component = <Page1 />;
      break;
    case "/Page3":
      component = <Page3 />;
      break;
  }

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/page1" element={<Page1 />} />

        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;