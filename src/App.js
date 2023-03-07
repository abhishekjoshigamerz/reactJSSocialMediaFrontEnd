import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>

        <Route exact path="/">
         { user ? <Home /> : <Register /> }
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile/:userid">
         { user ? <Profile /> : <Register /> }
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
