import constants from "../constants";

const initialState = {
  userLogin: {
    isLogged: null
  },
  modalIsOpen: false
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

    case constants.TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }

    default:
      return state;
  }
};

export default userReducer;
