import "./profil.scss";
import profilPhoto from "../../assets/profilPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../../components/atoms/checkbox/Checkbox";
 
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
              <p className="job-title">Métier: </p>
            </div>
            <div className="needs">
              <p>Types de réseaux / besoins</p>
            </div>
          </div>
        </div>
        <div className="profile-section profile-btn-section">
          <div className="profile-btn">
            <FontAwesomeIcon icon={faTrashCan} />
            <p>Supprimer profil</p>
          </div>
        </div>
      </div>
      <div className="availabilities">
              <div>
                <fieldset className="disponibilites">
                  <legend>Disponibilités :</legend>
                  <Checkbox name="scales" label="Lundi" />
                  <Checkbox name="scales" label="Mardi" />
                  <Checkbox name="scales" label="Mercredi" />
                  <Checkbox name="scales" label="Jeudi" />
                  <Checkbox name="scales" label="Vendredi" />
                  <Checkbox name="scales" label="Samedi" />
                </fieldset>
              </div>
            </div>
      <div className="profile-description">
        <h3>Description du projet</h3>
        <p>
        Le projet GreenTech Innovation vise à développer des solutions technologiques durables pour réduire l&apos;empreinte carbone 
        des entreprises. En utilisant des énergies renouvelables et des technologies éco-responsables, 
        le projet se concentre sur la création de systèmes énergétiques efficaces et la réduction des déchets industriels. 
        L&apos;objectif principal est d&apos;aider les entreprises à adopter des pratiques plus vertes tout en restant compétitives sur le marché.
        </p>
      </div>
    </div>
  );
};

export default Profil;
