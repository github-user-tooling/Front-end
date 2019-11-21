import React from 'react';
import constants from '../../redux/constants'
import './login.scss';

function Login() {
  return (
    <div id="login">
      <h1>GitBook Login</h1>
      <a href={`${constants.BASE_URL_POST_PROD}/auth`}>Sign in with GitHub </a>
    </div>
  );
}

export default Login;
