import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Previous extends Component {
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-parade ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                2017 Pride Guide</h1>
              <Link to="/purchase-pride-guide-ad" className="btn btn-raised btn-primary">2018 Pride Guide</Link>
            </div>
          </div>
        </div>
        <div>
          <iframe src="https://e.issuu.com/issuu-reader3-embed-files/1577/iframe-embed.html?identifier=ppczduj37c5w&amp;hostUrl=https%3A%2F%2Fwww.charlestonpride.org%2F2017-pride-guide%2F&amp;hostReferrer=https%3A%2F%2Fwww.charlestonpride.org%2Fadvertising%2F&amp;embedType=script#18234194/52458949" title="issuu.com"></iframe>
        </div>
      </div>
    )
  }
}
