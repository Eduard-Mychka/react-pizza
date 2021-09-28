import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import store  from './redux/store'
import { Provider } from 'react-redux';

import './scss/index.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

