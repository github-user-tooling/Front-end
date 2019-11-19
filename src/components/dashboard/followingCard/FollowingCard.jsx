import React from "react";
import { withRouter } from 'react-router-dom';

import "./followingCard.scss";

function FollowingCard({ history }) {
  const userId = "MDQ6VXNlcjEzNDQxNDAw" //Temp user ID

  return (
    <div id="dashboard-followingCard" onClick={() => history.push(`/dashboard/follower/${userId}`)}>
      <div id="followingCard__img-container">
        <img
          src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="user image"
        />
      </div>
      <div id="followingCard__info">
        <h4>Username</h4>
        <h5>Acutal Name</h5>
        <h5>Followers: </h5>
        <h5>Following: </h5>
      </div>
    </div>
  );
}

export default withRouter(FollowingCard);
