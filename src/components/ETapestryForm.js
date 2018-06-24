import React, { Component } from 'react'

export default class ETapestryForm extends Component {

    
  render() {
      var etap = "https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/"
      var etapJs = "//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
    return (
        <div className="row">
            <iframe id="etapIframe" title={this.props.title} src={etap + this.props.form + ".html"}></iframe>
            <script src={etapJs} type="text/JavaScript"></script>
        </div>
    )
  }
}
