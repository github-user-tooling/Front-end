import constants from "../constants";

const initialState = {
  noteSearchTrigger: false,
  notesSearchInput: "",
  notesList: []

};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.TRIGGER_NOTES_SEARCH:
      return {
        ...state,
        noteSearchTrigger: !state.noteSearchTrigger
      }

    case constants.SET_NOTES_SEARCH:
      return {
        ...state,
        notesSearchInput: payload.query
      }

    case constants.FILTER_NOTES:
      return {
        ...state,
        notesList: payload.filteredNotes
      }
    default: 
      return state;
  }
}

export default searchReducer;