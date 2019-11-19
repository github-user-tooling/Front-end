import constants from "../constants";
import axios from "axios";
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

// For user on dashboard
export const dashboardData = () => dispatch => {
  axios
    .get("https://git-user-breakdown.herokuapp.com/user/dashboard", {
      withCredentials: true
    })
    .then(res => {
      dispatch({
        type: constants.GET_DASHBOARD_DATA,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const chartAction = (userID) => dispatch => {
  axiosWithAuth()
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/calendar`)
    .then(res => {
      console.log(res)
      dispatch({
        type: constants.CHART_CONSTANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const tendenciesAction = userID => dispatch => {
  axios
    .get(
      `https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/tendencies`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: constants.GET_TENDENCIES,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

export const detailCardAction = userId => dispatch => {
  // axiosWithAuth()
  //   .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userId}/profile`)
  //   .then(res => {
  //     console.log(res)
  //     dispatch({
  //       type: constants.DETAILCARD_CONSTANT,
  //       payload: res.data
  //     });
  //   })
  //   .catch(err => console.log(err));
  // console.log(userId);
  const detailsDemoData = {
    avatarUrl: 'https://avatars1.githubusercontent.com/u/13441400?v=4',
    login: 'TinySquid',
    name: 'Mike Nunes',
    bio: 'Currently in the Lambda School WEB24 Track - Full Stack Development.',
    location: 'California',
    url: 'https://github.com/TinySquid',
    repositories: 95,
    // commits: 487
  }

  dispatch({
    type: constants.DETAILCARD_CONSTANT,
    payload: detailsDemoData
  });
};

export const searchUser = queryData => dispatch => {
  axios
    .get(`https://git-user-breakdown.herokuapp.com/search/${queryData}`, {
      withCredentials: true
    })
    .then(res => {
      dispatch({
        type: constants.SEARCH_USERS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Used when client from dashboard to user details
export const getUserDetails = userId => dispatch => {
  console.log(userId);
  dispatch({
    type: constants.SET_USER_ID,
    payload: userId
  });
};

// Used to favorite the user from dashboard search
export const favoriteUser = userId => dispatch => {
  console.log(userId);
  axios
    .post(
      `https://staging-master-5ton9t2hfmasnxc.herokuapp.com/follow/${userId}`,
      {},
      {
        withCredentials: true
      }
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.response);
    });
};
