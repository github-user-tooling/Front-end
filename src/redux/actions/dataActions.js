import constants from "../constants";
import axios from "axios";
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

// For user on dashboard
export const dashboardData = () => dispatch => {
  axiosWithAuth()
    .get("https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/dashboard", {
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


export const tendenciesAction = (userID) => dispatch => {
  axiosWithAuth()
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/tendencies`)
    .then(res => {
      console.log(res)
      dispatch({
        type: constants.GET_TENDENCIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const detailCardAction = userId => dispatch => {
  axiosWithAuth()
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userId}/profile`)
    .then(res => {
      console.log(res)
      dispatch({
        type: constants.DETAILCARD_CONSTANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const searchUser = queryData => dispatch => {
  axios
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/search/${queryData}`, {
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
