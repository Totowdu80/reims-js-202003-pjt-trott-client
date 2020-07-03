import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import InstructionsIndex from './components/Instructions/InstructionsIndex';
import RegisterIndex from './components/Register/RegisterIndex';
import Login from './components/Login/Login';
import TrottIndex from './components/TrottMap/TrottIndex';
<<<<<<< HEAD
import Menu from './components/Menu/Menu';
=======
import Scan from './components/TrottMap/Scan'
>>>>>>> d1d15c74f1bdb11e9740fdac669c74fc4781a0e8

function App() {
  return (
    <div className="bg_app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/instructions">
            <InstructionsIndex />
          </Route>

          <Route path="/register">
            <RegisterIndex />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/trott">
            <TrottIndex />
          </Route>

          <Route path="/map/Menu">
            <Menu />
          </Route>
          <Route path="/Scan">
            <Scan />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
