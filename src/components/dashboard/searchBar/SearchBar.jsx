import React, { useState } from "react";
// Styles
import "./searchBar.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { searchUser } from "../../../redux/actions/dataActions";

import { css } from "@emotion/core";
// First way to import
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function SearchBar(props) {
  let [searchBar, setSearchBar] = useState({
    query: ""
  });

  const handleChange = e => {
    setSearchBar({
      ...searchBar,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.searchUser(searchBar.query);
  };

  return (
    <div id="dashboard-searchBar">
      <h1>Git Search</h1>
      <form onSubmit={handleSubmit}>
        {props.dataaCheck ? (
          <input
            type="text"
            name="query"
            value={searchBar.query}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        ) : (
          <PacmanLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={"#25c425"}
          />
        )}

        <button type="submit" hidden></button>
      </form>
    </div>
  );
}

const mapState = state => ({
  dataCheck: state.Data.dashboardData.following
});

const mapProps = {
  searchUser
};

export default connect(mapState, mapProps)(SearchBar);
