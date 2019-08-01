import React, { Component } from "react";
import PropTypes from "prop-types";

class AftonForm extends Component {
  render() {
    var afton = "https://aftontickets.com/event/buyticketIframe/";
    return (
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <iframe
            id="aftonIframe"
            height="800"
            width="600"
            title={this.props.title}
            src={afton + this.props.id}
          />
        </div>
      </div>
    );
  }
}

AftonForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default AftonForm;
