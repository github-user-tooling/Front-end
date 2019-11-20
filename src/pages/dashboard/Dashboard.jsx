import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
// Styles
import "./dashboard.scss";
// Components
import Nav from "../../components/dashboard/nav/Nav";
import FollowingContainer from "../../components/dashboard/followingContainer/FollowingContainer";
import SearchContainer from "../../components/dashboard/searchContainer/SearchContainer";
// Actions
import { dashboardData } from "../../redux/actions/dataActions";
// Bg
import bg from "../../images/mainBg.svg";

function Dashboard(props) {
  useEffect(() => {
    props.dashboardData();
  }, []);

  return (
    <div id="dashboard">
      <Nav />
      <div id="background-img">
        <img src={bg} alt="background image" />
      </div>
      <div id="dashboard-main">
        <FollowingContainer history={props.history} />
        <SearchContainer history={props.history} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  dashboardData
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
