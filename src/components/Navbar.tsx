import "../styles/Navbar.scss";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = (props: { currentRoute: any, setCurrentRoute: (prevCurrentRoute: any) => void }) => {

    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt="star logo" />
            <div className="navbar__line"></div>
            <ol className="navbar__list">
                <li><Link className={`navbar__link ${props.currentRoute == "home" ? "on" : ""}`} to="home" onClick={() => props.setCurrentRoute("home")}>HOME</Link></li>
                <li><Link className={`navbar__link ${props.currentRoute == "destination" ? "on" : ""}`} to="destination" onClick={() => props.setCurrentRoute("destination")}>DESTINATION</Link></li>
                <li><Link className={`navbar__link ${props.currentRoute == "crew" ? "on" : ""}`} to="crew" onClick={() => props.setCurrentRoute("crew")}>CREW</Link></li>
                <li><Link className={`navbar__link ${props.currentRoute == "technology" ? "on" : ""}`} to="technology" onClick={() => props.setCurrentRoute("technology")}>TECHNOLOGY</Link></li>
            </ol>
        </div>
    );
}

export default Navbar;