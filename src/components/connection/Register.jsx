import {useState} from "react";

import ("./connection.scss")
import Input from "../atoms/input/Input.jsx";
import Button from "../atoms/button/Button.jsx";
import UserService from "../../services/userService.js";
import {useNavigate} from "react-router";

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.register({ firstname, lastname, email, password });
            setMessage(response.data);
            if (response.data === 'User registered successfully') {
                navigate('/login');
            }
        } catch (error) {
            setMessage('Registration failed.' );
            console.log(error);
        }
    };

    return (
        <div id="formContainer">
            {/*// TODO rajouter l'action action="/newPage"*/}
            <form method="post" onSubmit={handleRegister} id="connectionForm">
                <Input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    name="Prénom"
                    placeholder="Entrer votre prénom"
                    className="text"
                />
                <Input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    name="Nom"
                    placeholder="Entrer votre nom"
                    className="text"
                />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                    placeholder="Entrer votre adresse email"
                    className="text"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="Mot de passe"
                    placeholder="Entrer votre mot de passe"
                    className="text"
                />
                <div id="checkbox">
                    {/* FIXME si je passe en type radio, je peux quand même en sélectionner plusieurs. Problème avec les div ??*/}
                    <Input type="checkbox" name="Administrateur" className="checkbox"></Input>
                    <Input type="checkbox" name="Parrain" className="checkbox"></Input>
                    <Input type="checkbox" name="Porteur" className="checkbox"></Input>
                </div>
                <p>{message}</p>
                <Button text="S'enregistrer" type="submit"></Button>
            </form>
        </div>
    );
};

export default Register;