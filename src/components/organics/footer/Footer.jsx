import hologramme from "../../../assets/logosInitiative/hologrammeColor.png"
import "./footer.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn, faTiktok} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div id="footer">
            <img src={hologramme} alt="hologramme du site"/>

            <div className="footerText">
                <p>Votre plateforme :</p>
                <p> Initiatives Deux-Sèvres</p>
                <p>06 79 87 56 09</p>
                <p>accompagnement@initiativedeuxsevres.fr</p>
            </div>

            <div className="footerIcons">
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faLinkedinIn}/>
                <FontAwesomeIcon icon={faTiktok}/>
            </div>
        </div>
    )
}

export default Footer;