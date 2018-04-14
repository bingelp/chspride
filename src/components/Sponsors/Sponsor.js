import React from "react";
import './Sponsors.css';
import helper from "../Helper"

export default class Sponsor extends React.Component {

    openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
    handleClick() {
        console.log('this is:', this);
        this.openInNewTab(this.props.url);
    }
    render(props) {
    return (
    <div className="ms-thumbnail-container">
        <figure className={"ms-thumbnail ms-thumbnail-bottom ms-thumbnail-"+ helper(this.props.level)}>
            <img src={"https://placehold.it/"+this.props.size+"?text="+this.props.name} alt="" className="img-fluid"></img>
            <figcaption className="ms-thumbnail-caption text-center">
                <div className="ms-thumbnail-caption-content">
                    <h4 className="ms-thumbnail-caption-title">{this.props.name}</h4>
                    <p>{this.props.description}</p>
                    <button onClick={(e) => this.handleClick(e)} className={"btn-circle btn-circle-raised btn-circle-" +helper(this.props.level)}>
                    <i className="zmdi zmdi-globe"></i><div className="ripple-container"></div></button>
                </div>
            </figcaption>
        </figure>
    </div>

    )
   }
}