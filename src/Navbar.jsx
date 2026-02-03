import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ activeMenu }) {
  return (
    <div className="navbar">

      <Link
        to="/"
        className={`menu ${activeMenu === "/" ? "menu-active" : ""}`}
      >
        Home
      </Link>

      <Link
        to="/about"
        className={`menu ${activeMenu === "/about" ? "menu-active" : ""}`}
      >
        About
      </Link>

      <Link
        to="/contact"
        className={`menu ${activeMenu === "/contact" ? "menu-active" : ""}`}
      >
        Contact
      </Link>

    </div>
  );
}

export default Navbar;

