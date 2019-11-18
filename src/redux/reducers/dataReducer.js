import constants from "../constants";

const initialState = {
  demoData: [],
  chartData: {},
  userDetailData: {}
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

    default:
      return state;
  }
};

export default dataReducer;
