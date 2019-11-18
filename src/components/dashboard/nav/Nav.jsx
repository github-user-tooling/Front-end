import React from "react";
import axios from "axios";
// Styles
import "./nav.scss";
// Redux
import { connect } from "react-redux";
import Axios from "axios";

function Nav(props) {
  const handleClick = () =>
    axios.get("https://git-user-breakdown.herokuapp.com/logout"); 
  return (
    <div id="dashboard-nav">
      <h1>{props.navInfo && props.navInfo.login}</h1>
      <a onClick={handleClick} href="/">
        Logout
      </a>
    </div>
  );
}

const mapState = state => ({
  navInfo: state.Data.dashboardData.user
});

export default connect(mapState, null)(Nav);
