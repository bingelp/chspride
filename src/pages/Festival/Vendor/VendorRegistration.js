import React, { Component } from 'react'
import ETap from '../../../components/ETapestryForm'
export default class VendorRegistration extends Component {

    render() {
        return (
            <div className="row">
                <div className="bg-info">
                    <div className="card-body-big">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="color-white text-center mb-4">How to register?</h2>
                                <h3 className="color-white text-center mb-4">At this time we are no longer accepting applications for food vendors or food trucks</h3>
                                <p className="lead lead-lg text-center mt-4 col">You can easily register online by filling out the form below.
                                The standard fee for vendors is <strong>$150</strong>. If electricity is needed, <strong>$25.00</strong> will be
                                 added to the registration. Nonprofit organizations are entitled to a <strong>50% discount</strong>.
                                    Proof of nonprofit status must be file with Charleston Pride Festival prior to September 20th.
                                 </p>
                                <p className="lead lead-lg text-center col">Dimensions for vendor booths are <strong>10′ x 10′</strong>. Charleston Pride only provides the plot for a
                                    vendor space and does not supply tents, tables or chairs. Vendor packets will be sent to the email address on file by Thursday, September 20th.
                                </p>
                                <p className="lead lead-lg text-center col">Please note that vendors are required to meet certain obligations, including, but not limited to,
                                    providing proof of liability insurance and the appropriate licenses for Food and Beverage vending.
                                    Vendors must submit these documents to our vendor coordinator at
                                 <a className="color-royal" href="mailto:vendors@charlestonpride.org"> vendors@charlestonpride.org</a>.</p>
                                <p className="ml-3 text-center"><em>All sales are final.</em></p>
                            </div>
                        </div>
                        <ETap form="VendorRegistration" title="parade-registration" />
                    </div>
                </div>
            </div>
        )
    }
}
