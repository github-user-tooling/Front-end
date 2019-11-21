import React, { useEffect } from "react";
// Styles
import './detailCard.scss';
// Redux
import { connect } from "react-redux";
//Components
import Chart from '../chart/Chart';
import Tendencies from '../tendenciesCard/TendenciesCard';
import NotesModal from '../notesModal/NotesModal';
import { textEmoji } from 'markdown-to-text-emoji';
// Actions
import { detailCardAction, favoriteUser, followUser, unfollowUser } from "../../../redux/actions/dataActions";
import { toggleModal } from "../../../redux/actions/userActions";

function DetailsCard(props) {
  useEffect(() => {
    props.detailCardAction(props.userID);
  }, []);

  const handleFollow = user => {
    props.followUser({ ...user, id: props.userID });
  }

  const handleUnfollow = userID => {
    props.unfollowUser(userID);
  }

  const emojify = () => textEmoji(props.userDetailData.bio);

  if (!props.userDetailData) return <div>loading...</div>;

  return (
    <>
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
              {props.userDetailData.bio ? <li>{emojify()}</li> : null}
            </ul>
            <div className="details-tendencies">
              <Tendencies userID={props.userID} />
            </div>
          </div>
        </div>
        <div className="details-chart">
          <Chart userID={props.userID} username={props.userDetailData.login} />
        </div>
        {props.dashboardData.hasOwnProperty('user') ? props.dashboardData.user.id !== props.userID ?
          //User is NOT myself
          <div className="buttons">
            {props.whoImFollowing && props.whoImFollowing.findIndex(user => user.login === props.userDetailData.login) !== -1 ?
              //User is a follower
              <>
                <button className="btn-notes" onClick={() => props.toggleModal(props.modalIsOpen)}>Notes</button>
                <button className="btn-unfollow" onClick={() => handleUnfollow(props.userID)}>Unfollow</button>
              </>
              : //User is NOT a follower
              <button className="btn-follow" onClick={() => handleFollow(props.userDetailData)}>Follow</button>
            }
          </div> : null : null
        }
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  userID: state.Data.userID,
  dashboardData: state.Data.dashboardData,
  modalIsOpen: state.User.modalIsOpen,
  userDetailData: state.Data.userDetailData,
  whoImFollowing: state.Data.dashboardData.following
});

const mapActionsToProps = {
  detailCardAction,
  toggleModal,
  favoriteUser,
  followUser,
  unfollowUser
};

export default connect(mapStateToProps, mapActionsToProps)(DetailsCard);