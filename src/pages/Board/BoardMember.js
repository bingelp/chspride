import React from "react";

export default class BoardMember extends React.Component {
  headshot(props) {
    return (
      <div className="withripple zoom-img center m-2">
        <img
          src={
            "https://chaspride.blob.core.windows.net/directors/" +
            props.data.id.toLowerCase() +
            ".jpg"
          }
          alt={props.data.firstName + " " + props.lastName}
          className="img-fluid"
        />
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
          {props.meta.elected}
        </p>
        <p>
          <i className="zmdi zmdi-calendar-alt mr-1 color-success" />
          <strong>Served on Board Since: </strong>
          {props.meta.electedToBoard}
        </p>
        {Pronouns(props.meta)}
        <div className="bio well">
          {props.meta.bio ? (
            props.meta.bio.map(b => <p key={b}>{b}</p>)
          ) : (
            <em>Bio coming soon.</em>
          )}
        </div>
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
      </div>
    );
  }
}

function Pronouns(props) {
  if (!props.pronouns) {
    return null;
  }
  return (
    <span>
      <i className="zmdi zmdi-account mr-1 color-royal" />
      <strong>Pronouns: </strong>
      <em>{props.pronouns}</em>
    </span>
  );
}
