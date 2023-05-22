
import React from 'react';
import ReactDOM from 'react-dom/client';
// reducers export
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";

import App from './App';
// CSS Exports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// creating store
const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  // </React.StrictMode>
);



