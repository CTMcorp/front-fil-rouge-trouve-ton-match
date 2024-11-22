import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faUser} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss"
import {useState} from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="navBarContainer">
            <nav id="navBar" className={isOpen ? 'isOpen' : ''}>
                <button onClick={() => setIsOpen(isOpen)}><FontAwesomeIcon icon={faBars}/></button>
                <a className="navBarLink">Découvrir les profils</a>
                <a className="navBarLink">Messagerie</a>
                <a className="navBarLink">Mes matchs</a>
                <a className="navBarLink">Boîte à outils</a>
                <a className="navBarLink">Mes rendez-vous</a>
                <button><FontAwesomeIcon icon={faUser}/></button>
                <button><FontAwesomeIcon icon={faBell}/></button>
            </nav>
        </div>
    );
};

export default NavBar;