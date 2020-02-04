import React, { Component } from "react";

export default class ETapestryForm extends Component {
  render() {
    var etap =
      "https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/";
    var etapJs =
      "//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js";
    return (
      <div className={"card card-" + this.props.color}>
        <div className="card-body text-center">
          <h1>{this.props.title}</h1>
          <div className="py-3">{this.props.children}</div>
          <iframe
            className="well"
            id="etapIframe"
            title={this.props.title}
            src={etap + this.props.form + ".html"}
          ></iframe>
          <script src={etapJs} type="text/JavaScript"></script>
        </div>
      </div>
    );
  }
}
