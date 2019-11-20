import React, { useState, useEffect } from 'react';
//Redux
import { connect } from "react-redux";
//Styles
import './EditNote.scss';
//Actions
import { editNote } from "../../../redux/actions/userActions";

const EditNote = (props) => {
  console.log('EditNote ID', props.note.id);
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    body: ''
  });

  useEffect(() => {
    setInputs({
      id: props.note.id,
      title: props.note.title,
      body: props.note.body
    });
  }, []);

  const handleInput = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('To Submit', inputs);
    props.editNote(inputs);
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
  editNote,
};

export default connect(mapStateToProps, mapActionsToProps)(EditNote);
