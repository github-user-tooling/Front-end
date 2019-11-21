import React from "react";

// Styles
import "./followingCard.scss";
// Actions
import { getUserDetails } from "../../../redux/actions/dataActions";
// Redux
import { connect } from "react-redux";

function FollowingCard({ getUserDetails, user, history }) {
  const handleClick = () => {
    getUserDetails(user.id); 
    history.push('/details')
  };
  
  return (
    <div id="dashboard-followingCard" onClick={handleClick}>
      <div id="followingCard__img-container">
        <img src={user.avatarUrl} alt="GitHub user avatar" />
      </div>
      <div id="followingCard__info">
        <h4>{user.login}</h4>
        <h5>{user.name}</h5>
        <h5>Followers: {user.followerCount}</h5>
        <h5>Following: {user.followingCount}</h5>
      </div>
    </div>
  );
}

const mapState = state => ({
  state
});

const mapAction = {
  getUserDetails
};

export default connect(mapState, mapAction)(FollowingCard);

