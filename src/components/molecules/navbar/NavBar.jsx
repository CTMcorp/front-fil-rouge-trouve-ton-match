import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faHouse, faRightFromBracket, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss"
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../config/AuthContext.jsx";
import Button from "../../atoms/button/Button.jsx";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hideMenu = () => setIsOpen(false);
    const {isLogged, logout} = useContext(AuthContext);

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
                {isLogged ? (
                    <Button text={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={logout} className="logout"></Button>
                ) : null}
            </nav>
        </div>
    );
};

export default NavBar;