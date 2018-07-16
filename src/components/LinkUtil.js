import React, { Component } from 'react';

class ExternalBtn extends Component {
  render(props) {
    return (
      <a href={this.props.to} target="_blank" rel="noopener noreferrer" className={"btn btn-raised animated fadeInUp animation-delay-5 btn-" + this.props.color}>
      <i className={"fa fa-" + this.props.icon}></i> {this.props.title}</a>
    );
  }
}

class ExternalWhiteBtn extends Component {
  render(props) {
    return (
      <a href={this.props.to} target="_blank" rel="noopener noreferrer" className={"btn btn-white btn-raised color-" + this.props.color}>
      <i className={"fa fa-" + this.props.icon}></i> {this.props.title}</a>
    );
  }
}

class ExternalLink extends Component {
  render() {
    return (
      <a href={this.props.to} target="_blank" rel="noopener noreferrer">{this.props.title}</a>
    );
  }
}


export  {ExternalLink, ExternalBtn, ExternalWhiteBtn};