import React, { Component } from 'react';
import { ExternalLink } from '../../components/LinkUtil'
import ETap from '../../components/ETapestryForm'

class Tour extends Component {
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-friends ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Real <span className="initialism"><span>R</span><span>a</span><span>i</span><span>n</span><span>b</span><span>o</span><span>w</span> <span>R</span><span>o</span><span>w</span></span> Tour</h1>
              <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                <em>The Real Rainbow Row</em> walking tour is a <strong>fabulous</strong> two-hour interactive exploration of Charleston’s rich, gay history and current LGBTQ community. Highlights include the story of Dawn Langley Hall, one of the first transsexuals in the US, the gay artists that helped create Charleston’s Art Renaissance, the significance of The Battery in LGBT society, The Spoleto Festival, and the historic Charleston landmark where Gertrude Stein and Alice Taklas spent Valentine’s Day. Join Charleston Pride and <ExternalLink to="https://bulldogtours.com/" title="Bulldog Tours" /> as we skip along the cobblestone streets and discover the colorful stories that form a unique part of Charleston’s history.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">$5 of each ticket sale goes to the LGBTQ History archive at CofC.</h3>

              <ETap form="walkingtour" title="walking-tour" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tour;