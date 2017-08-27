import React from 'react';
import { useStrict } from 'mobx';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Only allow state mutations within @action
useStrict(true);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
