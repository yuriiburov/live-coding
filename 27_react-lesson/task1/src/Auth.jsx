import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
/**
 * show login by default
 * after login click - show spinner for 2 sec
 * after 2 sec - show logout
 * after logout click - show login
 */
class Auth extends React.Component {
  // isLoggedIn: boolean
  // isLogging: boolean

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoggedIn: false,
  //     isLogging: true,
  //   };
  // }

  state = {
    isLoggedIn: false,
    isLoading: false,
  };

  handleLoginClick = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: false,
      });
    }, 2000);
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    } else if (isLoggedIn) {
      return <Logout onLogout={this.handleLogoutClick} />;
    }

    return <Login onLogin={this.handleLoginClick} />;
  }
}

export default Auth;
