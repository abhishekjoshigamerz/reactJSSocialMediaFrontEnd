import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router';
export default function Login() {
  const email = useRef();
  const password = useRef(); 
  const {user,isFetching,error,dispatch} = useContext(AuthContext);
  const history = useHistory();
  const registerRedirect = () => {
    history.push('/register');
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting form");
    console.log(email.current.value);
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
    console.log(user);

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitForm}>
            <input placeholder="Email"  type="email" className="loginInput" required  ref={email}/>
            <input placeholder="Password" type="password" className="loginInput" minLength="8" required ref={password}/>
            <button className="loginButton">{isFetching ? <CircularProgress color="primary" size="20px"/> : "Log In" }</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={registerRedirect}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
