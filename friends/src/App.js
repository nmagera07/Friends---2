import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div className="App">
      <FriendsList />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
