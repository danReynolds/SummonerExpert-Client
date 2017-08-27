import React from 'react'
import DevTools from 'mobx-react-devtools';
import 'normalize.css';
import { Provider } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Conversation from './pages/Conversation';
import messageListStore from './stores/MessageListStore';

const Navigation = () => (
  <Provider messageListStore={messageListStore}>
    <Router>
      <div>
        {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
        <Route exact path="/" component={Home} />
        <Route path="/conversation" component={Conversation} />
      </div>
    </Router>
  </Provider>
);

export default Navigation;
