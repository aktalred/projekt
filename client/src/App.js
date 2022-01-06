import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Realizacja zadania nr 1 w ramach laboratorium PFSwCO<br />
          Grzegorz Derlatka
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/calc">Fib Calc</Link>
          <Link to="/docs">Documentation</Link>
        </header>
        <div>
          <Route exact path="/calc" component={Fib} />
          <Route path="/docs" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
