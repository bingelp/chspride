import React from 'react';
import './css/App.css';
import $ from 'jquery';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';


const App = ({ children }) => {
  return (
    <div className="ms-site-container">
      <Header/>
      <Nav/>
      {children}
    </div>
  );
};

export default App;
