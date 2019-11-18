import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "./styles/rootStyles/App.scss";
// Pages
import Dashboard from "./pages/dashboard/Dashboard";
// Components
import Demo from "./components/demo/Demo";

function App() {
  return (
    <div className="App">
      <Router>
        <Demo />
        <Switch>
          <Route path="/" component={Dashboard} />>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
