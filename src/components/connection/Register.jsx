import ("./connection.scss")
import Input from "../atoms/input/Input.jsx";
import Button from "../atoms/button/Button.jsx";

const Register = () => {
    return (
        <div id="formContainer">
            {/*// TODO rajouter l'action action="/newPage"*/}
            <form method="post" id="connectionForm">
                <Input type="text" name="Prénom" placeholder="Entrer votre prénom" className="text"></Input>
                <Input type="text" name="Nom" placeholder="Entrer votre nom" className="text"></Input>
                <Input type="email" name="Email" placeholder="Entrer votre adresse email" className="text"></Input>
                <Input type="password" name="Mot de passe" placeholder="Entrer votre mot de passe" className="text"></Input>
                <div id="checkbox">
                    {/* FIXME si je passe en type radio, je peux quand même en sélectionner plusieurs. Problème avec les div ??*/}
                    <Input type="checkbox" name="Administrateur" className="checkbox"></Input>
                    <Input type="checkbox" name="Parrain" className="checkbox"></Input>
                    <Input type="checkbox" name="Porteur" className="checkbox"></Input>
                </div>
                <Button text="S'enregistrer" onClick={() => console.log("clicked")}></Button>
            </form>
        </div>
    );
};

export default Register;