import React from "react";
import "./css/App.css";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const navigation = {
  left: [
    {
      title: "About Us",
      icon: "fa-flag-o",
      key: "about-us",
      pages: [
        {
          key: "board-of-directors",
          to: "/board-of-directors",
          title: "Board Of Directors",
          icon: "fa-group"
        },
        {
          key: "bylaws",
          to: "/bylaws",
          title: "Bylaws",
          icon: "fa-legal",
          divide: true
        },
        {
          key: "serve-on-the-board",
          to: "/serve-on-the-board",
          title: "Serve on the Board",
          icon: "fa-user-plus"
        },
        {
          key: "board-roles",
          to: "/board-roles",
          title: "Board Roles",
          icon: "fa-puzzle-piece"
        }
      ]
    },
    {
      title: "Sponsors",
      icon: "fa-heart-o",
      key: "sponsors",
      pages: [
        {
          key: "our-sponsors",
          to: "/our-sponsors",
          title: "Our Sponsors",
          icon: "fa-heart"
        },
        {
          key: "become-a-sponsor",
          to: "/become-a-sponsor",
          title: "Become a Sponsor",
          icon: "fa-handshake-o"
        }
      ]
    },
    {
      title: "Get Involved",
      icon: "fa-thumbs-o-up",
      key: "get-involved",
      pages: [
        {
          key: "friends-of-pride",
          to: "/friends-of-pride",
          title: "Become a Friend of Pride",
          icon: "fa-star"
        },
        {
          key: "join-our-mailing-list",
          to: "/join-our-mailing-list",
          title: "Join our Mailing List",
          icon: "fa-envelope"
        },
        {
          key: "volunteer",
          to: "/volunteer",
          title: "Volunteer",
          icon: "fa-smile-o"
        },
        {
          key: "donate",
          to: "/donate",
          title: "Donate",
          icon: "fa-heart"
        },
        {
          key: "serve-on-the-board",
          to: "/serve-on-the-board",
          title: "Serve on the Board",
          icon: "fa-user-plus"
        },
        {
          key: "store",
          to: "/store",
          title: "Pride Store",
          icon: "fa-shopping-cart"
        },
        {
          key: "amazon",
          to: "https://smile.amazon.com/ch/27-4256750",
          title: "AmazonSmile",
          icon: "fa-amazon",
          divide: true
        },
        {
          key: "purchase-pride-guide-ad",
          to: "/purchase-pride-guide-ad",
          title: "Purchase a Pride Guide Ad",
          icon: "fa-book"
        },
        {
          key: "vendor-registration",
          to: "/vendor-registration",
          title: "Register to Be a Vendor",
          icon: "fa-map-marker"
        },
        {
          key: "participate-in-parade",
          to: "/participate-in-parade",
          title: "Partcipate in Parade",
          icon: "fa-flag"
        }
      ]
    },
    {
      title: "Events",
      icon: "fa-calendar-o",
      key: "events",
      pages: [
        {
          key: "rainbows",
          to: "/rainbows",
          title: "Rainbows Pride Night (8/14)",
          icon: "fa-bullhorn"
        },
        {
          key: "pageant",
          to: "pageant",
          title: "Empress and Emperor Pageant (8/31)",
          icon: "fa-trophy",
          divide: true
        },
        {
          key: "lgbtlol",
          to: "/lol",
          title: "LGBTLOL (9/13)",
          icon: "fa-microphone"
        },
        {
          key: "parade",
          to: "parade",
          title: "Pride Parade (9/14)",
          icon: "fa-flag"
        },
        {
          key: "festival",
          to: "/festival",
          title: "Pride Festival (9/14)",
          icon: "fa-map"
        },
        {
          key: "prism",
          to: "/prism",
          title: "Prism (9/14)",
          icon: "fa-music"
        },
        {
          key: "last-call",
          to: "/last-call",
          title: "Last Call (9/14)",
          icon: "fa-hourglass-end",
          divide: true
        },
        {
          key: "pride",
          to: "/pride",
          title: "Pride Week (9/7 - 9/14)",
          icon: "fa-flag",
          background: "royal"
        }
      ]
    }
  ],
  right: [
    {
      key: "pride-2019",
      to: "/pride",
      title: "Pride Week 2019",
      icon: "fa-flag",
      background: "warning"
    }
  ]
};

const App = ({ children }) => {
  return (
    <div>
      <div className="ms-site-container">
        <Header />
        <Nav left={navigation.left} right={navigation.right} />
        {children}
        <Footer />
      </div>
      <Sidebar top={navigation.left} bottom={navigation.right} />
    </div>
  );
};

export default App;
