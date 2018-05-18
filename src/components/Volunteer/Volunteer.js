import React, { Component } from 'react'

export default class Volunteer extends Component {

  render() {
      var headerClass = "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5"
      var etap = "https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/volunteer.html"
      var etapJs = "//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
      return (
          <div>
              <div className="ms-hero-page-override ms-hero-img-city ms-hero-bg-info">
                  <div className="container">
                      <div className="text-center">
                          <h1 className={headerClass}>Volunteer with Charleston Pride</h1>
                      </div>
                  </div>
              </div>
              <div className="container card-hero">
                  <div className="card">
                      <div className="card-body">
                          <iframe id="etapIframe" title="donate" src={etap}></iframe>
                          <script src={etapJs} type="text/JavaScript"></script>
                      </div>
                  </div>
              </div>
          </div>)
  }
}
