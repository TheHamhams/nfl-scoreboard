import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { All, Home, NavBar, Profile } from './components/index'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import { Auth0Provider } from "@auth0/auth0-react"
import React from 'react';
import ReactDOM from 'react-dom';
import {firebaseConfig} from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uyleygzluer72ux1.us.auth0.com"
      clientId='pS8TFD4OxBNuxF8XrrNQZJ7PeApmhDrA'
      redirectUri={window.location.origin}
    >
    <Router>
      <Routes>
        <Route path='/' element={[<NavBar />, <Home/>]} />
        <Route path='/all' element={[<NavBar />, <All />]} />
        <Route path='/profile' element={[<NavBar />, <Profile />]} />
      </Routes>
    </Router>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);