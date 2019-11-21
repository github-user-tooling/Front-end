import constants from '../constants';

export const triggerNotesSearch = () => dispatch => {
  dispatch({
    type: constants.TRIGGER_NOTES_SEARCH
  })
}

export const setNotesSearch = searchQuery => dispatch => {
  dispatch({
    type: constants.SET_NOTES_SEARCH,
    payload: {
      query: searchQuery
    }
  })
}

export const filterNotes = notes => dispatch => {
  dispatch({
    type: constants.FILTER_NOTES,
    payload: {
      filteredNotes: notes
    }
  })
}