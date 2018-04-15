import React from "react";
import helper from "../Helper";
import './Sponsors.css';
import fireBase from "../../firebase";
import loading from "./loading.png";

export default class SponsorHeroItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            logoPath: loading,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        var storageRef = fireBase.storage().ref();
        var logoRef = storageRef.child('sponsors/' + this.props.logo);
        logoRef.getDownloadURL().then(url => {
            this.setState({
                isLoaded: true,
                logoPath: url
            })
        }
        ).catch(error => {
            this.setState(
                {
                    error: "Error: " + error.code
                }
            )
        })
    }

    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    handleClick() {
        this.openInNewTab(this.props.url);
    }
    render(props) {
        const { error } = this.state;
        if (error) {
            return <div className={"card col-lg-2 col-sm-3 card-" + helper(this.props.level)}>{error}</div>
        } else {
            return (
                <div className={"card col-lg-2 col-sm-3 card-" + helper(this.props.level)}>
                    <div className="ms-thumbnail-container">
                        <figure className={"ms-thumbnail ms-thumbnail-bottom ms-thumbnail-" + helper(this.props.level)}>
                            <img src={this.state.logoPath} alt={this.props.logo} className="img-fluid"></img>
                            <figcaption className="ms-thumbnail-caption text-center">
                                <div className="ms-thumbnail-caption-content">
                                    <h4 className="ms-thumbnail-caption-title">{this.props.name}</h4>
                                    <p>{this.props.description}</p>
                                    <button onClick={(e) => this.handleClick(e)} className={"btn-circle btn-circle-raised btn-circle-" + helper(this.props.level)}>
                                        <i className="zmdi zmdi-globe"></i><div className="ripple-container"></div></button>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            )
        }
    }
}