import React, { useEffect } from "react";
// Styles
import "./chart.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { chartAction } from "../../../redux/actions/dataActions";
// Chart
import { Bar } from 'react-chartjs-2';

function Chart(props) {
  useEffect(() => {
    props.chartAction(props.userID);
  }, []); 

  const barData = {
    labels: props.chartData.months,
    datasets: [
      {
        label: `${props.username}'s commits`,
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,255,255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: props.chartData.commits
      }
    ]
  };

  return (
    <div className="barCont">
      <Bar
        data={barData}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  chartData: state.Data.chartData
});

const mapActionsToProps = {
  chartAction
};

export default connect(mapStateToProps, mapActionsToProps)(Chart); 