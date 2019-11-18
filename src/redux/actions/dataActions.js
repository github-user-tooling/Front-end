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
