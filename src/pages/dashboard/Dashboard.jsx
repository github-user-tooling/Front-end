import React from "react";
import { connect } from "react-redux";
// Styles
import "./dashboard.scss";
// Actions 



function Dashboard(props) { 
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  //   testQuery
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
