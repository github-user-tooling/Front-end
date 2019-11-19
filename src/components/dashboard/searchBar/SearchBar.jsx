import React, { useState } from "react";
// Styles
import "./searchBar.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { searchUser } from "../../../redux/actions/dataActions";

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
        <input
          type="text"
          name="query"
          value={searchBar.query}
          onChange={handleChange}
          placeholder="Enter Username"
        />

        <button type="submit" hidden></button>
      </form>
    </div>
  );
}

const mapState = state => ({
  state
});

const mapProps = {
  searchUser
};

export default connect(mapState, mapProps)(SearchBar);
