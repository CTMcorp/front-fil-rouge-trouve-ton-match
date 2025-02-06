import "./profil.scss"
import profilPhoto from "../../assets/logosInitiative/hologrammeColor.png"

import { useFirstName } from "../../services/infoUserDetails"

const Profil = () => {
    return (
        <>
            <div id="content">
                <div id="identity">
                    <img alt="Photo de profil de l'utilisateur" src={profilPhoto}/>
                    <p>{useFirstName()}</p>
                    <p>Nom</p>
                </div>
                <div>
                    <p>Types de réseaux / besoins</p>
                </div>
                <div>Mes disponibilités</div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
        </>
    )
}

export default Profil;