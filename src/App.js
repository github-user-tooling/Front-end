import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "./styles/rootStyles/App.scss";
// Pages
import Dashboard from "./pages/dashboard/Dashboard";
// Components 

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route path="/dashboard" component={Dashboard} />>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
