import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "./styles/rootStyles/App.scss";
// Pages

import Dashboard from "./pages/dashboard/Dashboard";
// Components
import Login from "./pages/login/Login";
import UserDetails from "./pages/userDetails/UserDetails";

import PrivateRoute from "./components/utils/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard/follower/:id" component={UserDetails} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
