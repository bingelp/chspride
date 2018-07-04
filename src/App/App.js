import React from 'react';
import './css/App.css';
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';


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
