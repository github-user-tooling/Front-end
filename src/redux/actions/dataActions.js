import constants from "../constants";
import axios from "axios";

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

<<<<<<< HEAD
=======

export const chartAction = (userID) => dispatch => {
  axios
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/calendar`)
    .then(res => {
        console.log(res)
      dispatch({
        type: constants.CHART_CONSTANT,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

export const tendenciesAction = (userID) => dispatch => {
  axios
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/tendencies`)
    .then(res => {
        console.log(res)
      dispatch({
        type: constants.GET_TENDENCIES,
        payload: res
      });
    })
    .catch(err => console.log(err));
};


export const detailCardAction = (userID) => dispatch => {
  axios
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/profile`)
    .then(res => {
        console.log(res)
      dispatch({
        type: constants.DETAILCARD_CONSTANT,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

// For user on dashboard
export const dashboardData = () => dispatch => {
  const navDemoData = {
    user: {
      login: "PCDSandwichMan",
      name: "Matt"
    },
    following: [
      {
        id: "MDQ6VXNlcjUzMjExNTIz",
        avatarUrl: "https://avatars1.githubusercontent.com/u/53211523?v=4",
        login: "Edwin-Chajon",
        name: "Edwin Chajon",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjUzMjExNTIz",
        avatarUrl: "https://avatars1.githubusercontent.com/u/53211523?v=4",
        login: "Edwin-Chajon",
        name: "Edwin Chajon",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjUzMjExNTIz",
        avatarUrl: "https://avatars1.githubusercontent.com/u/53211523?v=4",
        login: "Edwin-Chajon",
        name: "Edwin Chajon",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjUzMjExNTIz",
        avatarUrl: "https://avatars1.githubusercontent.com/u/53211523?v=4",
        login: "Edwin-Chajon",
        name: "Edwin Chajon",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjUzMjExNTIz",
        avatarUrl: "https://avatars1.githubusercontent.com/u/53211523?v=4",
        login: "Edwin-Chajon",
        name: "Edwin Chajon",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjE2MDU5OTA3",
        avatarUrl: "https://avatars3.githubusercontent.com/u/16059907?v=4",
        login: "Suffyan-T",
        name: "Suffyan Tariq",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjU1ODUxMzc0",
        avatarUrl: "https://avatars2.githubusercontent.com/u/55851374?v=4",
        login: "DustinG98",
        name: "Dustin Graham",
        followersCount: 2,
        followingCount: 10
      },
      {
        id: "MDQ6VXNlcjU0MDkyNTA5",
        avatarUrl: "https://avatars2.githubusercontent.com/u/54092509?v=4",
        login: "dijahdeen",
        name: "Dijah Deen",
        followersCount: 2,
        followingCount: 10
      }
    ]
  };

  dispatch({
    type: constants.GET_DASHBOARD_DATA,
    payload: navDemoData
  });
  // axios.get('').then(res => {
  //   dispatch({
  //     type:,
  //     payload:
  //   })
  // }).catch(err => console.log(err))

};

>>>>>>> 5b865094124f2e95636b14be8a48948923211c4f
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
<<<<<<< HEAD
    .post(
      `https://staging-master-5ton9t2hfmasnxc.herokuapp.com/follow/${userId}`,
      {},
      {
        withCredentials: true
      }
    )
=======
    .get(`https://git-user-breakdown.herokuapp.com/unfollow${userId}`)
>>>>>>> 5b865094124f2e95636b14be8a48948923211c4f
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.response);
    });
};
