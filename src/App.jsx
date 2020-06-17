import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import MyMap from './components/Map/MyMap';
import Form from './components/Form/Form';
import StartCreate from './components/Introduction/StartCreate';
import Sms from './components/SmsVerif/SmsVerif';
import LandingPage from './components/LandingPage/LandingPage';
import Rank from './components/Rank';
import Burger from './components/BurgerMenu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Burger />
            <MyMap />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
          <Route path="/introduction">
            <LandingPage />
          </Route>
          <Route path="/register">
            <StartCreate />
          </Route>
          <Route path="/register?step=...">
            <Form />
          </Route>
          <Route path="/Sms">
            <Sms />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
