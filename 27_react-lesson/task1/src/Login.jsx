import React from 'react';
import Logout from './Logout';
import Spinner from './Spinner';

// input: func
// output: JSX
const Login = (props) => {
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
