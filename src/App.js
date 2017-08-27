import React from 'react'
import DevTools from 'mobx-react-devtools';
import 'normalize.css';
import { Provider } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';
import messageListStore from './stores/MessageListStore';

const Navigation = () => (
  <Provider messageListStore={messageListStore}>
    <Router>
      <div>
        <DevTools />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  </Provider>
);

export default Navigation;
