import React, { useState, useEffect } from "react";
// Styles
import "./searchContainer.scss";
// Redux
import { connect } from "react-redux";
// Components
import SearchBar from "../searchBar/SearchBar";
import SearchCard from "./SearchCard";

function SearchContainer(props) {
  const [searchResults, setSearchResults] = useState({
    results: []
  });

  useEffect(() => {
    setSearchResults({
      ...searchResults.results,
      results: props.searchResults.filter(u => {
        return !props.existingFollowers.some(f => f.login === u.login);
      })
    });
  }, [props.searchResults]);

  return (
    <div id="dashboard-search">
      <SearchBar />
      <div id="search__results">
        <div>
          {searchResults.results.length > 0 &&
            searchResults.results.map((result, key) => (
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
