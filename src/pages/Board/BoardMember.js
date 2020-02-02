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
                    "https://chspride.blob.core.windows.net/directors/" +
                    this.props.meta.id.toLowerCase() +
                    ".jpg"
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
                  <strong>Contact: </strong>
                  <a
                    href={
                      "mailto:" + this.props.meta.id + "@charlestonpride.org"
                    }
                  >
                    {this.props.meta.id}@charlestonpride.org
                  </a>
                </p>
                <p>
                  <i className="zmdi zmdi-calendar mr-1 color-info" />
                  <strong>Elected to Position: </strong>
                  {this.props.meta.elected}
                </p>
                <p>
                  <i className="zmdi zmdi-calendar-alt mr-1 color-success" />
                  <strong>Served on Board Since: </strong>
                  {this.props.meta.electedToBoard}
                </p>
                {Pronouns(this.props)}
                <div className="bio well">
                  {this.props.meta.bio ? (
                    this.props.meta.bioParagraphs.map(b => <p key={b}>{b}</p>)
                  ) : (
                    <em>Bio coming soon.</em>
                  )}
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

function Pronouns(props) {
  if (!props.meta.pronouns) {
    return null;
  }
  return (
    <span>
      <i className="zmdi zmdi-account mr-1 color-royal" />
      <strong>Pronouns: </strong>
      <em>
        {capitalizeFirstLetter(props.meta.pronouns.subjective)}/
        {capitalizeFirstLetter(props.meta.pronouns.objective)}/
        {capitalizeFirstLetter(props.meta.pronouns.possessive)}
      </em>
    </span>
  );
}
