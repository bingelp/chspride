import React, { Component } from 'react'
import Sponsors from '../Sponsors/SponsorHero';
import './Pride.css'
import PrideOnHarbor from './Events/PrideOnHarbor'
import DragBrunch from './Events/DragBrunch'
import Tour from './Events/Tour'
import Interfaith from './Events/Interfaith'
import Paris from './Events/Paris'
import Poetry from './Events/Poetry'
import Tabboo from './Events/Tabboo'
import Symposium from './Events/Symposium'
import Wig from './Events/Wig'
import Beau from './Events/Beau'
import Lol from './Events/Lol'
import Patti from './Events/Patti'
import Takeover from './Events/Takeover'
import Parade from './Events/Parade'
import Festival from './Events/Festival'
import Prism from './Events/Prism'
import Hotel from './Accomodations/Hotel'
import Toast from './Accomodations/ToastToEquality'
import {ButtonLink} from '../../components/LinkUtil'


class Pride extends Component {

  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Charleston Pride 2018</h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">September 15-22, 2018</h2>
            <ButtonLink to="/pride-guide" icon="book" color="warning">Pride Guide</ButtonLink>
          </div>
        </div>
      </div>
    )
  }

  Calendar(props) {
    return (

      <div className="col-lg-8">
        <h1>Schedule of Events</h1>
        <ul className="ms-timeline">
        <PrideOnHarbor />
              <DragBrunch />
              <Tour />
              <Interfaith />
              <Paris />
              <Poetry />
              <Tabboo />
              <Symposium />
              <Wig />
              <Beau />
              <Lol />
              <Patti />
              <Takeover />
              <Parade />
              <Festival />
              <Prism />
        </ul>
      </div>
    )
  }

  Accomodations(props) {
    return (
      <div className="col-lg-4">
        <h2>Hotel and Accomodations</h2>
        <Hotel/>
        <Toast/>
      </div>
    )
  }

  render() {
    return (
      <div id="pride">
        <this.Header />
        <Sponsors />
        <div className="container">
          <div className="row">
            <this.Calendar/>
            <this.Accomodations />
          </div>
        </div>
      </div>
    );
  }
}

export default Pride;