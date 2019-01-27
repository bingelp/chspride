import React from "react";

export default class BoardMember extends React.Component {
  render(props) {
    return (
      <div className="col-12 col-md-6 board-member">
        <div className="card">
          <div className="withripple zoom-img">
            <img
              src={"https://d2f908d3j7stzr.cloudfront.net/chspride/board/" + this.props.meta.image}
              alt={this.props.meta.firstName + " " + this.props.meta.lastName}
              className="img-fluid"
            />
          </div>
          {this.props.meta.executive ? (
            <span className="ml-auto badge badge-warning">
              Executive Committee
            </span>
          ) : (
            <span className="ml-auto badge badge-default">Board Member</span>
          )}
          <ul
            className="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-12"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link withoutripple active"
                href={"#profile-" + this.props.meta.id}
                aria-controls="profile"
                role="tab"
                data-toggle="tab"
              >
                <i className="zmdi zmdi-home" />
                <span className="d-none d-sm-inline">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link withoutripple"
                href={"#bio-" + this.props.meta.id}
                aria-controls="bio"
                role="tab"
                data-toggle="tab"
              >
                <i className="zmdi zmdi-account" />
                <span className="d-none d-sm-inline">Bio</span>
              </a>
            </li>
          </ul>
          <div className="card-body">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade active show"
                id={"profile-" + this.props.meta.id}
              >
                <h3 className="color-success animated fadeInUp animation-delay-2">
                  {this.props.meta.firstName} {this.props.meta.lastName}
                </h3>
                <h4 className="animated zoomInDown fadeInUp-delay-3">
                  {this.props.meta.title}
                </h4>
                <p>
                  <i className="zmdi zmdi-email mr-1 color-primary" />
                  <a
                    href={
                      "mailto:" +
                      this.props.meta.userName +
                      "@charlestonpride.org"
                    }
                  >
                    {this.props.meta.userName}@charlestonpride.org
                  </a>
                </p>
                <p>
                  <i className="zmdi zmdi-calendar mr-1 color-info" />{" "}
                  {"Elected " +
                    getMonth(this.props.meta.monthElected) +
                    " " +
                    this.props.meta.yearElected}
                </p>
                <em>
                  <i className="zmdi zmdi-account mr-1 color-royal" />
                  {capitalizeFirstLetter(this.props.meta.subjective)}/
                  {capitalizeFirstLetter(this.props.meta.objective)}/
                  {capitalizeFirstLetter(this.props.meta.possessive)}
                </em>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade"
                id={"bio-" + this.props.meta.id}
              >
                <div className="bio">
                  {this.props.meta.bio &&
                    this.props.meta.bio.map(b => <p key={b}>{b}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getMonth(month) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[month - 1];
}
