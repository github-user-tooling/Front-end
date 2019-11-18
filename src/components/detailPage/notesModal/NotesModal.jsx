// demo file structure immigrated from Matt's demo

import React, { useEffect, useState } from "react";
// Styles
import "./demo.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { demoAction } from "../../redux/actions/dataActions";
// Modal
import { Modal } from 'reactstrap';

function NotesModal(props) {

  // Just an example, can remove this once state is received via mapStateToProps via Redux
  const [toggleOpen, setToggleOpen] = useState(false);
  // isOpen property in Modal checks toggleOpen state and determines whether Modal is opened on page


  useEffect(() => {
    props.demoAction();
  }, []);

  return (
    <Modal isOpen={toggleOpen} toggle={setToggleOpen}>
      <ModalHeader toggle={setToggleOpen}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  demoAction
};

export default connect(mapStateToProps, mapActionsToProps)(NotesModal);
