import React from "react";
import Sparrechner from "./sparrechner";
import Sparplaner from "./sparplaner";
import Einlagen from "./einlagen";
import Navbar from "./navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import Popup from "reactjs-popup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case "/sparrechner":
      component = <Sparrechner />;
      break;
    case "/sparplaner":
      component = <Sparplaner />;
      break;
  }

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/sparrechner" element={<Sparrechner />} />

        <Route path="/sparplaner" element={<Sparplaner />} />

        <Route path="/einlagen" element={<Einlagen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
