import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { useNavigate } from "react-router";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <h1>FinanzTools</h1>
        <nav ref={navRef}>
          <a href onClick={() => navigate("/page1")}>
            Sparrechner
          </a>
          <a href onClick={() => navigate("/page3")}>
            Sparplaner
          </a>

          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </header>
      <body>
        <p></p>
      </body>
    </>
  );
}

export default Navbar;