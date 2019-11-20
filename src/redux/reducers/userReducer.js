import constants from "../constants";

const initialState = {
  userLogin: {
    isLogged: null
  },
  modalIsOpen: false,
  notes: []
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

    case constants.GET_NOTES:
      return {
        ...state,
        notes: payload
      }

    case constants.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload]
      }

    case constants.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === payload.id) {
            return payload;
          } else {
            return note;
          }
        })
      }

    case constants.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload.id)
      }

    default:
      return state;
  }
};

export default userReducer;
