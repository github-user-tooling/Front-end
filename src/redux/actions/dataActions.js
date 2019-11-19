import constants from "../constants";
import axios from "axios";
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

export const demoAction = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: constants.DEMO_CONSTANT,
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

// For user on dashboard
export const dashboardData = () => dispatch => {
  const navDemoData = {
    user: {
      login: "PCDSandwichMan",
      name: "Matt"
    },
    followers: [
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
