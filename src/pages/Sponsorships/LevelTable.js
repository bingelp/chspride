import React from "react";
import Level from "./Level";

class LevelTable extends React.Component {
  render() {
    return (
      <div className="row pricing-table-container justify-content-center">
        <div className="col-md-4 d-none d-lg-block pricing-col col-push-1">
          <div className="pricing-table pricing-table-description">
            <div className="pricing-table-head-dark">
              <h2>2020</h2>
              <h3 className="price"> Sponsorship Levels</h3>
            </div>
            <ul className="pricing-table-content">
              <li>
                <i className="fa fa-calendar" /> Naming Rights to Pride Event{" "}
              </li>
              <li>
                <i className="fa fa-facebook" /> Custom Media Posts{" "}
              </li>
              <li>
                <i className="fa fa-male" /> Recognition on Pride T-shirt{" "}
              </li>
              <li>
                <i className="fa fa-ticket" /> Complimentary Tickets to the
                Prism{" "}
              </li>
              <li>
                <i className="fa fa-thumbs-up" /> Complimentary Booth at
                Festival{" "}
              </li>
              <li>
                <i className="fa fa-newspaper-o" /> Complimentary Ad Space in
                Pride Guide{" "}
              </li>
              <li>
                <i className="fa fa-star" /> Access to VIP Tent at Pride
                Festival
              </li>
              <li>
                <i className="fa fa-desktop" /> Logo Attribution on Website{" "}
              </li>
              <li>
                <i className="fa fa-address-book" /> Logo Attribution on Pride
                Guide{" "}
              </li>
              <li>
                <i className="fa fa-certificate" /> Use of “Official Charleston
                Pride Sponsor” *
              </li>
              <li>
                <i className="fa fa-flag" /> Parade Entry Fee Waived
              </li>
            </ul>
          </div>
        </div>
        {this.props.levels.map(l => (
          <Level key={l.id} level={l} />
        ))}
      </div>
    );
  }
}

export default LevelTable;
