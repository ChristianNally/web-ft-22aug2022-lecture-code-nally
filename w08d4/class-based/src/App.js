import React from 'react';
import './App.css';

// import UpdateState from './components/state/UpdateState';
import Props from './components/props/Props';
import Lifecycle from './components/lifecycle/Lifecycle';

const App = () => {
  return (
    <div className="App">
      <h1>Monkey Fuzz!!</h1>
      <Props message="the quick brown fox!!!" />

      <Lifecycle />
    </div>
  );
};

export default App;
