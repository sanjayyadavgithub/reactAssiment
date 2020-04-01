import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Tracker from './components/Tracker';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile/>
      <Tracker />
      <Card/>
    </div>
  );
}

export default App;
