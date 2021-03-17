import React from "react";

export default class BoardMember extends React.Component {
  headshot(props) {
    if (props.data.image) {
      return (
        <div className="withripple zoom-img center m-2">
          <img
            src={
              "https://chaspride.blob.core.windows.net/directors/" +
              props.data.image
            }
            alt={props.data.firstName + " " + props.lastName}
            className="img-fluid"
          />
        </div>
      );
    }
    return (
      <div className="panel panel-default m-2 d-none d-md-block">
        <div className="panel-body text-center">
          <h1>
            {props.data.firstName.charAt(0).toUpperCase() +
              props.data.lastName.charAt(0).toUpperCase()}
          </h1>
          <p>Coming Soon</p>
        </div>
      </div>
    );
  }

  details(props) {
    return (
      <div>
        <h3 className="color-success animated fadeInUp animation-delay-2">
          {props.meta.firstName} {props.meta.lastName}
        </h3>
        <h4 className="animated zoomInDown fadeInUp-delay-3">
          {props.meta.title}{" "}
          {props.meta.executive ? (
            <span className="badge badge-warning">Executive Committee</span>
          ) : (
            <span className="badge badge-info">Board Member</span>
          )}
        </h4>
        <p>
          <i className="zmdi zmdi-email mr-1 color-primary" />
          <strong>Contact: </strong>
          <a href={"mailto:" + props.meta.id + "@charlestonpride.org"}>
            {props.meta.id}@charlestonpride.org
          </a>
        </p>
        <p>
          <i className="zmdi zmdi-calendar mr-1 color-info" />
          <strong>Elected to Position: </strong>
          {props.meta.dateElected}
        </p>
        <p>
          <i className="zmdi zmdi-calendar-alt mr-1 color-success" />
          <strong>Served on Board Since: </strong>
          {props.meta.dateElectedToBoard}
        </p>
        {Pronouns(props.meta)}
        {Bio(props.meta)}
      </div>
    );
  }

  render() {
    return (
      <div className="col-12 board-member">
        <div
          className={
            this.props.meta.executive ? "card card-warning" : "card card-info"
          }
        >
          <div className="card-body">
            <div className="row">
              <div className=" col-8 offset-2 offset-md-0 col-md-6 col-lg-4 order-lg-2">
                <this.headshot data={this.props.meta} />
              </div>
              <div className="col-12 col-md-6 col-lg-8 order-lg-1">
                <this.details meta={this.props.meta} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal"
          id={"bioModal-" + this.props.meta.firstName}
          tabindex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-lg animated zoomIn animated-3x"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title color-primary">
                  {this.props.meta.firstName} {this.props.meta.lastName}
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="zmdi zmdi-close"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.meta.bio &&
                  this.props.meta.bio.map((b) => <p key={b}>{b}</p>)}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Pronouns(props) {
  if (!props.pronouns) {
    return null;
  }
  return (
    <p>
      <i className="zmdi zmdi-account mr-1 color-royal" />
      <strong>Pronouns: </strong>
      <em>{props.pronouns}</em>
    </p>
  );
}

function Bio(props) {
  if (props.bio && props.bio.length) {
    if (props.bio.length > 1) {
      return (
        <div className="bio well">
          <p>{props.bio[0]} </p>
          <p>
            <a
              href={"#bioModal-" + props.firstName}
              data-toggle="modal"
              data-target={"#bioModal-" + props.firstName}
            >
              {"More about " + props.firstName}
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="bio well">
          <p>{props.bio[0]}</p>
        </div>
      );
    }
  }
  return (
    <div className="bio well d-none d-lg-block">
      <p>Bio coming soon.</p>
    </div>
  );
}
