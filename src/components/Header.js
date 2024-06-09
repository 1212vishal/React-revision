import { LOGO_URL } from "../utils/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-container">
        <li className="nav-items">
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">About Us</Link>
          </ul>
          <ul>
            <Link to="/contact">Conatact Us</Link>
          </ul>
          <ul>Cart</ul>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </div>
    </div>
  );
};
export default Header;
