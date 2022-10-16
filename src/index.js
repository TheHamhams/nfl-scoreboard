import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, All, NavBar } from './components/index'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={[<NavBar />, <Home/>]} />
        <Route path='/all' element={[<NavBar />, <All />]} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);