import constants from "../constants";
import axios from "axios";

export const demoAction = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then(res => {
        console.log(res.data)
      dispatch({
        type: constants.DEMO_CONSTANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const chartAction = (userID) => dispatch => {
  axios
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}calendar`)
    .then(res => {
        console.log(res)
      dispatch({
        type: constants.CHART_CONSTANT,
        payload: res
      });
    })
    .catch(err => console.log(err));
};


export const detailCardAction = () => dispatch => {
  axios
    .get("https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/profile")
    .then(res => {
        console.log(res)
      dispatch({
        type: constants.DETAILCARD_CONSTANT,
        payload: res
      });
    })
    .catch(err => console.log(err));
};