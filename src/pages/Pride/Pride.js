import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ExternalBtn, ExternalWhiteBtn } from '../../components/LinkUtil'
import Sponsors from '../Sponsors/SponsorHero';
import './Pride.css'
import cruise from './prideOnHarbor_400x150.jpg'
import tabbuli from './tabbuli.jpg'
import eljefe from './eljefe.jpg'
import dudleys from './dudleys.jpg'
import beau from './beau_magazine.jpg'
import indigo from './indigo.jpg'
import redux from './redux.png'

class Pride extends Component {

  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Charleston Pride 2018</h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">September 15-22, 2018</h2>
          </div>
        </div>
      </div>
    )
  }

  PrideOnHarbor(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-15T19:00"><span className="date">September 15<span className="day"> Saturday</span></span> 7:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Pride on the Harbor @ 7:00-10:30pm | Aquarium Wharf</h3>
          </div>
          <img src={cruise} alt="Pride on the Harbor Logo" className="mb-2"></img>
          <div className="card-body">
            <div className="row">
              <p>Come sail away with Charleston Pride! The evening will feature hors d’oeuvres, an open bar courtesy of Breakthru Beverage South Carolina, and DJ K spinning the beats on this three hour harbor cruise! This boat features two levels with an air-conditioned floor and an open air top deck. This is an event you won’t want to miss! All you need is a ticket and we will provide the rest! Boarding will begin at 7:00pm at the Aquarium Wharf. The boat will depart at 7:30 pm and will return at 10:30 pm. Space is limited so make sure you get your tickets early. All proceeds benefit Charleston Pride and help to make Pride possible!</p>
              <ExternalLink to="https://www.google.com/maps/place/360+Concord+St,+Charleston,+SC+29401/" title="360 Concord St, Charleston, SC" />
            </div>
            <Link to="/events/pride-on-the-harbor" className="btn btn-raised btn-info animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <h3 className="pull-right">$45</h3>
          </div>
        </div>
      </li>)
  }

  DragBrunch(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T11:00">September 16<span className="day"> Sunday</span> 11:00 AM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Drag Brunch @ 11:00 AM - 2:00 PM | Haus of Tabbuli - Tabbuli Grill </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={tabbuli} alt="" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Come kick back with us and sip mimosas, gulp bloody marys, and watch a fabulous drag show hosted by Symone N. O’Bishop.  Enjoy Tabbuli’s fabulous brunch buffet, listen to beat from DJ Beck Danger and take in all the sights and sounds of the Haus of Tabbuli. </p>
                <ExternalLink to="https://goo.gl/maps/6vM5HDnfMfw" title="6 N Market St, Charleston, SC" />
              </div>
            </div>
            <ExternalBtn to="http://tabbuli.com/" icon="globe" title="Tabbuli" color="success" />
            <div className="pull-right">
              <h3 ><span className="color-success">FREE</span> Admission</h3>

            </div>
          </div>
        </div>
      </li>
    )
  }

  Tour(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T15:00">3:00 PM</time>
          <i className="ms-timeline-point bg-danger"></i>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Real Rainbow Row Tour @ 3:00 PM - 5:00PM | Downtown Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p><em>The Real Rainbow Row</em> walking tour is a <strong>fabulous</strong> two-hour interactive exploration of Charleston’s rich, gay history and current LGBTQ community. Highlights include the story of Dawn Langley Hall, one of the first transsexuals in the US, the gay artists that helped create Charleston’s Art Renaissance, the significance of The Battery in LGBT society, The Spoleto Festival, and the historic Charleston landmark where Gertrude Stein and Alice Taklas spent Valentine’s Day. Join Charleston Pride and <ExternalLink to="https://bulldogtours.com/" title="Bulldog Tours"/> as we skip along the cobblestone streets and discover the colorful stories that form a unique part of Charleston’s history.</p>
                <ExternalLink to="https://goo.gl/maps/ahE6LR7x2M82" title="18 Anson St, Charleston, SC" />
              </div>
            </div>
            <Link to="/events/pride/real-rainbow-row-tour" className="btn btn-raised btn-danger animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <div className="pull-right">
              <h3 ><span className="color-danger">$15</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Interfaith(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T18:00">6:00 PM</time>
          <i className="ms-timeline-point bg-royal"></i>
        </div>
        <div className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">Pride Interfaith Service @ 6:00 PM | Unitarian Church in Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Join us for Charleston’s Interfaith Lesbian, Gay, Bisexual, Transgender, and Queer Pride Service. The service is open to Charlestonians of every faith and philosophy.  Welcoming and affirming religious leaders will be there as we celebrate or diversity and commit ourselves to work for equal dignity and justice for all.  All are welcome.</p>
              <ExternalLink to="https://goo.gl/maps/6vM5HDnfMfw" title="4 Archdale Street Charleston, SC" />
            </div>
            <ExternalBtn to="https://charlestonuu.org/" icon="globe" title="Unitarian Church in Charleston" color="royal" />
            <div className="pull-right">
              <h3 ><span className="color-royal">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }


  Paris(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-17T16:30">September 17<span className="day" > Monday</span> 6:30 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title"><em>Paris is Burning</em> Screening @ 6:30 PM | REDUX, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">

              <img id="redux" src={redux} alt="Redux logo" className="img-fluid mb-2"></img>
                <p>Charleston Pride will host a screening of the culturally-rich documentary, <em>Paris is Burning</em>, and a talkback with ball commentator Junior Labeija and local activist Vanity Reid Deterville. Deterville and Labeija will discuss the film's influence on the stories and lives of queer and transgender people of color, and how the ball scene has evolved since the late '80s. </p>
                <ExternalLink to="https://goo.gl/maps/ExJArKBVap32" title="1056 King Street, Charleston, SC" />
            </div>
            <ExternalBtn to="http://reduxstudios.org/" icon="globe" color="warning" title="Redux" />
            <div className="pull-right">
              <h3 ><span className="color-warning">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Poetry(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-18T18:00">September 18<span className="day"> Tuesday</span> TBD</time>
          <i className="ms-timeline-point bg-info"></i>
        </div>
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">OUT Spoken @ TBD | TBD </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Enjoy an evening of spoken word and poetry. This artisitic form cointinues to be a creative outlet for communities across the world and right here in Charleston. Come hear from local talent and share your own work during open mic time.</p>
            </div>
            <div className="pull-right">
              <h3 ><span className="color-info">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Symposium(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T14:00">September 19<span className="day"> Wednesday</span> 6:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">State of the Community Symposium @ 6:00 PM - 8:00 PM | Hotel Indigo, Mt. Pleasant </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Details coming soon</p>
            </div>
            <div className="pull-right">
              <h3 ><span className="color-primary">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Tabboo(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T22:00">10:00 PM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Tabboo Tuesday @ 10:00 PM | Haus of Tabbuli - Tabbuli Grill </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={tabbuli} alt="" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Tuesdays are always tabboo at Tabbuli. Don't ever be afraid to be you, Join us tonight and take in the tabbuli experience.</p>
                <p>peace love tabbuli</p>
                <ExternalLink to="https://goo.gl/maps/6vM5HDnfMfw" title="6 N Market St, Charleston, SC" />
              </div>
            </div>
            <ExternalBtn to="http://tabbuli.com/" icon="globe" title="Tabbuli" color="success" />
            <div className="pull-right">
              <h3 >Cover: 18+ <span className="color-success">$10</span>, 21+ <span className="color-success">$5</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Beau(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T17:00">September 20<span className="day"> Thursday</span> 5:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Beau Magazine Happy Hour @ 5:00 PM - 7:00 PM | The Cocktail Club </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={beau} alt="Beau Magazine Logo" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Join Charleston's OUT Crowd as we all toast to 2018 Charleston Pride at The Cocktail Club! This event is sponsored by BEAU Magazine so you know it'll be FUN!</p>
                <ExternalLink to="https://goo.gl/maps/vnVPfGan1542" title="479 King St #200, Charleston, SC" />
              </div>
            </div>
            <ExternalBtn to="https://beau-magazine.com/" icon="globe" title="BEAU Magazine" color="primary" />
            <div className="pull-right">
              <h3 ><span className="color-primary">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Wig(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T21:00">9:00 PM</time>
          <i className="ms-timeline-point bg-danger"></i>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Wig Out Wednesday @ 9:00 PM | The Drag Factory - El Jefe </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={eljefe} alt="El Jefe Logo" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Come wig out with us on Wednesday night! Every Wednesday night is a different show, a different cast, and it's always a great time! Wig Out Wednesdays at the Drag Factory - Music by DJ Trevor D. Party starts at 9:00pm. Show starts at 10:00pm! </p>
                <ExternalLink to="https://goo.gl/maps/Jk8Z4Zsapu12" title="468 King St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="https://www.eljefechs.com/" icon="globe" title="El Jefe" color="danger" />
            <div className="pull-right">
              <h3 ><span className="color-danger">FREE</span>, 21+</h3>

            </div>
          </div>
        </div>
      </li>
    )
  }

  Lol(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-20T19:00">September 20<span className="day"> Thursday</span> 7:00 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">LGBTLOL @ 8:00 PM | Charleston Music Hall </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>Presented by <abbr title="Alliance For Full Acceptance">AFFA</abbr> and Charleston Pride</h4>
                <p>Come celebrate humanity and show your PRIDE at a night of comedy featuring some of your favorite stand-up comics, who also just happen to be members of the LGBTQ community.</p>
                <p>Comedians: Jenn Snyder, Shawna Jarrett, Kevin Delgado, Robyn Scott, Sam Reisman</p>
                <p>Host: Curt Mariah</p>
                <p>Also featuring DJ Pat Nasty</p>
              </div>
            </div>
            <Link to="/events/pride/lgbtlol" className="btn btn-raised btn-warning animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <div className="pull-right">
              <h3 ><span className="color-warning">$15</span> / <span className="color-warning">$10</span> with code: <span className="color-warning">affapride</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Patti(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-20T22:00">10:00 PM</time>
          <i className="ms-timeline-point bg-royal"></i>
        </div>
        <div className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">Patti O'Furniture Show @ 10:00 PM | Dudleys on Ann </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={dudleys} alt="Dudley's Logo" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Thursdays mean one thing: The Patti O'Furniture Show LIVE at 11pm. Her mix of drag, comedy, quirky costumes, and quick wit have been entertaining audiences since 1998. Welcome to the world of comedy coture that is the "Yard Sale with Legs!" </p>
                <ExternalLink to="https://goo.gl/maps/Jk8Z4Zsapu12" title="42 Ann St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="https://http://www.dudleysonann.com/" icon="globe" title="Dudley's on Ann" color="royal" />
            <div className="pull-right">
              <h3 ><span className="color-royal">FREE</span>, 21+</h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Takeover(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-21T18:00">September 21<span className="day"> Friday</span> TBD</time>
          <i className="ms-timeline-point bg-info"></i>
        </div>
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">Takeover Charleston @ TBD | TBD </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Details coming soon</p>
            </div>
            <div className="pull-right">
              <h3 ><span className="color-info">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Parade(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T09:00">September 22<span className="day"> Saturday</span> 9:00 AM</time>
          <i className="ms-timeline-point bg-danger"></i>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Parade @ 9:00 AM | Downtown Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>This is a parade like no other. Join crowds of people lining King Street as our parade runs through the middle of downtown Charleston. Stepping off at 9:00am, the parade route goes from Ann Street down King Street to Broad Street, and then to Colonial Lake.</p>
            </div>
            <Link to="/events/pride/parade" className="btn btn-raised btn-danger animated fadeInUp animation-delay-10">
              <i className="fa fa-flag"></i> More Info</Link>
            <div className="pull-right">
              <h3 ><span className="color-danger">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Festival(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T11:00">11:00 AM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Festival @ 11:00 AM - 3:00 PM | Brittlebank Park, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>The Charleston Pride Festival in Brittlebank Park is the cornerstone to the Pride Festival. Join us for an afternoon in the park!</p>
            </div>
            <Link to="/events/pride/festival" className="btn btn-raised btn-success animated fadeInUp animation-delay-10">
              <i className="fa fa-map"></i> More Info</Link>
            <div className="pull-right">
              <h3 ><span className="color-success">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Prism(props) {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T21:00">9:00 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Prism Party @ 9:00 PM - 1:30 AM | Music Farm, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Details Coming Soon</p>
            </div>
            <Link to="/events/pride/prism-party" className="btn btn-raised btn-warning animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <div className="pull-right">
              <h3 ><span className="color-warning">$20</span></h3>
            </div>
          </div>
        </div>
      </li>
    )
  }

  Calendar(props) {
    return (

      <div className="col-lg-8">
        <h1>Schedule of Events</h1>
        <ul className="ms-timeline">
          {props.children}
        </ul>
      </div>
    )
  }



  Hotel(props) {
    return (
      <div className="col-lg-4">
        <h2>Hotel and Accomodations</h2>
        <div className="card card-royal-inverse">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fa fa-bed"></i> Official Hotel of Charleston Pride</h3>
          </div>
          <div className="withripple zoom-img">
            <img src={indigo} alt="" className="img-fluid" />
          </div>
          <div className="card-body text-center">
            <h4 className="">Hotel Indigo Mount Pleasant</h4>
            <p>Situated near the landmark Arthur Ravenel Jr. Bridge, the Hotel Indigo® Mount Pleasant lets you experience the Lowcountry like a local. Our modern, boutique-style accommodations will help ensure a stress-free stay, with such amenities as complimentary Wi-Fi, ample work space and plush bedding.</p>
            <h3>Get <strong>25% off</strong> when booking through the link below</h3>
            <ExternalWhiteBtn color="royal" icon="bed" title="Reservations" to="https://www.ihg.com/hotelindigo/hotels/us/en/mount-pleasant/chsmp/hoteldetail?qAAR=ILJT2&amp;qAdlt=1&amp;qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.va.sp.nd.ct&amp;qChld=0&amp;qCpid=786895686&amp;qFRA=1&amp;qGRM=0&amp;qIta=99502056&amp;qPSt=0&amp;qRRSrt=rt&amp;qRef=df&amp;qRms=1&amp;qRpn=1&amp;qRpp=20&amp;qRtP=ILJT2&amp;qSHp=1&amp;qSmP=3&amp;qSrt=sBR&amp;qWch=0&amp;srb_u=1&amp;icdv=99502056&amp;setPMCookies=true" />
          </div>
        </div>
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
            <this.Calendar>
              <this.PrideOnHarbor />
              <this.DragBrunch />
              <this.Tour />
              <this.Interfaith />
              <this.Paris />
              <this.Poetry />
              <this.Tabboo />
              <this.Symposium />
              <this.Wig />
              <this.Beau />
              <this.Lol />
              <this.Patti />
              <this.Takeover />
              <this.Parade />
              <this.Festival />
              <this.Prism />
            </this.Calendar>
            <this.Hotel />
          </div>
        </div>
      </div>
    );
  }
}

export default Pride;