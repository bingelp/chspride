import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App/App';
import Home from './Home/Home';
import About from './About/About';
import Sponsorships from './Sponsorships/Sponsorships';
import Sponsors from './Sponsors/Sponsors';

const Root = (props) => {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sponsorships" component={Sponsorships} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="*" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  };

  export default Root;