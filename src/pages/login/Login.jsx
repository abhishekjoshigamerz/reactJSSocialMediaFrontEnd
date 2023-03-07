import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef(); 
  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting form");
    console.log(email.current.value);
    
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
          <form className="loginBox" onClick={submitForm}>
            <input placeholder="Email"  type="email" className="loginInput" required  ref={email}/>
            <input placeholder="Password" type="password" className="loginInput" minLength="8" required ref={password}/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
