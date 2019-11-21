import React, { useState } from "react";
// Styles
import "./searchCard.scss";
// Actions
import {
  getUserDetails,
  favoriteUser
} from "../../../redux/actions/dataActions";
import { dashboardData } from "../../../redux/actions/dataActions";
// Redux
import { connect } from "react-redux";

function SearchCard(props) {
  let [btnStatus, setBtnStatus] = useState({
    favoriteActive: false
  });

  const handleDetailsClick = () => {
    props.getUserDetails(props.search.id);
    props.history.push("/details");
  };

  const handleFavorite = e => {
    setBtnStatus({
      ...btnStatus,
      favoriteActive: !btnStatus.favoriteActive
    });
    props.favoriteUser(props.search.id);
    document.getElementById("dashboard-resultsCard").remove();
    props.dashboardData();
  };

  return (
    <div id="dashboard-resultsCard">
      <div id="resultsCard__clickable" onClick={handleDetailsClick}>
        <h1>{props.search.login}</h1>
      </div>
      <i
        className={
          btnStatus.favoriteActive ? "fa fa-github rCActive" : "fa fa-github"
        }
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
  favoriteUser,
  dashboardData
};

export default connect(mapState, mapActions)(SearchCard);
