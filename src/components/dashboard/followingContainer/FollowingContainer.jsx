import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
// Styles
import "./followingContainer.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
// Components
import FollowingCard from "../followingCard/FollowingCard";
// Loader
import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 50% 0 0 25%;
`;

function FollowingContainer(props) {
  const [followingSearch, setFollowingSearch] = useState({
    searchData: [],
    query: ""
  });

  useEffect(() => {
    if (!props.followerData) return;
    setFollowingSearch({
      ...followingSearch,
      searchData: [...props.followerData]
    });
  }, [props.followerData]);

  const handleChange = e => {
    setFollowingSearch({
      ...followingSearch,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (followingSearch.query !== "" && followingSearch.query.trim() === "")
      return;
    if (props.followerData) {
      setFollowingSearch({
        ...followingSearch,
        searchData: props.followerData.filter(u => {
          return u.login
            .toLowerCase()
            .includes(followingSearch.query.trim().toLowerCase());
        })
      });
    }
  };

  return (
    <div id="dashboard-fc">
      <h1>Following</h1>
      <div id="fc__following-wrapper">
        <div id="followingFilter-wrapper">
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="false"
              onChange={handleChange}
              value={followingSearch.query}
              type="text"
              name="query"
            />
            <button type="submit" hidden></button>
          </form>
        </div>
        {props.followerData ? (
          followingSearch.searchData.map((user, key) => (
            <FollowingCard user={user} history={props.history} key={key} />
          ))
        ) : (
          <PacmanLoader
            css={override}
            sizeUnit={"px"}
            size={45}
            color={"cyan"}
          />
        )}
      </div>
    </div>
  );
}

const mapState = state => ({
  followerData: state.Data.dashboardData.following
});

const mapActions = {};

export default connect(mapState, mapActions)(FollowingContainer);
