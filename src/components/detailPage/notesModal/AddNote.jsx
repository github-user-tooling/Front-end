import React, { useState } from 'react';

import { connect } from "react-redux";

import { addNote } from "../../../redux/actions/userActions";

const AddNote = (props) => {
  console.log('AddNote ID', props.userID);
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const handleInput = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('To Submit', inputs);
    props.addNote(props.userID, inputs);
    props.changeView();
  }

  return (
    <form className="add-notes" onSubmit={handleSubmit}>
      <input type="text" name="title" value={inputs.title} onChange={handleInput} />
      <textarea rows="10" name="body" value={inputs.body} onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({

});

const mapActionsToProps = {
  addNote,
};

export default connect(mapStateToProps, mapActionsToProps)(AddNote);
