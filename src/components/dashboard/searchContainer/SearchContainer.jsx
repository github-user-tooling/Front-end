import React, { useState, useEffect } from "react";
// Styles
import "./searchContainer.scss";
// Redux
import { connect } from "react-redux";
// Components
import SearchBar from "../searchBar/SearchBar";
import SearchCard from "./SearchCard";
// Actions
import { handleSearchResultsLoading } from "../../../redux/actions/dataActions";
// Loader
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";
const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function SearchContainer(props) {
  const [searchResults, setSearchResults] = useState({
    results: []
  });

  useEffect(() => {
    props.handleSearchResultsLoading(false);
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
            props.isLoading === false &&
            searchResults.results.map((result, key) => (
              <SearchCard history={props.history} search={result} key={key} />
            ))}
          {props.isLoading && (
            <BeatLoader
              css={override}
              sizeUnit={"px"}
              size={35}
              color={"cyan"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const mapState = state => ({
  searchResults: state.Data.searchResults,
  existingFollowers: state.Data.dashboardData.following,
  isLoading: state.Data.searchResultsLoading
});

const mapActions = {
  handleSearchResultsLoading
};

export default connect(mapState, mapActions)(SearchContainer);
