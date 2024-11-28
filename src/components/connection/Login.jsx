import "./connection.scss"
import Button from "../atoms/button/Button.jsx";
import Input from "../atoms/input/Input.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/userService.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.login({ email, password });
            if (response.data === 'Login successful') {
                navigate('/');
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            setMessage('Invalid credentials');
            console.log(error);
        }
    }

    return (
        <div id="formContainer">
            {/* TODO rajouter l'action action="/mapage"*/}
            <form method="post" onSubmit={handleLogin} id="connectionForm">
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                    placeholder="Entrer votre adresse email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="Mot de passe"
                    placeholder="Entrer votre mot de passe"
                />
                <Link to="/auth/register" style={{textDecoration: 'none', color: "#E31766"}}>
                    Cliquez ici si vous n'avez pas encore de compte !
                </Link>
                <p>{message}</p>
                <Button text="Se connecter" type="submit" onClick={() => console.log("clicked")}></Button>
            </form>
        </div>
    );
}

export default Login;