import React from 'react';
import './css/App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer';
import Sidebar from '../Sidebar';


const App = ({ children }) => {
  return (
      <div>
        <div className="ms-site-container">
          <Header/>
          <Nav/>
          {children}
          <Footer/>
        </div>
        <Sidebar/>
      </div>
  );
};

export default App;
