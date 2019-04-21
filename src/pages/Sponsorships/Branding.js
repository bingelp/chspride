import React, { Component } from "react";
import PropTypes from "prop-types";

class Branding extends Component {
  Price(props) {
    if (props.avaliable) {
      return <h3 className="text-center">${props.price}</h3>;
    }
    return <h3 className="color-warning text-center">SOLD</h3>;
  }

  render() {
    const colors = new Map([
      ["red", "color-danger"],
      ["orange", "color-warning"],
      ["yellow", "color-caution"],
      ["green", "color-success"],
      ["blue", "color-info"],
      ["purple", "color-royal"]
    ]);
    return (
      <div className="col-md-6">
        <h2 className="text-center">{this.props.name}</h2>
        <this.Price
          price={this.props.rate
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          avaliable={this.props.avaliable}
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
            <strong className={colors.get(this.props.level)}>
              {this.props.level.charAt(0).toUpperCase() +
                this.props.level.slice(1)}{" "}
            </strong>
            Level Plus:
            <ul>
              {this.props.details && this.props.details.map(d => <li>{d}</li>)}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Branding.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  avaliable: PropTypes.bool.isRequired,
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
