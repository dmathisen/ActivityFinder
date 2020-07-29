import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

import Index from './Components/Index/Index';
import Activity from './Components/Activity/Activity';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Navigation/>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/activity/:activityType" component={Activity} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
