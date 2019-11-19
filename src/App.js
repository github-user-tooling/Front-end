import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "./styles/rootStyles/App.scss";
// Pages
import Dashboard from "./pages/dashboard/Dashboard";
<<<<<<< HEAD
// Components 
=======
import Login from "./pages/login/Login";
// Components
import Demo from "./components/demo/Demo";
>>>>>>> 5b865094124f2e95636b14be8a48948923211c4f

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
