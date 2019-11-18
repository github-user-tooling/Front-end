import React, { useEffect } from "react";
// Styles
import "./chart.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { chartAction } from "../../redux/actions/dataActions";
// Chart
import { Bar } from 'react-chartjs-2';
// example structure, remove once data is coming in from backend
import ChartObject from './ChartObjectStructure';

function Chart(props) {
  useEffect(() => {
    props.chartAction();
  }, []);

  const barData = {
    labels: ChartObject.months,
    datasets: [
      {
        label: ChartObject.userName,
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,255,255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: ChartObject.commits
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
  state
});

const mapActionsToProps = {
  chartAction
};

export default connect(mapStateToProps, mapActionsToProps)(Chart);

// // Bar Properties
// data: (PropTypes.object | PropTypes.func).isRequired,
// width: PropTypes.number,
// height: PropTypes.number,
// id: PropTypes.string,
// legend: PropTypes.object,
// options: PropTypes.object,
// redraw: PropTypes.bool,
// getDatasetAtEvent: PropTypes.func,
// getElementAtEvent: PropTypes.func,
// getElementsAtEvent: PropTypes.func
// onElementsClick: PropTypes.func, // alias for getElementsAtEvent (backward compatibility)