import React from "react";
import "./followingCard.scss";

function FollowingCard() {
  return (
    <div id="dashboard-followingCard">
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

export default FollowingCard;
