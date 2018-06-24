import React, { Component } from 'react'

export default class ParadeRegistration extends Component {
    
    render() {
        return (
        <div className="row">
            <div className="bg-info">
                <div className="card-body-big">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="color-white text-center mb-4">How to register?</h2>
                            <p className="lead lead-lg text-center mt-4 col">You can easily register online by filling out the form below. 
                            Walking entries can be registered for only <strong>$15</strong> and vehicle/float entries can be registered for just <strong>$25</strong>.
                            If you have any questions, please feel free to reach out to us at 
                            <a className="color-royal" href="mailto:info@charlestonpride.org"> info@charlestonpride.org.</a> </p>
                            <p className="ml-3 text-center"><em>All sales are final.</em></p>
                        </div>
                    </div>
                    <div className="row">
                        <iframe id="etapIframe" title="parade-registration" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/ParadeRegistration.html"></iframe>
                        <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}