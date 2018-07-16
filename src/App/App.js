import React from 'react';
import './css/App.css';
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

const navigation =
{
  "left": [
    {
      "title": "About Us",
      "icon": "fa-flag-o",
      "key": "about-us",
      "pages": [
        {
          "key": "board-of-directors",
          "to": "/board-of-directors",
          "title": "Board Of Directors",
          "icon": "fa-group"
        },
        {
          "key": "bylaws",
          "to": "/bylaws",
          "title": "Bylaws",
          "icon": "fa-legal",
          "divide": true
        },
        {
          "key": "serve-on-the-board",
          "to": "/serve-on-the-board",
          "title": "Serve on the Board",
          "icon": "fa-user-plus"
        },
        {
          "key": "board-roles",
          "to": "/board-roles",
          "title": "Board Roles",
          "icon": "fa-puzzle-piece"
        }
      ]
    },
    {
      "title": "Sponsors",
      "icon": "fa-heart-o",
      "key": "sponsors",
      "pages": [
        {
          "key": "our-sponsors",
          "to": "/our-sponsors",
          "title": "2018 Sponsors",
          "icon": "fa-heart"
        },
        {
          "key": "become-a-sponsor",
          "to": "/become-a-sponsor",
          "title": "Become a Sponsor",
          "icon": "fa-handshake-o"
        }
      ]
    },
    {
      "title": "Get Involved",
      "icon": "fa-thumbs-o-up",
      "key": "get-involved",
      "pages": [
        {
          "key": "friends-of-pride",
          "to": "/friends-of-pride",
          "title": "Become a Friend of Pride",
          "icon": "fa-star"
        },
        {
          "key": "join-our-mailing-list",
          "to": "/join-our-mailing-list",
          "title": "Join our Mailing List",
          "icon": "fa-envelope"
        },
        {
          "key": "volunteer",
          "to": "/volunteer",
          "title": "Volunteer",
          "icon": "fa-smile-o"
        },
        {
          "key": "serve-on-the-board",
          "to": "/serve-on-the-board",
          "title": "Serve on the Board",
          "icon": "fa-user-plus",
          "divide": true
        },
        {
          "key": "purchase-pride-guide-ad",
          "to": "/purchase-pride-guide-ad",
          "title": "Purchase a Pride Guide Ad",
          "icon": "fa-book"
        },
        {
          "key": "vendor-registration",
          "to": "/vendor-registration",
          "title": "Register to Be a Vendor",
          "icon": "fa-map-marker"
        },
        {
          "key": "participate-in-parade",
          "to": "/participate-in-parade",
          "title": "Partcipate in Parade",
          "icon": "fa-flag"
        }
      ]
    },
    {
      "title": "Events",
      "icon": "fa-calendar-o",
      "key": "events",
      "pages": [
        {
          "key": "toast-to-equality",
          "to": "http://toasttoequality.com/?utm_source:charleston_pride",
          "title": "Toast to Equality",
          "icon": "fa-glass"
        },
        {
          "key": "rainbows",
          "to": "/events/rainbows",
          "title": "Rainbows Pride Night",
          "icon": "fa-bullhorn"
        },
        {
          "key": "pageant",
          "to": "/events/pageant",
          "title": "Empress and Emperor Pageant",
          "icon": "fa-trophy",
          "divide": true
        },
        {
          "key": "cruise",
          "to": "/events/pride-on-the-harbor",
          "title": "Pride On The Harbor",
          "icon": "fa-ship"
        },
        {
          "key": "festival",
          "to": "/events/pride/festival",
          "title": "Festival Information",
          "icon": "fa-map"
        },
        {
          "key": "parade",
          "to": "/events/pride/parade",
          "title": "Parade Information",
          "icon": "fa-flag"
        }
      ]
    }
  ],
  "right": [
    {
      "key": "toast-to-equality2",
      "to": "http://toasttoequality .com/?utm_source=charleston_pride",
      "title": "Toast to Equality",
      "icon": "fa-glass",
      "background": "warning"
    },
    // {
    //   "key": "pride-2018",
    //   "to": "/pride",
    //   "title": "Pride 2018",
    //   "icon": "fa-flag",
    //   "background": "warning"
    // },
    {
      "key": "donate",
      "to": "/donate",
      "title": "Donate",
      "icon": "fa-heart-o",
      "background": "royal"
    }
  ]
}

const App = ({ children }) => {
  return (
      <div>
        <div className="ms-site-container">
          <Header/>
          <Nav left={navigation.left} right={navigation.right}/>
          {children}
          <Footer/>
        </div>
        <Sidebar top={navigation.left} bottom={navigation.right}/>
      </div>
  );
};

export default App;
