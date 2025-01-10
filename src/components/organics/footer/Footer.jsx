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
                <a href="tel:0679875609">06.79.87.56.09</a>
                <a href="mailto:accompagnement@initiativedeuxsevres.fr">accompagnement@initiativedeuxsevres.fr</a>
            </div>

            <div className="footerIcons">
            <a href="https://www.instagram.com/initiative_deux_sevres" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.tiktok.com/@initiative.deux.s" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
                <a href="https://www.facebook.com/profile.php?id=61556616180678" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.linkedin.com/company/initiative-deux-sevres/?originalSubdomain=fr" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
            </div>
        </div>
    )
}

export default Footer;