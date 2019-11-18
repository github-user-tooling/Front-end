import constants from "../constants";

const initialState = {
  demoData: [],
  dashboardData: []
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
        dashboardData: {...payload }
      };
    default:
      return state;
  }
};

export default dataReducer;
