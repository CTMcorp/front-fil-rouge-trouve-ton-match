import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faHouse, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss"
import {useState} from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hideMenu = () => setIsOpen(false);

    return (
        <div className="navBarContainer">
            <nav id="navBar" className={isOpen ? 'isOpen' : ''}>
                <button
                    id="burger"
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={hideMenu}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <Link to="/" id="homeButton">
                    <button><FontAwesomeIcon icon={faHouse}/></button>
                </Link>
                <div id="links">
                    <button id="closeMenu" onClick={hideMenu}><FontAwesomeIcon icon={faXmark}/></button>
                    <Link to="" className="navBarLink" style={{ textDecoration: 'none', color: "white" }}>Découvrir les profils</Link>
                    <Link to="" className="navBarLink" style={{ textDecoration: 'none', color: "white" }}>Messagerie</Link>
                    <Link to="" className="navBarLink" style={{ textDecoration: 'none', color: "white" }}>Mes matchs</Link>
                    <Link to="" className="navBarLink" style={{ textDecoration: 'none', color: "white" }}>Boîte à outils</Link>
                    <Link to="" className="navBarLink" style={{ textDecoration: 'none', color: "white" }}>Mes rendez-vous</Link>
                </div>
                <button><FontAwesomeIcon icon={faUser}/></button>
                <button id="notification"><FontAwesomeIcon icon={faBell}/></button>
            </nav>
        </div>
    );
};

export default NavBar;