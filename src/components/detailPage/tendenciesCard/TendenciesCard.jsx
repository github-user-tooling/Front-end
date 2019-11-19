import React, { useEffect } from "react";
// Styles
import "./tendencies.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { tendenciesAction } from "../../../redux/actions/dataActions";

function TendenciesCard(props) {
  useEffect(() => {
    props.tendenciesAction(props.userID);
  }, []);



  const oftenHour = props.state.Data.tendenciesData.mostOftenHour;
  const timeOfDay = {
    AMPM: "",
    hour: 0
  }
  if (oftenHour > 12) {
    timeOfDay.AMPM = "PM";
    timeOfDay.hour = parseInt(oftenHour) - 12;
  } else {
    timeOfDay.AMPM = "AM";
    timeOfDay.hour = oftenHour;
  }

  const day = props.state.Data.tendenciesData.mostOftenDay
  const weekdayName = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  useEffect(() => {
    console.log(props.state.Data.tendenciesData.mostOftenHour);
  }, [props.state.Data.tendenciesData.mostOftenHour]);

  return (
    <div className="tendenciesCard">
      <div>
        {props.state.Data.tendenciesData.mostOftenHour !== "Undetermined"
          ? (<p>Most Active Hour: {`${timeOfDay.hour} ${timeOfDay.AMPM}`}</p>)
          : null
        }
        {props.state.Data.tendenciesData.mostOftenDay !== "Undetermined"
          ? (<p>Most Active Day: {weekdayName[parseInt(day)]}</p>)
          : null
        }
        {props.state.Data.tendenciesData.mostUsedLang !== "Undetermined"
          ? (<p>Most Used Language: {props.state.Data.tendenciesData.mostUsedLang}</p>)
          : null
        }
        
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});

// ! Wrong!!!!!!!!!!!!! < = mucho bad < = no again < = or you fired
const mapActionsToProps = {
  tendenciesAction
};

export default connect(mapStateToProps, mapActionsToProps)(TendenciesCard);
