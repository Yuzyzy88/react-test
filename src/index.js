import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render to app
ReactDOM.render(<App />, document.getElementById('root'));
// Register server workers
registerServiceWorker();
