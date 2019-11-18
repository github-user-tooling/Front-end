import React, { useEffect } from "react";
// Styles
import "./chart.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { detailCardAction } from "../../../redux/actions/dataActions";
// Object data structure import, remove once data is coming in from middleware

function DetailsCard(props) {
  useEffect(() => {
    props.detailCardAction();
  }, []);

  return (
    <div className="detailsCard">

      <img src={DetailsCard.avatarUrl} alt="yeah" />

      <div className="detailsCardRight">
        <div className="detailsCardTop">
          <ul>
            <li>User: {DetailsCard.login}</li>
            <li>Name: {DetailsCard.name}</li>
            <li>Bio: {DetailsCard.bio}</li>
            <li>Location: {DetailsCard.location}</li>
          </ul>
        </div>

        <div className="detailsCardBottom">
          <ul>
            
            <li>Repos: {DetailsCard.repos}</li>
            <li>Commits in Past Year: {DetailsCard.commits}</li>
  <li>Page: {DetailsCard.url}</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  detailCardAction
};

export default connect(mapStateToProps, mapActionsToProps)(DetailsCard);