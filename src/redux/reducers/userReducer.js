import constants from "../constants";

const initialState = {
  userLogin: {
    isLogged: null
  }
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOGIN_USER:
      return {
        ...state,
        userLogin: payload
      };

    case constants.LOGOUT_USER:
      return {
        ...state,
        userLogin: payload
      };

    default:
      return state;
  }
};

export default userReducer;
