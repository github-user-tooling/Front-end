import React, { useEffect } from "react";
// Styles
import "./demo.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { demoAction } from "../../redux/actions/dataActions";

function Demo(props) {
  useEffect(() => {
    props.demoAction();
  }, []);

  return (
    <div>
      <h1>Demo Component</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  demoAction
};

export default connect(mapStateToProps, mapActionsToProps)(Demo);
