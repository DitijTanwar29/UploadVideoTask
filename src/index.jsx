
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import {Provider} from "react-redux"


// ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore({
  reducer:rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
      </BrowserRouter>

  </Provider>
);


   
  