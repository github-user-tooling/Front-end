import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { axiosWithAuth } from './axiosWithAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get('https://staging-master-5ton9t2hfmasnxc.herokuapp.com/auth/active')
      .then(res => setIsLogged(true))
      .catch(err => setIsLogged(false));
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
export default PrivateRoute;