import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
//Styles
import './NotesModal.scss';
//Components
import AddNote from './AddNote';
import EditNote from './EditNote';
import Note from './Note';
// Actions
import { toggleModal, setModalView, getNotes } from "../../../redux/actions/userActions";
import { filterNotes, setNotesSearch, triggerNotesSearch } from "../../../redux/actions/searchActions";
// Modal
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NotesModal(props) {
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    if (props.isOpen) props.getNotes(props.userID);
  }, [props.isOpen]);

  useEffect(() => {
    props.filterNotes(props.notes);
  }, [props.notes]);

  const editNoteHandler = note => {
    props.setModalView('edit');
    setNoteToEdit(note);
  }

  const handleSearching = e => {
    if (e.target.value.length < 20) {
      props.setNotesSearch(e.target.value);
    }
    // length validation
  }

  const checkSubmit = e => {
    props.triggerNotesSearch(!props.trigger);
  }

  useEffect(() => {
    props.filterNotes(props.notes.filter(e => e.title.toLowerCase().includes(props.searchInput.toLowerCase())));
  }, [props.trigger]);

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>
        {props.modalView === 'default' ?
          <>
            <span>Notes</span>
            <button onClick={() => props.setModalView('add')} className="fancy-boi">Add Note</button>
          </> : null
        }

        {props.modalView === 'add' ?
          <>
            <span>Add Note</span>
            <button onClick={() => props.setModalView('default')} className="fancy-boi">View Notes</button>
          </> : null
        }

        {props.modalView === 'edit' ?
          <>
            <span>Edit Note</span>
            <button onClick={() => props.setModalView('default')} className="fancy-boi">View Notes</button>
          </> : null
        }
      </ModalHeader>
      <ModalBody>
        {props.modalView === 'default' ?
          <>
            <form onSubmit={checkSubmit}>
              <input placeholder="Search Notes" onChange={handleSearching} value={props.searchInput} required />
            </form>

            {props.notesList.map((note, idx) => <Note key={idx} note={note} edit={editNoteHandler} />)}
          </> : null
        }

        {props.modalView === 'add' ?
          <AddNote userID={props.userID} setModalView={props.setModalView} /> : null
        }

        {props.modalView === 'edit' ?
          <EditNote note={noteToEdit} setModalView={props.setModalView} /> : null
        }
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = state => ({
  userID: state.Data.userID,
  isOpen: state.User.notesModal.isOpen,
  modalView: state.User.notesModal.view,
  notes: state.User.notesModal.notes,

  trigger: state.Search.noteSearchTrigger,
  searchInput: state.Search.notesSearchInput,
  notesList: state.Search.notesList

});

const mapActionsToProps = {
  toggleModal,
  setModalView,
  getNotes,

  triggerNotesSearch,
  setNotesSearch,
  filterNotes
};

export default connect(mapStateToProps, mapActionsToProps)(NotesModal);
