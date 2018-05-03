import React from "react";
import CountUp from 'react-countup';
import './sponsors.scss';
import LevelTable from "./LevelTable";



const levels = [
  {
      "id": 1,
      "name": "Red",
      "price": 10000,
      "namingRights": 1,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 6,
      "boothDiscount": true,
      "adSpace": 2,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 2,
      "name": "Orange",
      "price": 7500,
      "namingRights": 0,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 6,
      "boothDiscount": true,
      "adSpace": 2,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 3,
      "name": "Yellow",
      "price": 5000,
      "namingRights": 0,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 4,
      "boothDiscount": true,
      "adSpace": 1,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 4,
      "name": "Green",
      "price": 2500,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": true,
      "prismParty": 2,
      "boothDiscount": true,
      "adSpace": 0.5,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 5,
      "name": "Blue",
      "price": 1000,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": false,
      "prismParty": 0,
      "boothDiscount": false,
      "adSpace": 0.25,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },        
  {
      "id": 6,
      "name": "Purple",
      "price": 500,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": false,
      "prismParty": 0,
      "boothDiscount": false,
      "adSpace": 0,
      "festivalRecognition": false,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  }
];

function Stats(props){
return (
  <div className="container ">
    <h2 className="text-center mb-4 wow fadeInUp animation-delay-2">Some Numerical Data</h2>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-warning card-body text-center wow zoomInUp animation-delay-3">
          <h2 className="counter"><CountUp start={0} end={6000} duration={6} />+</h2>
          <i className="color-warning fa fa-4x fa-group"></i>
          <p className="mt-2 no-mb lead small-caps">Pride Festival Attendees</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-info card-body text-center wow zoomInUp animation-delay-2">
          <h2 className="counter"><CountUp start={0} end={9945} duration={6} /></h2>
          <i className="color-info fa fa-4x fa-facebook"></i>
          <p className="mt-2 no-mb lead small-caps">Likes on Facebook</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-success card-body text-center wow zoomInUp animation-delay-5">
          <h2 className="counter"><CountUp start={0} end={14} duration={6} /></h2>
          <i className="color-success fa fa-4x fa-calendar"></i>
          <p className="mt-2 no-mb lead small-caps">Events During Pride Week</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-danger card-body text-center wow zoomInUp animation-delay-4">
          <h2 className="counter"><CountUp start={0} end={21} duration={6} /></h2>
          <i className="color-danger fa fa-4x fa-comments-o"></i>
          <p className="mt-2 no-mb lead small-caps">Sponsors</p>
        </div>
      </div>

    </div>
  </div>);
}

class Sponsorships extends React.Component {
  render(){
      return(
      <div>
          <div className="ms-hero-page-override ms-hero-bg-info">
            <div className="container">
              <div className="text-center">
                <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Become a Sponsor</h1>
                <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-6">A sponsorship is a great way to promote your organization/company’s commitment to equal rights for all people. Additionally, a sponsorship will promote your organization among a deeply diverse group of individuals. <strong>Charleston Pride</strong> is the Lowcountry’s biggest organization that celebrates the LGBTQ community throughout the year and holds an annual Parade and Festival in downtown Charleston. Throughout the main week of Pride events, participants can attend various events all focused on educating the community and promoting equality.</p>
                <a href="#levels" class="btn btn-raised btn-danger animated fadeInUp animation-delay-10">
                  <i class="fa fa-list-ul"></i>Review Packages</a>
                <a href="#register" class="btn btn-raised btn-info animated fadeInUp animation-delay-10">
                  <i class="fa fa-heart"></i> Become a Sponsor</a>
              </div>
            </div>
          </div>
           <Stats/>
        <div id="levels" className="container">
          <LevelTable levels={levels}/>
        </div>
        <div className="container">
        <div id="register" className="card">
            <div className="card-body">
                <h3>To become a sponsor of <strong>Charleston Pride</strong>, fill out the form below</h3>
                <p> We offer different sponsorship packages to suit your organization’s needs. If there are any questions or you’d like to craft a custom sponsorship package, please reach out to us at <a href="mailto:sponsorships@charlestonrpide.org">sponsorships@charlestonpride.org</a></p>
                <iframe id="etapIframe" title="sponsorships" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/sponsorship.html"></iframe>
                <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
            </div>
        </div>
       </div>
    </div>)
  }
}

export default Sponsorships;