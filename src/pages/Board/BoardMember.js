import React from "react";

export default class BoardMember extends React.Component {
  render(props) {
    return (
      <div className="col-12 board-member">
        <div
          className={
            this.props.meta.executive ? "card card-warning" : "card card-info"
          }
        >
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 order-lg-2">
              <div className="withripple zoom-img center">
                <img
                  src={
                    "https://d2f908d3j7stzr.cloudfront.net/chspride/board/2019/" +
                    this.props.meta.firstName.toLowerCase() +
                    ".jpeg"
                  }
                  alt={
                    this.props.meta.firstName + " " + this.props.meta.lastName
                  }
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 order-lg-1">
              <div className="card-body">
                <h3 className="color-success animated fadeInUp animation-delay-2">
                  {this.props.meta.firstName} {this.props.meta.lastName}
                </h3>
                <h4 className="animated zoomInDown fadeInUp-delay-3">
                  {this.props.meta.title}{" "}
                  {this.props.meta.executive ? (
                    <span className="badge badge-warning">
                      Executive Committee
                    </span>
                  ) : (
                    <span className="badge badge-info">Board Member</span>
                  )}
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
                <div className="bio">
                  {this.props.meta.bio
                    ? this.props.meta.bio.map(b => <p key={b}>{b}</p>)
                    : "Bio coming soon."}
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
