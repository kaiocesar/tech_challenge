import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Songs from './components/Songs';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/songs' element={<Songs />} />
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);