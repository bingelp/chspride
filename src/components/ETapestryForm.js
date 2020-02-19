import React, { Component } from "react";
import PropTypes from "prop-types";

class ETapestryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
  }

  componentDidMount() {
    if (this.props.form) {
      fetch(
        "https://chspride-api.azurewebsites.net/api/settings/etap/" +
          this.props.form.toLowerCase()
      )
        .then(result => {
          if (!result.ok) throw result;
          return result.json();
        })
        .then(data => {
          this.setState({
            enabled: data.enabled
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  getSource() {
    return (
      "https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/" +
      this.props.form +
      ".html"
    );
  }

  getScript() {
    return (
      <script
        src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
        type="text/JavaScript"
      ></script>
    );
  }

  getContact() {
    return this.props.contact ? (
      <div>
        If there are any questions, please reach out to us at{" "}
        <a href={"mailto:" + this.props.contact + "@charlestonpride.org"}>
          {this.props.contact + "@charlestonpride.org"}
        </a>
      </div>
    ) : (
      <div></div>
    );
  }

  getMessage() {
    return this.state.enabled ? (
      <h3>{this.props.enabledText}</h3>
    ) : (
      <h3>{this.props.disabledText}</h3>
    );
  }

  render() {
    return (
      <div className={"card card-" + this.props.color}>
        <div className="card-body text-center">
          <h1>{this.props.title}</h1>
          {this.getMessage()}
          {this.getContact()}
          {this.state.enabled ? (
            <iframe
              className="well"
              id="etapIframe"
              title={this.props.title}
              src={this.getSource()}
            ></iframe>
          ) : (
            <h2>{this.props.disabled}</h2>
          )}
          {this.getScript()}
        </div>
      </div>
    );
  }
}

ETapestryForm.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string,
  form: PropTypes.string.isRequired,
  enabledText: PropTypes.string.isRequired,
  disabledText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ETapestryForm;
