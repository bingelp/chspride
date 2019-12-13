import React, { Component } from "react";
import { ExternalWhiteBtn } from "../../../components/LinkUtil";
import holidayInn from "../Assets/500px-Holiday_Inn_Logo.svg.png";

class Hotel extends Component {
  render() {
    return (
      <div className="card card-success-inverse">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa fa-bed" /> Official Hotel of Charleston Pride
          </h3>
        </div>
        <div className="withripple zoom-img text-center bg-white">
          <img
            src={holidayInn}
            alt="Holiday Inn Charleston Historic Downtown"
            className="img-fluid p-4"
          />
        </div>
        <div className="card-body text-center">
          <h4 className="">Holiday Inn Charleston Historic Downtown</h4>
          <p>
            Known for its rich history, well-preserved architecture, a
            celebrated restaurant community and mannerly people, this coastal
            destination remains one of the top destination cities in the world.
            Holiday Inn Charleston Historic Downtown is one of the newest hotels
            in Historic Charleston; blending contemporary luxury with
            traditional southern hospitality. Conveniently situated in the
            vibrant upper King and Meeting Street neighborhood within the
            Historic District, directly across from Woolfe Street Playhouse.
          </p>
          <h3>425 Meeting Street, Charleston, South Carolina 29403</h3>
          <ExternalWhiteBtn
            color="success"
            icon="bed"
            title="Reservations"
            to="https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/hotel/rooms?qDest=425%20Meeting%20Street,%20Charleston,%20SC,%20US&qCiMy=82019&qCiD=11&qCoMy=82019&qCoD=15&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=CHP&qSlH=CHSMS&qAkamaiCC=US&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&amp;qWch=0&amp;qSmP=1&amp;setPMCookies=true&amp;qRad=30&amp;qRdU=mi&amp;srb_u=1&amp;icdv=99801505"
          />
        </div>
      </div>
    );
  }
}

export default Hotel;
