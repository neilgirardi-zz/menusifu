import React from 'react';
import ReactDOM from 'react-dom';
import './css/vendor/bootstrap-4.css'
import './css/vendor/google-fonts.css';
import Order from './components/Order';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Order />, document.getElementById('root'));
registerServiceWorker();
