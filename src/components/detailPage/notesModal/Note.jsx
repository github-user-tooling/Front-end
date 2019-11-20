import React from 'react';
//Redux
import { connect } from "react-redux";
//Styles
import './Note.scss';
//Actions
import { deleteNote } from "../../../redux/actions/userActions";

const Note = (props) => {
  return (
    <div className="note">
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <div className="note-buttons">
        <button onClick={() => props.edit(props.note)}>Edit Note</button>
        <button onClick={() => props.deleteNote(props.note.id)}>Delete Note</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

});

const mapActionsToProps = {
  deleteNote
};

export default connect(mapStateToProps, mapActionsToProps)(Note);