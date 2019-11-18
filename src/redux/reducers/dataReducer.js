import constants from "../constants";

const initialState = {
  demoData: [],
  chartData: {},
  userDetailData: {},
  dashboardData: [],
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
        dashboardData: {...payload }
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
