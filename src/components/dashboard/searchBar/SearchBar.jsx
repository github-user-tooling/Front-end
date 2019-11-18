import React, { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
  let [searchBar, setSearchBar] = useState({
    query: ""
  });

  const handleChange = e => {
    setSearchBar({
      ...searchBar,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="dashboard-searchBar">
      <h1>Git Search</h1>
      <form>
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

export default SearchBar;
