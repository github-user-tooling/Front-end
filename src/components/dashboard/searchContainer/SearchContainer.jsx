import React from "react";
// Styles
import "./searchContainer.scss";
// Redux
import { connect } from "react-redux";
// Components
import SearchBar from "../searchBar/SearchBar";
import SearchCard from "./SearchCard";

function SearchContainer(props) {
  return (
    <div id="dashboard-search">
      <SearchBar />
      <div id="search__results">
        <div>
          {props.searchResults.length > 0 &&
            props.searchResults.map((result, key) => (
              <SearchCard history={props.history} search={result} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
}

const mapState = state => ({
  searchResults: state.Data.searchResults,
  existingFollowers: state.Data.dashboardData.following
});

const mapProps = {};

export default connect(mapState, mapProps)(SearchContainer);
