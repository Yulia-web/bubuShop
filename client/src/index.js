import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

import './styles/index.css';

export const Context = createContext(null);

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      product: new ProductStore(),
    }}>
      <App />
    </Context.Provider>
  </BrowserRouter>,
  root
);
