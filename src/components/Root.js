import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import App from './App/App';
import Home from './Home/Home';
import Sponsorships from './Sponsorships/Sponsorships';
import Sponsors from './Sponsors/Sponsors';
import GetInvolved from './GetInvolved/GetInvolved';
import Board from './Board/Board';
import BoardRoles from './Board/BoardRoles'
import ServeOnBoard from './Board/ServeOnBoard'
import Bylaws from './Bylaws/Bylaws'
import Donate from './Donate/Donate';
import Parade from './Parade/Parade'
import Festival from './Festival/Festival'
import Vendor from './Festival/Vendor/Vendor'
import Volunteer from './Volunteer/Volunteer';
import Cruise from './Events/Cruise';
import Friends from './Friends/Friends'
import MailingList from "./MailingList/MailingList";
import PrideGuideAd from './PrideGuide/Ad'
import PreviousPrideGuide from './PrideGuide/Previous'
import Pride from './Pride/Pride'
import Events from './Events/Events'
import Contact from './Contact'
import Pageant from './Pageant/Pageant'
import Rainbows from './Rainbows/Rainbows'

const Root = (props) => {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/board-of-directors" component={Board} />
            <Route path="/bylaws" component={Bylaws} />
            <Route path="/board-roles" component={BoardRoles} />
            <Route path="/our-sponsors" component={Sponsors} />
            <Route path="/become-a-sponsor" component={Sponsorships} />
            <Route path="/friends-of-pride" component={Friends} />
            <Route path="/join-our-mailing-list" component={MailingList} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/purchase-pride-guide-ad" component={PrideGuideAd} />
            <Route path="/2017-pride-guide" component={PreviousPrideGuide}/>
            <Route path="/vendor-registration" component={Vendor} />
            <Route path="/participate-in-parade" component={Parade} />
            <Route path="/serve-on-the-board" component={ServeOnBoard} />
            <Route path="/events/pride-on-the-harbor" component={Cruise} />
            <Route path="/events/pride/festival" component={Festival} />
            <Route path="/events/pride/parade" component={Parade} />
            {/* <Route path="/events/pride" component={Pride} /> */}
            <Route path="/events/pageant" component={Pageant}/>
            <Route path="/events/rainbows" component={Rainbows}/>
            <Route path="/events" component={Events} />
            <Route path="/donate" component={Donate} />
            {/* <Route path="/contact-us" component={Contact} /> */}
            <Route path="/get-involved" component={GetInvolved} />

            <Route path="*" component={NoMatch} />
          </Switch>
        </App>
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
                        <p className="lead lead-sm">This is a new site and apparently we missed something.</p>
                        <p>If you wouldn&apos;t mind please, send an email to <a href="mailto:support@charlestonpride.org">support@charlestonpride.org</a>. Thanks!</p>
                        <Link to="/" className="btn btn-primary btn-raised"><i className="zmdi zmdi-home"></i> Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  export default Root;