import React, { useEffect } from "react";
// Styles
import './detailCard.scss';
// Redux
import { connect } from "react-redux";
//Components
import Chart from '../chart/Chart';
import Tendencies from '../tendenciesCard/TendenciesCard';
import NotesModal from '../notesModal/NotesModal';
// Actions
import { detailCardAction } from "../../../redux/actions/dataActions";
import { toggleModal } from "../../../redux/actions/userActions";

function DetailsCard(props) {

  useEffect(() => {
    props.detailCardAction(props.userID);
  }, []);

  if (!props.userDetailData) return <div>loading...</div>;

  return (
    <>
      {/* {props.modalIsOpen ? <Modal /> : null} */}
      <NotesModal />
      <div className="details-card">
        <div className="details-content">
          <div className="details-avatar">
            <img src={props.userDetailData.avatarUrl} alt="yeah" />
          </div>

          <div className="details-info">
            <ul>
              <li>{props.userDetailData.login}</li>
              <li>{props.userDetailData.name}</li>
              {props.userDetailData.location ? <li>Location: {props.userDetailData.location}</li> : null}
              <li>Repos: {props.userDetailData.repoCount}</li>
              <li>Profile : <a href={props.userDetailData.url} target="_blank" rel="noopener noreferrer">{props.userDetailData.url}</a></li>
              {props.userDetailData.bio ? <li>Bio: {props.userDetailData.bio}</li> : null}
            </ul>
            <div className="details-tendencies">
              {/* <Tendencies /> */}
            </div>
          </div>
        </div>
        <div className="details-chart">
          <Chart userID={'MDQ6VXNlcjUzNTM0NjI2'} username={props.userDetailData.login} />
        </div>
        <div className="buttons">
          <button className="btn-notes" onClick={() => props.toggleModal(props.modalIsOpen)}>Notes</button>
          <button className="btn-unfollow">Unfollow</button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  modalIsOpen: state.User.modalIsOpen,
  userDetailData: state.Data.userDetailData,
  userID: state.Data.userID
});

const mapActionsToProps = {
  detailCardAction,
  toggleModal
};

export default connect(mapStateToProps, mapActionsToProps)(DetailsCard);