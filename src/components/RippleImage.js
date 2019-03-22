import React, { Component } from "react";
import PropTypes from "prop-types";

class RippleImage extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <a class="img-thumbnail withripple color-dark">
        <div class="thumbnail-container">
          <img src={this.props.src} alt={this.props.alt} class="img-fluid" />
        </div>
      </a>
    );
  }
}

RippleImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default RippleImage;
