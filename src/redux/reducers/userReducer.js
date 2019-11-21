import constants from "../constants";

const initialState = {
  userLogin: {
    isLogged: null
  },
  notesModal: {
    isOpen: false,
    view: 'default',
    notes: [],
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

    case constants.TOGGLE_MODAL:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          isOpen: !state.notesModal.isOpen
        }
      }

    case constants.SET_MODAL_VIEW:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          view: payload
        }
      }

    case constants.GET_NOTES:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          notes: payload
        }
      }

    case constants.ADD_NOTE:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          notes: [...state.notesModal.notes, payload]
        }
      }

    case constants.EDIT_NOTE:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          notes: state.notesModal.notes.map(note => {
            if (note.id === payload.id) {
              return payload;
            } else {
              return note;
            }
          })
        }
      }

    case constants.DELETE_NOTE:
      return {
        ...state,
        notesModal: {
          ...state.notesModal,
          notes: state.notesModal.notes.filter(note => note.id !== payload.id)
        }
      }

    default:
      return state;
  }
};

export default userReducer;
