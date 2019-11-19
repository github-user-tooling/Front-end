import React, { useEffect } from "react";
// Styles
import './detailCard.scss';
// Redux
import { connect } from "react-redux";
//Components
import Chart from '../chart/Chart';
// Actions
import { detailCardAction } from "../../../redux/actions/dataActions";

function DetailsCard(props) {
  useEffect(() => {
    props.detailCardAction(props.state.userID);
  }, []);

  if (!props.userDetailData) return <div>loading...</div>;

  return (
    <div className="details-card">
      <div className="details-content">
        <div className="details-avatar">
          <img src={props.userDetailData.avatarUrl} alt="yeah" />
        </div>

        <div className="details-info">
          <ul>
            <li>{props.userDetailData.login}</li>
            <li>{props.userDetailData.name}</li>
            <li>Bio: {props.userDetailData.bio}</li>
            <li>Location: {props.userDetailData.location}</li>
            <li>Repos: {props.userDetailData.repositories}</li>
            <li>Profile : <a href={props.userDetailData.url} target="_blank" rel="noopener noreferrer">{props.userDetailData.url}</a></li>
          </ul>
        </div>
      </div>
      <div className="details-chart">
        <Chart userID={id} username={props.userDetailData.login} />
      </div>
      <div className="buttons">
        <button className="btn-notes">Notes</button>
        <button className="btn-unfollow">Unfollow</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userDetailData: state.Data.userDetailData
});

const mapActionsToProps = {
  detailCardAction
};

export default connect(mapStateToProps, mapActionsToProps)(DetailsCard);