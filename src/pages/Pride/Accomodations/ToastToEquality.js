import React, { Component } from "react";
import { ExternalLink } from "../../../components/LinkUtil";

class ToastToEquality extends Component {
  render() {
    return (
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa fa-glass" /> Official Cocktails of Charleston Pride
          </h3>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="withripple zoom-img text-center">
                  <img
                    src={process.env.REACT_APP_ASSETS + "pride/ritas.jpg"}
                    alt="Ritas"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col">
                <h3 className="text-danger">Nuttin' but Pride</h3>
                <h4>Best in Show</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="withripple zoom-img text-center">
                  <img
                    src={process.env.REACT_APP_ASSETS + "pride/eljefe.jpg"}
                    alt="El Jefe"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col">
                <h3 className="text-success">The Dirty Little Cowboy</h3>
                <h4>People's Choice</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body text-center">
          <h3>
            Congratulations to{" "}
            <ExternalLink
              to="http://www.ritasseasidegrille.com"
              title="Rita's"
            />{" "}
            &amp;{" "}
            <ExternalLink to="https://www.eljefechs.com/" title="El Jefe" /> and
            their winning cocktails in the 2nd annual{" "}
            <ExternalLink
              to="https://toasttoequality.org"
              title="Toast to Equality"
            />{" "}
            cocktail competition!
          </h3>
          <p>
            The cocktail will be avaliable at all applicable Charleston Pride
            2019 events
          </p>
        </div>
      </div>
    );
  }
}

export default ToastToEquality;
