import { LOGO_URL } from "../utils/Constant";

const Header=()=>{
    return(
        <div className="header">
        <div>
            <img className="logo" src={LOGO_URL} alt="" />
        </div>

        <div className="nav-container">
            <li className="nav-items">
                <ul>Home</ul>
                <ul>About Us</ul>
                <ul>Conatact Us</ul>
                <ul>Login</ul>
            </li>
        </div>
        </div>
    )
}
export default Header;