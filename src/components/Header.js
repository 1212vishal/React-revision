import { LOGO_URL } from "../utils/Constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-container">
        <li className="nav-items">
          <ul>{onlineStatus ? <h1>Online</h1> : <h1>Offline</h1>}</ul>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">About Us</Link>
          </ul>
          <ul>
            <Link to="/contact">Conatact Us</Link>
          </ul>
          <ul>
            <Link to="/grocery">Grocery</Link>
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
          <ul>{loggedInUser}</ul>
        </li>
      </div>
    </div>
  );
};
export default Header;
