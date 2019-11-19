import React from "react";
// Styles
import "./nav.scss";
// Redux
import { connect } from "react-redux"; 

function Nav(props) {
  const handleClick = () => {
    axios.get("https://staging-master-5ton9t2hfmasnxc.herokuapp.com/auth/logout");
  }; 
  return (
    <div id="dashboard-nav">
      <h1>{props.navInfo && props.navInfo.login}</h1>
      <a onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}

const mapState = state => ({
  navInfo: state.Data.dashboardData.user
});

export default connect(mapState, null)(Nav);
