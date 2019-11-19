import React, { useEffect } from 'react'
// Redux
import { connect } from "react-redux";
// Styles
// Components
import Nav from "../../components/dashboard/nav/Nav";
import DetailCard from '../../components/detailPage/userDetailCard/DetailCard';
//Actions
import { dashboardData } from "../../redux/actions/dataActions";

function UserDetails(props) {
  useEffect(() => {
    props.dashboardData();
  }, []);

  return (
    <div>
      <Nav />
      <DetailCard />
    </div>
  )
}

const mapStateToProps = state => ({
  state
});

const mapActionsToProps = {
  dashboardData
};

export default connect(mapStateToProps, mapActionsToProps)(UserDetails);
