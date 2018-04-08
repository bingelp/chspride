import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import App from './App/App';
import Home from './Home/Home';
import Sponsorships from './Sponsorships/Sponsorships';
import Sponsors from './Sponsors/Sponsors';
import GetInvolved from './GetInvolved/GetInvolved';
import Board from './Board/Board';
import Bylaws from './Bylaws/Bylaws'

const Root = (props) => {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sponsorships" component={Sponsorships} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/about/board" component={Board} />
            <Route path="/about/bylaws" component={Bylaws}/>
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
                        <Link to="/" class="btn btn-primary btn-raised"><i class="zmdi zmdi-home"></i> Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  export default Root;