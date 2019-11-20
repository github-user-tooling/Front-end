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
// Modal
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NotesModal(props) {
  const [view, setView] = useState('view');
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    props.getNotes(props.userID)
  }, []);

  const editNoteHandler = note => {
    setView('edit');
    setNoteToEdit(note);
    console.log('Note to edit:', note);
  }

  const changeView = () => {
    if (view === 'view') {
      setView('add');
    } else {
      setView('view');
    }
  }

  const handleSearching = e => {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    setNotesList(props.notes.filter(e => {

      return e.title.toLowerCase().includes(searchInput.toLowerCase());
    }));
    console.log(notesList, "Notes List");
  }, [searchInput])

  useEffect(() => {
    
  }, [notesList])



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
          ? <input placeholder="Search Notes" onChange={handleSearching} value={searchInput} />
          : null
        }
      
        {console.log(props.notes)}

        {view === 'view' ? props.notes.map((note, idx) => (
          <Note key={idx} note={note} edit={editNoteHandler} />
        )) : view === 'add' ? <AddNote userID={props.userID} changeView={changeView} /> :
            <EditNote note={noteToEdit} changeView={changeView} />
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
  userID: state.Data.userID
});

const mapActionsToProps = {
  toggleModal,
  getNotes
};

export default connect(mapStateToProps, mapActionsToProps)(NotesModal);
