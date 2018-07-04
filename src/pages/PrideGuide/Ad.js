import React, { Component } from 'react'
import MediaKit from './2018_CHSP_PrideGuideMediaKit.pdf'
import { Link } from 'react-router-dom'
import ETap from '../../components/ETapestryForm'
import './Ad.css'
export default class Ad extends Component {

  Header(props) {
    return (
      <div className="ms-hero-page-override ms-hero-bg-primary">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">2018 Pride Guide</h1>
            <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Spread the word about your business or organization and advertise in the Charleston Pride Guide!</p>
            <a className="btn btn-info btn-raised" download href={MediaKit}><i className="fa fa-download"></i> Media Kit</a>
            <Link to="/2017-Pride-Guide" className="btn btn-raised btn-primary"><i className="fa fa-book"></i> 2017 Pride Guide</Link>
          </div>
        </div>
      </div>
    )
  }


  Details(props) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Pride Guide Details</h1>
            </div>
            <div className="col-md-6">
              <div>
                <h3>Distribution</h3>
                <ul>
                  <li><strong>5.75” x 8.75”</strong> Booklet Layout</li>
                  <li><strong>5,000</strong> copies</li>
                  <li>Distribution to Charleston, Mount Pleasant, James Island, Johns Island, Edisto, Beaufort, Columbia,Myrtle Beach, Greenville, Spartanburg, Savannah, Asheville, and Charlotte</li>
                </ul>
              </div>
              <div>
                <h3>Added Value</h3>
                <ul>
                  <li>Ad space in the 2018 Charleston Pride Guide</li>
                  <li>Digital version on Charleston Pride Website</li>
                </ul>
              </div>
              <div>
                <h3>Early Bird Special</h3>
                <ul>
                  <li>Purchase your ad by <strong>April 30 2018</strong>, and get into the LGBTA Preferred Directory in the Guide</li></ul>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>Advertising Deadlines</h3>
                <ul><li>Ad reservation deadline: <strong>July 6, 2018</strong></li>
                  <li>Print ready artwork deadline: <strong>July 14, 2018</strong></li>
                </ul>
              </div>
              <div>
                <h3>Ad Design Guidelines</h3>
                <ul>
                  <li>All ads should be submitted as an electronic file</li>
                  <li>Acceptable file formats are PDF or EPS file</li>
                  <li>Please ensure that all images embedded into ads are converted to four color process (CMYK) and all text is converted to outlines prior to saving the ad as a PDF file. </li>
                  <li>Please embed all fonts in the files to ensure accurate printing</li>
                  <li>Image resolution <strong>must</strong> be at least 300 dpi</li>
                </ul>
              </div>
              <div>
                <h4>For questions about ad specs or to have Charleston Pride design an ad on your behalf, please contact
            <a href="mailto:sales@charlestonpride.org"> sales@charlestonpride.org</a>.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }

  Rates(props) {
    return (
      <div className="bg-warning">
        <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Advertising Rates</h1>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Premium Center Fold Ad</h2>
              <p>For, <strong>$1,500</strong>, make a major statement for your business or organization with an exclusive center fold ad in the middle of the Charleston Pride Guide</p>
              <ul>
                <li>11.00" W x 8.75" H (includes bleed)</li>
                <li>Keep text 0.5" away from the edges</li>
              </ul>
            </div>
            <div>
              <h2>Premium Back Cover <span>-- Sold Out</span></h2>
              <p>For <strong>$1,250</strong>, your ad can be placed on the back cover of the Pride Guide, printed on glossy paper. There’s only one back cover, so buy your ad soon!</p>
              <ul>
                <li>5.75" W x 8.75" H (includes bleed)</li>
                <li>Keep text 0.5" away from the edges</li>
              </ul>
            </div>
            <div>
              <h2>Premium Inside Cover <span>-- Sold Out</span></h2>
              <p>For <strong>$1,000</strong>, your ad can be placed on one of the prominent inside covers, printed on glossy paper. There are only two of these coveted spaces so order early to guarantee your spot.</p>
              <ul>
                <li>5.75" W x 8.75" H (includes bleed)</li>
                <li>Keep text 0.5" away from the edges</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Full Page</h2>
              <p>For <strong>$750</strong>, you will get a full page ad in the Charleston Pride Festival Guide. <strong>Great</strong> Visibility!</p>
              <ul>
                <li>5.75" W x 8.75" H (includes bleed)</li>
                <li>Keep text 0.5" away from the edges</li>
              </ul>
            </div>
            <div>
              <h2>Half Page</h2>
              <p>For <strong>$500</strong>, receive a half-page as in the Charleston Pride Festival Guide. While half-page ads may share a page with others ads or text, they still give your business or organization enough space to make a colorful statement.</p>
              <ul>
                <li>4.5" W x 3.785" H</li>
              </ul>
            </div>
            <div>
              <h2>Quarter Page</h2>
              <p>For <strong>$350</strong>, feature your business in a simple yet elegant way with a quarterpage ad. This ad size features enough space to highlight your business at a very affordable rate <strong>or</strong> purchase two separate ads for double coverage.</p>
              <ul>
                <li>2.16" W x 3.785" H</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  Form() {
    return (
      <div>
      <div className="container text-center">
        <h1>Purchase an Ad</h1>
        <p>For questions about ad specs or to have Charleston Pride design an ad on your behalf, please contact
          <a href="mailto:sales@charlestonpride.org"> sales@charlestonpride.org</a></p>
        <ETap title="Pride Guide" form="prideguide" />
      </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <this.Header />
        <this.Details />
        <this.Rates />
        <this.Form />
      </div>
    )
  }
}
