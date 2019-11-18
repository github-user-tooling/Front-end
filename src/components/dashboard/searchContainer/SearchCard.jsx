import React, { useState } from "react";
import "./searchCard.scss";

function SearchCard() {
  let [btnStatus, setBtnStatus] = useState({
    favoriteActive: false
  });

  const handleClick = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setBtnStatus({
      ...btnStatus,
      favoriteActive: !btnStatus.favoriteActive
    });
  };

  return (
    <div id="dashboard-resultsCard">
      <h1 onClick={handleClick}>Username</h1>
      <i
        className={
          btnStatus.favoriteActive ? "fa fa-star rCActive" : "fa fa-star"
        }
        name="favoriteActive"
        onClick={handleChange}
      />
    </div>
  );
}

export default SearchCard;
