import constants from "../constants";

const initialState = {
  demoData: [],
  dashboardData: [],
  searchResults: [],
  userID: ""
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.DEMO_CONSTANT:
      return {
        ...state,
        demoData: [...payload]
      };
    case constants.GET_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: { ...payload }
      };
    case constants.SEARCH_USERS:
      return {
        ...state,
        searchResults: [...payload]
      };
    case constants.SET_USER_ID:
      console.log(payload)
      return {
        ...state,
        userID: payload
      };
    default:
      return state;
  }
};

export default dataReducer;
