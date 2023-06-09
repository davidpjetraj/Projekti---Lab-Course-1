import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Users from './Users';
import UpdateUsers from './pages/UpdateUsers';
import Products from './Products';
import AddProducts  from './AddProducts';
import Fatura from './Fatura';
import AddUsers from './pages/AddUsers';
import UpdateProducts from './pages/UpdateProducts';
import UpdateFatura from './pages/UpdateFatura';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/' element={ <Home /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/add-users' element={ <AddUsers /> } />
      <Route path='/updateUsers/:id' element={ <UpdateUsers /> } />
      <Route path='/products' element={ < Products /> } />
      <Route path='/products/add-products' element={ < AddProducts /> } />
      <Route path='/updateProducts/:id' element={ <UpdateProducts /> } />
      <Route path='/fatura' element={ < Fatura /> } />
      <Route path='/updateFatura/:id' element={ <UpdateFatura /> } />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

