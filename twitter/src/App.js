import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/profile/:username" component={Profile} />
          <PublicRoute restricted={true} path="/login" component={Login} />
          <PublicRoute
            restricted={true}
            path="/register"
            component={Register}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
