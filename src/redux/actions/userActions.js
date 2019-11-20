import constants from '../constants';
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

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
  })
}

export const getNotes = userID => dispatch => {
  axiosWithAuth()
    .get(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/notes/`)
    .then(res => {
      console.log('GET NOTE', res);
      dispatch({
        type: constants.GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}

export const addNote = (userID, note) => dispatch => {
  axiosWithAuth()
    .post(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/user/${userID}/notes/`, note)
    .then(res => {
      console.log('ADD NOTE:', res);
      dispatch({
        type: constants.ADD_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}

export const editNote = (note) => dispatch => {
  console.log('EDITING NOTE:', note);
  const theNote = { title: note.title, body: note.body };
  axiosWithAuth()
    .put(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/notes/${note.id}`, theNote)
    .then(res => {
      console.log('EDIT NOTE:', res);
      dispatch({
        type: constants.EDIT_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}

export const deleteNote = noteID => dispatch => {
  console.log('DELETE NOTE ID', noteID);
  axiosWithAuth()
    .delete(`https://staging-master-5ton9t2hfmasnxc.herokuapp.com/notes/${noteID}`)
    .then(res => {
      console.log('DELETE NOTE:', res);
      dispatch({
        type: constants.DELETE_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}