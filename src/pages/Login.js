import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Container, Wrapper } from "./style.ts"
import "./style.css"
import validateLogin from "../scripts/validateLogin"

function Login() {

  return (
    <Container>
      <Wrapper>
        <TwitterIcon fontSize="large" className="twitter-icon"></TwitterIcon>
        <h1>Log in to Twitter</h1>
          <form id="form-login"className="input-div">
            <input id="username-login" className="login-input" placeholder="Phone number, email address"></input>
            <input id="password-login" className="login-input" placeholder="Password"></input>
          
           <button type="submit" id="login" className="button buttonDefault" onClick={validateLogin}>Login</button>
          </form>
        <div className="actions">
          <p className="thread">Forgot password?</p>
          <p className="thread">Sign up to Twitter</p>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Login;
