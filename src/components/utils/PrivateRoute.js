import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { axiosWithAuth } from './axiosWithAuth';

import { loginUser, logoutUser } from "../../redux/actions/userActions";

import constants from "../../redux/constants"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = useState(rest.userLogin.isLogged || null);

  useEffect(() => {
    if (rest.userLogin.isLogged === null || !rest.userLogin.isLogged) {
      axiosWithAuth()
        .get(`${constants.BASE_URL_POST_PROD}/auth/active`)
        .then(res => {
          setIsLogged(true)
          rest.loginUser();
        })
        .catch(err => {
          setIsLogged(false);
          rest.logoutUser();
        });
    }
  }, []);

  //Fancy loading spinner could be placed here.
  if (isLogged === null) return <></>;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

const mapStateToProps = state => ({
  userLogin: state.User.userLogin
});

const mapActionsToProps = {
  loginUser,
  logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(PrivateRoute);