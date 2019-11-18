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

      <img src={props.state.userDetailData.avatarUrl} alt="yeah" />

      <div className="detailsCardRight">
        <div className="detailsCardTop">
          <ul>
            <li>User: {props.state.userDetailData.login}</li>
            <li>Name: {props.state.userDetailData.name}</li>
            <li>Bio: {props.state.userDetailData.bio}</li>
            <li>Location: {props.state.userDetailData.location}</li>
          </ul>
        </div>

        <div className="detailsCardBottom">
          <ul>
            
            <li>Repos: {props.state.userDetailData.repos}</li>
            <li>Commits in Past Year: {props.state.userDetailData.commits}</li>
            <li>Page: {props.state.userDetailData.url}</li>
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