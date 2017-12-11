import React from 'react';
import { useStrict } from 'mobx';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-select/dist/react-select.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Only allow state mutations within @action
useStrict(true);


if (navigator.appVersion.includes('Win')) {
  // Adjust browser zoom on load to hand browsers with higher DPIs on Windows
  // https://stackoverflow.com/questions/27122862/force-zoom-level-dpi-scale-with-css-header-tag-or-javascript
  document.querySelector('html').style.zoom = `${1 / window.devicePixelRatio * 100}%`;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
