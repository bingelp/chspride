import React, { Component } from 'react'
import "./Cruise.css";
import CountdownClock from "../../components/CountdownClock"
import ETapestryForm from '../../components/ETapestryForm';

export default class Cruise extends Component {
    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-cruise">

                </div>
                <div className="container">

                    <CountdownClock eventTime="2018-09-15T19:00:00" color="warning" />
                    <div className="card">
                        <div className="card-body">
                            <ETapestryForm form="cruise" title="Cruise"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
