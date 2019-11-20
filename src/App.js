import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
// Styles
import "./styles/rootStyles/App.scss";
// Pages
import Dashboard from "./pages/dashboard/Dashboard";
// Components
import Login from "./pages/login/Login";
import UserDetails from "./pages/userDetails/UserDetails";
// React Page Transitions
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={1000} classNames="fade">
                <Switch  location={location}>
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/details" component={UserDetails} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/details" component={UserDetails} />
                  <PrivateRoute exact path="/" component={Dashboard} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
