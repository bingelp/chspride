import React, { Component } from "react";
import PropTypes from "prop-types";

class Branding extends Component {
  Price(props) {
    if (props.available) {
      return <h3 className="text-center">${props.price}</h3>;
    }
    return <h3 className="color-info text-center">SOLD</h3>;
  }

  render() {
    const colors = new Map([
      ["red", "-danger"],
      ["orange", "-warning"],
      ["yellow", "-caution"],
      ["green", "-success"],
      ["blue", "-info"],
      ["purple", "-royal"]
    ]);

    return (
      <div className={this.props.level === "red" ? "col-lg-8" : "col-lg-6"}>
        <div className={"branding card card" + colors.get(this.props.level)}>
          <h2 className="text-center mb-1 mt-3">{this.props.name}</h2>
          <this.Price
            price={this.props.rate
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            available={this.props.available}
          />
          <ul>
            {this.props.presenter && (
              <li>
                <strong>Promoted As:</strong>
                {" " + this.props.presenter + " Presented by "}
                <strong>YOUR COMPANY</strong>
              </li>
            )}
            <li>
              <strong>Event:</strong> {this.props.event}
            </li>
            <li>
              <strong>Perks:</strong> Everything from{" "}
              <strong className={"color" + colors.get(this.props.level)}>
                {this.props.level.charAt(0).toUpperCase() +
                  this.props.level.slice(1)}{" "}
              </strong>
              Level Plus:
              <ul>
                {this.props.details &&
                  this.props.details.map(d => <li>{d}</li>)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Branding.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  presenter: PropTypes.string,
  level: PropTypes.oneOf([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
  ]),
  details: PropTypes.arrayOf(PropTypes.string)
};

export default Branding;
