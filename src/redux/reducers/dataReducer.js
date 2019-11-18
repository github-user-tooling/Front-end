import constants from "../constants";

const initialState = {
  demoData: [],
  dashboardData: [],
  searchResults: [],
  userID: "",
  chartData: {},
  userDetailData: {},
  tendenciesData: {}
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.DEMO_CONSTANT:
      return {
        ...state,
        demoData: [...payload]
      };

    case constants.CHART_CONSTANT:
      return {
        ...state,
        chartData: {...payload}
      };

    case constants.DETAILCARD_CONSTANT:
      return {
        ...state,
        userDetailData: {...payload}
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

    case constants.GET_TENDENCIES: 
      return {
        ...state,
        tendenciesData: {...payload}
      }
    default:
      return state;
  }
};

export default dataReducer;
