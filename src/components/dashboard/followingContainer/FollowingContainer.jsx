import React from "react";
// Redux
import { connect } from "react-redux";
// Styles
import "./followingContainer.scss";
// Components
import FollowingCard from "../followingCard/FollowingCard";

function FollowingContainer(props) { 
  return (
    <div id="dashboard-fc">
      <h1>Following container</h1>
      <div id="fc__following-wrapper">
        {props.followerData
          ? props.followerData.map((user, key) => <FollowingCard key={key} />)
          : null}
      </div>
    </div>
  );
}

const mapState = state => ({
  followerData: state.Data.dashboardData.followers
});

const mapActions = {};

export default connect(mapState, mapActions)(FollowingContainer);
