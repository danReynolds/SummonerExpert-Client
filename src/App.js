import React from 'react'
import DevTools from 'mobx-react-devtools';
import 'normalize.css';
import { StyleSheet, css } from 'aphrodite';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Conversation from './pages/Conversation';
import messageListStore from './stores/MessageListStore';
import Navbar from './components/Navbar';
import { colors } from './assets/styles/Common';

const styles = StyleSheet.create({
  rootContainer: {
    background: colors.darkBlue,
  },
});

const Navigation = () => (
  <Provider messageListStore={messageListStore}>
    <Router>
      <div className={css(styles.rootContainer)}>
        {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/conversation" component={Conversation} />
      </div>
    </Router>
  </Provider>
);

export default Navigation;
