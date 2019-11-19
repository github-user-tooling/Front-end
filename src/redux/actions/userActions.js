import constants from '../constants';

export const loginUser = () => dispatch => {
  dispatch({
    type: constants.LOGIN_USER,
    payload: {
      isLogged: true,
    }
  });
}

export const logoutUser = () => dispatch => {
  dispatch({
    type: constants.LOGOUT_USER,
    payload: {
      isLogged: false,
    }
  });
}

export const toggleModal = () => dispatch => {
  dispatch({
    type: constants.TOGGLE_MODAL,
    // payload: {
    //   modalIsOpen: !modalState
    // }
  })
}