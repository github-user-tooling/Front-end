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
import { toggleModal, getNotes } from "../../../redux/actions/userActions";
import { filterNotes, setNotesSearch, triggerNotesSearch } from "../../../redux/actions/searchActions";
// Modal
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NotesModal(props) {
  const [view, setView] = useState('view');
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    props.getNotes(props.userID)
  }, []);

  useEffect(() => {
    props.filterNotes(props.notes);
  }, [props.notes]);

  const editNoteHandler = note => {
    setView('edit');
    setNoteToEdit(note);
  }

  const changeView = () => {
    if (view === 'view') {
      setView('add');
    } else {
      setView('view');
    }
  }

  const handleSearching = e => {
    props.setNotesSearch(e.target.value);
  }

  const checkKeyPress = e => {
    if(e.key === "Enter") {
      props.triggerNotesSearch(!props.trigger);
    }
  }

  useEffect(() => {
    props.filterNotes(props.notes.filter(e => {

      return e.title.toLowerCase().includes(props.searchInput.toLowerCase());
    }));

  }, [props.trigger])

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>
        
        {view === 'add' ?
          <>
            <span>Add Note</span>
            <button onClick={changeView}>View Notes</button>
          </>
          :
          <>
            <span>Notes</span>
            
            <button onClick={changeView}>Add Note</button>
          </>}

          
      </ModalHeader>
      <ModalBody>
        {
          view !== 'add'
          ? <input placeholder="Search Notes" onKeyPress={checkKeyPress} onChange={handleSearching} value={props.searchInput} />
          : null
        }

        {
        view === 'view' ? 
        props.notesList.map((note, idx) => (
          <Note key={idx} note={note} edit={editNoteHandler} />
        )) 

        : view === 'add' ? <AddNote userID={props.userID} changeView={changeView} /> 

        : <EditNote note={noteToEdit} changeView={changeView} />
        }
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = state => ({
  isOpen: state.User.modalIsOpen,
  notes: state.User.notes,
  userID: state.Data.userID,

  trigger: state.Search.noteSearchTrigger,
  searchInput: state.Search.notesSearchInput,
  notesList: state.Search.notesList

});

const mapActionsToProps = {
  toggleModal,
  getNotes,

  triggerNotesSearch,
  setNotesSearch,
  filterNotes
};

export default connect(mapStateToProps, mapActionsToProps)(NotesModal);
