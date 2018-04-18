import React from 'react';
import Level from "./Level";

class LevelTable extends React.Component {
    render() {
        return(
                <div className="row pricing-table-container justify-content-center">
                  <div className="col-md-4 d-none d-lg-block pricing-col col-push-1">
                    <div className="pricing-table pricing-table-description">
                      <div className="pricing-table-head-dark">
                        <h2>2018</h2>
                        <h3 className="price"> Sponsorship Levels</h3>
                      </div>
                      <ul className="pricing-table-content">
                        <li>
                          <i className="fa fa-calendar"></i> Naming Rights to Pride Event </li>
                        <li>
                          <i className="fa fa-facebook"></i> Custom Media Post </li>
                        <li>
                          <i className="fa fa-male"></i> Recognition on Pride T-shirt </li>
                        <li>
                          <i className="fa fa-ticket"></i> Tickets to the Prism Party </li>
                        <li>
                          <i className="fa fa-thumbs-up"></i> Discount on Booth at Festival </li>
                        <li>
                          <i className="fa fa-newspaper-o"></i> Ad Space in Pride Guide </li>
                        <li>
                          <i className="fa fa-bullhorn"></i> Sponsor Recognition at Pride Festival </li>
                        <li>
                          <i className="fa fa-desktop"></i> Logo Attribution on Website </li>
                        <li>
                          <i className="fa fa-address-book"></i> Logo Attribution on Pride Guide </li>
                        <li>
                          <i className="fa fa-certificate"></i> Use of “Official Charleston Pride Sponsor” *</li>
                        <li>
                            <i className="fa fa-flag"></i> Parde Entry Fee Waived</li>
                      </ul>
                    </div>
                  </div>
                  {this.props.levels.map( l => <Level key={l.id} level={l}/>)}
                  </div>)
    }
  }

  export default LevelTable;