import "../styles/Navbar.scss";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";


const Navbar = (props: { currentRoute: any, setCurrentRoute: (prevCurrentRoute: any) => void }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])



    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt="star logo" />
            <div className="navbar__line"></div>
            {!isOpened && width < 480 ?
                <img className="navbar__mobile" onClick={() => setIsOpened(prevIsOpened => !prevIsOpened)} src={hamburgerIcon} alt="Open navbar" />
                : null}
                <ol className={`navbar__list ${isOpened && width <= 480 || width > 480 ? "transition" : ""}`}>
                    <img className="navbar__close" src={closeIcon} onClick={() => setIsOpened(prevIsOpened => !prevIsOpened)} alt="Close navbar" />
                    <li><Link className={`navbar__link ${props.currentRoute == "home" ? "on" : ""}`} to="home" onClick={() => props.setCurrentRoute("home")}>HOME</Link></li>
                    <li><Link className={`navbar__link ${props.currentRoute == "destination" ? "on" : ""}`} to="destination" onClick={() => props.setCurrentRoute("destination")}>DESTINATION</Link></li>
                    <li><Link className={`navbar__link ${props.currentRoute == "crew" ? "on" : ""}`} to="crew" onClick={() => props.setCurrentRoute("crew")}>CREW</Link></li>
                    <li><Link className={`navbar__link ${props.currentRoute == "technology" ? "on" : ""}`} to="technology" onClick={() => props.setCurrentRoute("technology")}>TECHNOLOGY</Link></li>
                </ol>
        </div>
    );
}

export default Navbar;