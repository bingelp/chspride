import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section'
import BoardApplication from '../Board/BoardApplication'

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
        <h2>Step 3: Apply</h2>
        <p>Application form currently unavaliable. To Apply email <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a></p>
        {/* <BoardApplication/> */}
        </div>
      </Section>
    )
  }
}
