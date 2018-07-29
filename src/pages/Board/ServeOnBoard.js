import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section'

export default class ServeOnBoard extends Component {
  Subtitle(props) {
    return (<span></span>)
  }
  render() {
    return (
      <Section cover="ms-hero-img-serve" title="Apply to Serve on the Board of Directors" >
        <div className="text-center">
          <h2>Step 1: Reviews the Bylaws</h2>
          <Link to="/bylaws" className="btn btn-raised btn-primary">Bylaws</Link>
          <h2>Step 2: Review the Board Roles &amp; Responsibilitites</h2>
          <Link to="/board-roles" className="btn btn-raised btn-primary">Board Roles &amp; Responsibilitites</Link>
          <h2>Step 3: Submit Resume <em>(Optional)</em></h2>
          <p>Send your resume to <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a></p>
          <h2>Step 4: Apply</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbBqRFiax63FW3t_1toWWZaedKDDOCusB7aOwcgPvz-Ao-SQ/viewform?embedded=true" width="700" height="1000" frameborder="0" marginheight="0" marginwidth="0" title="Application">Loading...</iframe>        </div>
      </Section>
    )
  }
}
