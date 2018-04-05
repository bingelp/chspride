import React, { Component } from 'react';
import './css/App.css';
import Header from '../Header/Header'

const App = ({ children }) => {
  return (
    <div className="ms-site-container">
      <Header />
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default App;
