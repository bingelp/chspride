import React from 'react';
import './css/App.css';
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { ExternalLink} from '../components/LinkUtil'

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
          "key": "cruise",
          "to": "/events/pride-on-the-harbor",
          "title": "Pride On The Harbor",
          "icon": "fa-ship"
        },
        {
          "key": "lgbtlol",
          "to": "/events/pride/lgbtlol",
          "title": "LGBTLOL",
          "icon": "fa-microphone"
        },
        {
          "key": "tour",
          "to": "/events/pride/real-rainbow-row-tour",
          "title": "Real Rainbow Row Tour",
          "icon": "fa-map-marker"
        },
        {
          "key": "parade",
          "to": "/events/pride/parade",
          "title": "Pride Parade",
          "icon": "fa-flag"
        },
        {
          "key": "festival",
          "to": "/events/pride/festival",
          "title": "Pride Festival",
          "icon": "fa-map"
        },
        {
          "key": "prism",
          "to": "/events/pride/prism-party",
          "title": "Prism Party",
          "icon": "fa-music"
        }
      ]
    }
  ],
  "right": [
    {
      "key": "pride-2018",
      "to": "/pride",
      "title": "Pride Week 2018",
      "icon": "fa-flag",
      "background": "warning"
    },
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
          <div className="wrap bg-warning color-dark">
      <div className="container text-center">
          <h3>Due to inclement weather in the Charleston area, upcoming Pride Week events are subject to change. Please stay tuned on <ExternalLink color="white" to="https://facebook.com/charlestonpride/">Facebook</ExternalLink>, <ExternalLink color="white" to="https://instagram.com/charlestonpride/">Instagram</ExternalLink>, and <ExternalLink color="white" to="https://twitter.com/charlestonpride/">Twitter</ExternalLink> for the most up to date information on this week's festivities! </h3>
      </div>
  </div>
          {children}
          <Footer/>
        </div>
        <Sidebar top={navigation.left} bottom={navigation.right}/>
      </div>
  );
};

export default App;
