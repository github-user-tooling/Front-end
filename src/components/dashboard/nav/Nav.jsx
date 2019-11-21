import React from "react";
import axios from "axios";
// Styles
import "./nav.scss";
// Redux
import { connect } from "react-redux";
import constants from "../../../redux/constants";
// Actions
import { getUserDetails } from "../../../redux/actions/dataActions";
// With Router
import { withRouter } from "react-router-dom";

function Nav(props) {
  const handleClick = e => {
    console.log(e);
    axios
      .get(`${constants.BASE_URL_DEV}/auth/logout`)
      .catch(err => console.log(err));
  };

  const handleClickHome = () => {
    props.history.push("");
  };

  const handleDetailsClick = () => {
    props.getUserDetails(props.navInfo.id);
    props.history.push("/details");
  };
  return (
    <div id="dashboard-nav">
      <div id="nav__left-info">
        {props.match.path === "/details" && (
          <div onClick={handleClickHome} id="info__back">
            <h5>Back</h5>
          </div>
        )}
        <h1 onClick={props.navInfo && handleDetailsClick}>
          {props.navInfo ? props.navInfo.login : "GitBook"}
        </h1>
      </div>
      <a href={`${constants.BASE_URL_DEV}/auth/logout`} onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}

const mapState = state => ({
  navInfo: state.Data.dashboardData.user
});

const mapActions = {
  getUserDetails
};

export default withRouter(connect(mapState, mapActions)(Nav));
