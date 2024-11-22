import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faUser} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss"
import {useState} from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navBarContainer">
            <nav id="navBar" className={isOpen ? 'isOpen' : ''}>
                <button id="burger" onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars}/></button>
                <div id="links">
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