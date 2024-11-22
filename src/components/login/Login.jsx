import "./login.scss"

const Login = () => {
    return (
      <div id="formContainer">
          {/*// TODO rajouter l'action action="/mapage"*/}
          <form method="post" id="logInForm">
              <div>
                  <label>Email</label>
                  <input type="email" name="email"/>
              </div>
              <div>
                  <label>Mot de passe</label>
                  <input type="password"/>
              </div>
              <button>Se connecter</button>
          </form>
      </div>
    );
}

export default Login;