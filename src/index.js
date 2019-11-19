import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
// Components
import App from "./App";
// Styles
import "./styles/rootStyles/index.scss";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
