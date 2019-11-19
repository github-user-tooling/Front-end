import React, { useEffect } from "react";
// Styles
import './tendencies.scss';
// Redux
import { connect } from "react-redux";
// Actions
import { tendenciesAction } from "../../../redux/actions/dataActions";

function TendenciesCard(props) {
  useEffect(() => {
    props.tendenciesCardAction(props.state.userID);
  })

  return (
    <div>
      <p>props.state.tendenciesData.mostOftenHour</p>
      <p>props.state.tendenciesData.mostOftenDay</p>
      <p>props.state.tendenciesData.mostUsedLang</p>
    </div>
  )
}

const mapState = state => ({
  state
});

const mapActions = {
  tendenciesAction
};

export default connect(mapState, mapActions)(TendenciesCard);