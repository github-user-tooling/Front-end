import React from "react";
import "./searchContainer.scss";
import SearchBar from "../searchBar/SearchBar";
import SearchCard from "./SearchCard";

export default function SearchContainer() {
  return (
    <div id="dashboard-search">
      <SearchBar />
      <div id="search__results">
        <div>
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </div>
      </div>
    </div>
  );
}
