import React, { Component } from 'react'
import "./Cruise.css";
import CountdownClock from "../CountdownClock"

export default class Cruise extends Component {
    render() {
        var etap = "https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/cruise.html"
        var etapJs = "//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-cruise">

                </div>
                <div className="container">

                    <CountdownClock eventTime="2018-06-23T19:00:00" color="warning" />
                    <div className="card">
                        <div className="card-body">
                            <iframe id="etapIframe" title="donate" src={etap}></iframe>
                            <script src={etapJs} type="text/JavaScript"></script>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
