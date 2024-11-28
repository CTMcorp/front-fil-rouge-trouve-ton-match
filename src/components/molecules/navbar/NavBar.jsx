import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss"
import {useState} from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hideMenu = () => setIsOpen(false);

    return (
        <div className="navBarContainer">
            <nav id="navBar" className={isOpen ? 'isOpen' : ''}>
                <button id="burger" onClick={() => setIsOpen(!isOpen)} onBlur={hideMenu}><FontAwesomeIcon icon={faBars}/></button>
                <div id="links">
                    <button id="closeMenu"><FontAwesomeIcon icon={faXmark} /></button>
                    <a className="navBarLink">Découvrir les profils</a>
                    <a className="navBarLink">Messagerie</a>
                    <a className="navBarLink">Mes matchs</a>
                    <a className="navBarLink">Boîte à outils</a>
                    <a className="navBarLink">Mes rendez-vous</a>
                </div>
                <button><FontAwesomeIcon icon={faUser}/></button>
                <button id="notification"><FontAwesomeIcon icon={faBell}/></button>
            </nav>
        </div>
    );
};

export default NavBar;