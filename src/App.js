import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
      <Route exact path='./' />
      <Route path='./about' />
      <Route path='./contact' />
      <Navigation />	
  </div>
);

export default App;
