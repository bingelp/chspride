import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

class ButtonLink extends Component {
  render(props){
    return(
    <Link to={this.props.to} className={"btn btn-raised animated fadeInUp animation-delay-10 btn-"+ this.props.color}>
    <i className={"fa fa-" + this.props.icon}></i> {this.props.children}</Link>)
  }
}


export  {ExternalLink, ExternalBtn, ExternalWhiteBtn, ButtonLink};