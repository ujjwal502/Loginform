import React from 'react';
import './App.css';
import FbLogin from './components/FbLogin';
import LoginForm from './components/LoginForm';
import Login from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Login />
      <FbLogin />
      <LoginForm />
    </div>
  );
}

export default App;
