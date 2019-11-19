import React from "react";
import axios from "axios";
// Styles
import "./nav.scss";
// Redux
import { connect } from "react-redux";

function Nav(props) {
  const handleClick = e => {
    console.log(e);
    axios
      .get("https://staging-master-5ton9t2hfmasnxc.herokuapp.com/auth/logout")
      .catch(err => console.log(err));
  };
  return (
    <div id="dashboard-nav">
      <h1>{props.navInfo && props.navInfo.login}</h1>
      <a
        href="https://staging-master-5ton9t2hfmasnxc.herokuapp.com/auth/logout"
        onClick={handleClick}
      >
        Logout
      </a>
    </div>
  );
}

const mapState = state => ({
  navInfo: state.Data.dashboardData.user
});

export default connect(mapState, null)(Nav);
