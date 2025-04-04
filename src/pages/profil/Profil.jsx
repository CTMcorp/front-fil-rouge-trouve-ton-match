import "./profil.scss";
import profilPhoto from "../../assets/user.png";

import {
    useEmail,
    useFirstName,
    useLastName,
} from "../../services/infoUserDetails";
import { useState } from "react";

const Profil = () => {
    const [edit, setEdit] = useState(false);

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
                            {edit ? (
                                <>
                                    <p>Prénom :</p>
                                    <input
                                        type="text"
                                        value={useFirstName()}
                                    ></input>
                                    <p>Nom :</p>
                                    <input
                                        type="text"
                                        value={useLastName()}
                                    ></input>
                                    <p>Email :</p>
                                    <input
                                        type="text"
                                        value={useEmail()}
                                    ></input>
                                    <p>Métier :</p>
                                    <input
                                        type="text"
                                        value={undefined}
                                    ></input>
                                    <p>Types de réseaux / besoins: </p>
                                    <input
                                        type="text"
                                        value={undefined}
                                    ></input>
                                </>
                            ) : (
                                <>
                                    <p>Prénom: {useFirstName()}</p>
                                    <p>Nom: {useLastName()}</p>
                                    <p>Email: {useEmail()}</p>
                                    <p className="job-title">Métier: </p>
                                    <p>Types de réseaux / besoins: </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="profile-section profile-btn-section">
                    <div className="profile-btn-delete">
                        <button>Supprimer profil</button>
                        <button onClick={() => setEdit(!edit)}>
                            {edit ? "Enregistrer profil" : "Modifier profil"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="profile-description">
                <h3>Description du projet</h3>
                {edit ? (
                    <input type="text" value={undefined}></input>
                ) : (
                    <p>
                        Le projet GreenTech Innovation vise à développer des
                        solutions technologiques durables pour réduire
                        l&apos;empreinte carbone des entreprises. En utilisant
                        des énergies renouvelables et des technologies
                        éco-responsables, le projet se concentre sur la création
                        de systèmes énergétiques efficaces et la réduction des
                        déchets industriels. L&apos;objectif principal est
                        d&apos;aider les entreprises à adopter des pratiques
                        plus vertes tout en restant compétitives sur le marché.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Profil;
