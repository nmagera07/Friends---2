import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage'
import FriendsList from './components/FriendsList'
import { Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
  );
}

export default App;
