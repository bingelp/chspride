import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import App from "./App/App";
import Home from "./pages/Home/Home";
import Sponsorships from "./pages/Sponsorships/Sponsorships";
import Sponsors from "./pages/Sponsors/Sponsors";
import Board from "./pages/Board/Board";
import BoardRoles from "./pages/Board/BoardRoles";
import ServeOnBoard from "./pages/Board/ServeOnBoard";
import Bylaws from "./pages/Bylaws/Bylaws";
import Donate from "./pages/Donate/Donate";
import Parade from "./pages/Parade/Parade";
import Festival from "./pages/Festival/Festival";
import Vendor from "./pages/Festival/Vendor/Vendor";
import Volunteer from "./pages/Volunteer/Volunteer";
import Cruise from "./pages/Cruise/Cruise";
import Friends from "./pages/Friends/Friends";
import MailingList from "./pages/MailingList/MailingList";
import PrideGuideAd from "./pages/PrideGuide/Ad";
import PrideGuide from "./pages/PrideGuide/PrideGuide";
import Pageant from "./pages/Pageant/Pageant";
import Rainbows from "./pages/Rainbows/Rainbows";
import ScrollToTop from "./components/ScrollToTop";
import Pride from "./pages/Pride/Pride";
import Comedy from "./pages/Comedy/Comedy";
import Prism from "./pages/Prism/Prism";
import Tour from "./pages/Tour/Tour";
import Center from "./pages/Center/Center";
import Store from "./pages/Store/Store";
import LastCall from "./pages/LastCall/LastCall";

const Root = props => {
  return (
    <Router>
      <ScrollToTop>
        <App>
          <Switch>
            <Redirect from="/advertising" to="/purchase-pride-guide-ad" />
            <Redirect from="/sponsorships" to="/become-a-sponsor" />
            <Redirect from="/prideguide" to="/pride-guide" />
            <Redirect from="/vendors" to="/vendor-registration" />
            <Redirect from="/cruise" to="/pride-on-the-harbor" />
            <Redirect from="/friends" to="/friends-of-pride" />
            <Route exact path="/" component={Home} />
            <Route path="/board-of-directors" component={Board} />
            <Route path="/bylaws" component={Bylaws} />
            <Route path="/board-roles" component={BoardRoles} />
            <Route path="/our-sponsors" component={Sponsors} />
            <Route path="/become-a-sponsor" component={Sponsorships} />
            <Route path="/friends-of-pride" component={Friends} />
            <Route path="/join-our-mailing-list" component={MailingList} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/donate" component={Donate} />
            <Route path="/purchase-pride-guide-ad" component={PrideGuideAd} />
            <Route path="/pride-guide" component={PrideGuide} />
            <Route path="/vendor-registration" component={Vendor} />
            <Route path="/participate-in-parade" component={Parade} />
            <Route path="/serve-on-the-board" component={ServeOnBoard} />
            <Route path="/pride-on-the-harbor" component={Cruise} />
            <Route path="/festival" component={Festival} />
            <Route path="/parade" component={Parade} />
            <Route path="/lol" component={Comedy} />
            <Route path="/prism" component={Prism} />
            <Route path="/last-call" component={LastCall} />
            <Route path="/tour" component={Tour} />
            <Route path="/pride" component={Pride} />
            <Route path="/pageant" component={Pageant} />
            <Route path="/rainbows" component={Rainbows} />
            <Route path="/lgbtq-center" component={Center} />
            <Route path="/store" component={Store} />
            <Route
              path="/twerk"
              component={() =>
                (window.location =
                  "https://www.eventbrite.com/e/twerk-twirl-101-w-latrice-royale-and-the-holy-city-twirlers-tickets-63672683711")
              }
            />
            <Route
              path="/colorme"
              component={() =>
                (window.location =
                  "https://www.facebook.com/events/2208879402540673/")
              }
            />
            <Route path="*" component={NoMatch} />
          </Switch>
        </App>
      </ScrollToTop>
    </Router>
  );
};

const NoMatch = ({ location }) => (
  <div className="bg-full-page bg-primary back-fixed">
    <div className="mw-500 absolute-center">
      <div className="card animated zoomInUp animation-delay-7 color-primary withripple">
        <div className="card-body">
          <div className="text-center color-dark">
            <h1 className="color-primary text-big">Error 404</h1>
            <h2>Page Not Found</h2>
            <p className="lead lead-sm">
              This is a new site and apparently we missed something.
            </p>
            <p>
              If you wouldn&apos;t mind please, send an email to{" "}
              <a href="mailto:support@charlestonpride.org">
                support@charlestonpride.org
              </a>
              . Thanks!
            </p>
            <Link to="/" className="btn btn-primary btn-raised">
              <i className="zmdi zmdi-home" /> Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Root;
