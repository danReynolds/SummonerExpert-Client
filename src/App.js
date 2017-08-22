import React from 'react'
import 'normalize.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';

const Navigation = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Navigation;
