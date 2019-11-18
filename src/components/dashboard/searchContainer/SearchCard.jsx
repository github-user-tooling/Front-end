import React, { useState } from "react";
// Styles
import "./searchCard.scss";
// Actions
import {
  getUserDetails,
  favoriteUser
} from "../../../redux/actions/dataActions";
// Redux
import { connect } from "react-redux";

function SearchCard(props) {
  const handleClick = () => {
    console.log(props.search.id);
    props.getUserDetails(props.search.id);

    // TODO matt: set user with action and history.push('/details')
  };

  let [btnStatus, setBtnStatus] = useState({
    favoriteActive: false
  });

  const handleFavorite = e => {
    props.favoriteUser(props.search.id);
    console.log(props.search.id);
  };

  return (
    <div id="dashboard-resultsCard">
      <h1 onClick={handleClick}>{props.search.login}</h1>
      <i
        className="fa fa-github"
        name="favoriteActive"
        onClick={handleFavorite}
      />
    </div>
  );
}

const mapState = state => ({
  state
});

const mapActions = {
  getUserDetails,
  favoriteUser
};

export default connect(mapState, mapActions)(SearchCard);
