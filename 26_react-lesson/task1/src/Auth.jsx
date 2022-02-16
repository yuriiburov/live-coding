import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const Auth = () => {
  // isLoggedIn: boolean
  // isLogging: boolean

  return (
    <>
      <Login />
      <Logout />
      <Spinner />
    </>
  );
};

export default Auth;
