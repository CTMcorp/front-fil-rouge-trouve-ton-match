import "./connection.scss"
import Button from "../atoms/button/Button.jsx";
import Input from "../atoms/input/Input.jsx";

const Login = () => {
    return (
        <div id="formContainer">
            {/*// TODO rajouter l'action action="/mapage"*/}
            <form method="post" id="connectionForm">
                <Input type="email" name="Email" placeholder="Entrer votre adresse email"></Input>
                <Input type="password" name="Mot de passe" placeholder="Entrer votre mot de passe"></Input>
                <Button text="Se connecter" onClick={() => console.log("clicked")}></Button>
            </form>
        </div>
    );
}

export default Login;