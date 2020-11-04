import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

function App() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />

            <Redirect path="/login" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
