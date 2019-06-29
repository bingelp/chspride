import React, { Component } from "react";
import eljefe from "../Assets/eljefe.jpg";
import { ExternalLink } from "../../../components/LinkUtil";

class ToastToEquality extends Component {
  render() {
    return (
      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa fa-glass" /> Official Cocktail of Charleston Pride
          </h3>
        </div>
        <div className="withripple zoom-img text-center">
          <img src={eljefe} alt="El Jefe" className="img-fluid" />
        </div>
        <div className="card-body text-center">
          <h1 className="text-success">The Dirty Little Cowboy</h1>
          <h3>
            Congratulations to{" "}
            <ExternalLink to="https://www.eljefechs.com/" title="El Jefe" /> and
            their winning cocktail in the 2nd annual{" "}
            <ExternalLink
              to="https://toasttoequality.org"
              title="Toast to Equality"
            />{" "}
            cocktail competition!
          </h3>
          <p>
            The cocktail will be avaliable at all applicable Charleston Pride
            2010 events
          </p>
        </div>
      </div>
    );
  }
}

export default ToastToEquality;
