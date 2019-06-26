import React from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';

class Login extends React.Component {
      state = {
        credentials: {
            username: '',
            password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

   login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/protected');
      }
    });
  };

    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <p>Username: </p>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Password: </p>
                    <input
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    ></input>
                    <button>
                        {this.props.loggingIn ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                         'Log in'
                        )}
                    </button>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);