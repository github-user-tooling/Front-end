import React, { useState } from 'react';
//Redux
import { connect } from "react-redux";
//Styles
import './AddNote.scss';
//Actions
import { addNote } from "../../../redux/actions/userActions";

const AddNote = (props) => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const handleInput = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addNote(props.userID, inputs);
    props.changeView();
  }

  return (
    <form className="add-notes" onSubmit={handleSubmit}>
      <label>
        Note Title:
      <input type="text" name="title" value={inputs.title} onChange={handleInput} />
      </label>
      <label>
        Note Text:
      <textarea rows="10" name="body" value={inputs.body} onChange={handleInput} />
      </label>
      <button type="submit" className="fancy-boi">Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
});

const mapActionsToProps = {
  addNote,
};

export default connect(mapStateToProps, mapActionsToProps)(AddNote);
