import React, { Component } from 'react';
import { ExternalWhiteBtn} from '../../../components/LinkUtil'
import indigo from '../Assets/indigo.jpg'

class Hotel extends Component {
  render() {
    return (
      <div className="card card-royal-inverse">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fa fa-bed"></i> Official Hotel of Charleston Pride</h3>
      </div>
      <div className="withripple zoom-img text-center">
        <img src={indigo} alt="Hotel Indigo" className="img-fluid" />
      </div>
      <div className="card-body text-center">
        <h4 className="">Hotel Indigo Mount Pleasant</h4>
        <p>Situated near the landmark Arthur Ravenel Jr. Bridge, the Hotel Indigo® Mount Pleasant lets you experience the Lowcountry like a local. Our modern, boutique-style accommodations will help ensure a stress-free stay, with such amenities as complimentary Wi-Fi, ample work space and plush bedding.</p>
        <h3>Get <strong>25% off</strong> when booking through the link below</h3>
        <ExternalWhiteBtn color="royal" icon="bed" title="Reservations" to="https://www.ihg.com/hotelindigo/hotels/us/en/mount-pleasant/chsmp/hoteldetail?qAAR=ILJT2&amp;qAdlt=1&amp;qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.va.sp.nd.ct&amp;qChld=0&amp;qCpid=786895686&amp;qFRA=1&amp;qGRM=0&amp;qIta=99502056&amp;qPSt=0&amp;qRRSrt=rt&amp;qRef=df&amp;qRms=1&amp;qRpn=1&amp;qRpp=20&amp;qRtP=ILJT2&amp;qSHp=1&amp;qSmP=3&amp;qSrt=sBR&amp;qWch=0&amp;srb_u=1&amp;icdv=99502056&amp;setPMCookies=true" />
      </div>
    </div>
    );
  }
}

export default Hotel;