import React, { useState, useEffect } from 'react';
//Redux
import { connect } from "react-redux";
//Styles
import './EditNote.scss';
//Actions
import { editNote } from "../../../redux/actions/userActions";

const EditNote = (props) => {
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
    props.editNote(inputs);
    props.setModalView('default');
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
  editNote,
};

export default connect(mapStateToProps, mapActionsToProps)(EditNote);
