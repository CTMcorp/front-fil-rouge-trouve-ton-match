import "./login.scss"

const Login = () => {
    return (
      <div id="formContainer">
          {/*// TODO rajouter l'action action="/mapage"*/}
          <form method="post" id="loginForm">
              <div className="inputForm">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Entrez votre adresse email"/>
              </div>
              <div className="inputForm">
                  <label>Mot de passe</label>
                  <input type="password" placeholder="Entrez votre mot de passe"/>
              </div>
              <button>Se connecter</button>
          </form>
      </div>
    );
}

export default Login;