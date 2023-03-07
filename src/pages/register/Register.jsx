import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const username = useRef();
  const history = useHistory();

  const loginPage = () => {
    history.push('/login');
  }

  const handleRegistration = async (e) => {

    e.preventDefault();
    console.log('Registration form clicked');
    console.log(passwordAgain.current.value);
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match");
      console.log("Passwords don't match");
      alert("Passwords don't match");
    }else {
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      }
      console.log(user);
      try{
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`,user);
        
        history.push('/login');
      }catch(err){
        console.log(err);
      }
      
    }
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
          <form className="loginBox" onSubmit={handleRegistration}>
            <input placeholder="Username" type="text" required className="loginInput"  ref={username}/>
            <input placeholder="Email"  type="email" required className="loginInput" ref={email}/>
            <input placeholder="Password"  type="password" required className="loginInput" ref={password}/>
            <input placeholder="Password Again" type="password" required className="loginInput" ref={passwordAgain}/>
            <button className="loginButton">Sign Up</button>
            
            <button className="loginRegisterButton" onClick={loginPage}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
