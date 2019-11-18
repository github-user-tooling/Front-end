import constants from "../constants";

const initialState = {
  demoData: [],
  chartData: {}
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

    default:
      return state;
  }
};

export default dataReducer;
