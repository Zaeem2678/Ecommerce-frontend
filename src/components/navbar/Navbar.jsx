import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="logo.png" alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/womens"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="nav-logincart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src="cart_icon.png" alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
