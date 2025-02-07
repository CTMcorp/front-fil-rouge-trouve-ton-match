import "./profil.scss";
import profilPhoto from "../../assets/profilPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../utils/string/StringUtils";

import { useEmail, useFirstName, useLastName } from "../../services/infoUserDetails"

const Profil = () => {
  return (
    <div id="content">
      <div id="profile-info">
        <div className="profile-section profile-pic-section">
          <img
            className="profile-pic"
            alt="Photo de profil de l'utilisateur"
            src={profilPhoto}
          />
        </div>
        <div className="profile-section user-info-section">
          <div className="identity">
            <div className="user-info">
              <div className="name">
                <p>Prénom: {useFirstName()}</p>
                <p>Nom: {useLastName()}</p>
                <p>Email: {useEmail()}</p>
              </div>
              <p className="job-title">Métier</p>
            </div>
            <div className="needs">
              <p>Types de réseaux / besoins</p>
            </div>
          </div>
        </div>
        <div className="profile-section profile-btn-section">
          <div className="profile-btn">
            <FontAwesomeIcon icon={faTrashCan} />
            <p>Supprimer mon profil</p>
          </div>
        </div>
      </div>
      <div className="availabilities">
              <h3>Disponibilités :</h3>
              <p>lundi, mardi, mercredi, jeudi</p>
            </div>
      <div className="profile-description">
        <h2>DESCRIPTION DU PROJET ET DES BESOINS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Profil;
