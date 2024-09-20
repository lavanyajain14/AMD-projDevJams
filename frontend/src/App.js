import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import UserDashboard from './components/UserDashboard';
import StorylineSelectionPage from './components/StorylineSelectionPage';
import LoginPage from './components/LoginPage';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/storylines" component={StorylineSelectionPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
