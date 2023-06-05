import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Basket from './components/pages/Basket';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Product from './components/pages/Product';
import Products from './components/pages/Products';
import Registration from './components/pages/Register';

import { Context } from './index';

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth ? <Route index element={<Home />} /> : null}
      {user.isAuth ? <Route path="/basket" element={<Basket />} /> : null}
      {user.isAuth ? <Route path="/product/:id" element={<Product />} /> : null}
      {user.isAuth ? <Route path="/login" element={<Login />} /> : null}
      {user.isAuth ? <Route path="/registration" element={<Registration />} /> : null}
      {user.isAuth ? <Route path="/products" element={<Products />} /> : null}

      {!user.isAuth ? <Route index element={<Home />} /> : null}
      {!user.isAuth ? <Route path="/login" element={<Login />} /> : null}
      {!user.isAuth ? <Route path="/registration" element={<Registration />} /> : null}
    </Routes>
  );
};

export default AppRouter;
