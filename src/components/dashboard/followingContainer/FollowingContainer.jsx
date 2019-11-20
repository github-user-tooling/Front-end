import React from "react";
// Redux
import { connect } from "react-redux";
// Styles
import "./followingContainer.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// Components
import FollowingCard from "../followingCard/FollowingCard";

function FollowingContainer(props) {
  return (
    <div id="dashboard-fc">
      <h1>Following</h1>
      <div id="fc__following-wrapper">
        {props.followerData ? (
          props.followerData.map((user, key) => (
            <FollowingCard user={user} history={props.history} key={key} />
          ))
        ) : (
          <div id="loader">
            <Loader
              type="Triangle"
              color="#62D247"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const mapState = state => ({
  followerData: state.Data.dashboardData.following
});

const mapActions = {};

export default connect(mapState, mapActions)(FollowingContainer);
