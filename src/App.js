import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "./styles/rootStyles/App.scss";
// Pages
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import UserDetails from "./pages/userDetails/UserDetails";
// Components
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard/follower/" component={UserDetails} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
