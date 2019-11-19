import React, { useEffect } from "react";
// Styles
import './tendencies.scss';
// Redux
import { connect } from "react-redux";
// Actions
import { tendenciesAction } from "../../../redux/actions/dataActions";

function TendenciesCard(props) {
  useEffect(() => {
    props.tendenciesCardAction(props.userID);
  })

  return (
    <div className="tendenciesCard">
      <ul>
        <li>props.state.tendenciesData.mostOftenHour</li>
        <li>props.state.tendenciesData.mostOftenDay</li>
        <li>props.state.tendenciesData.mostUsedLang</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  state
});

const mapStateToProps = {
  tendenciesAction
};

export default connect(mapStateToProps, mapStateToProps)(TendenciesCard);