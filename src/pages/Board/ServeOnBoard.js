import React, { Component } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import Vacancies from "./Vacancies";

export default class ServeOnBoard extends Component {
  Subtitle() {
    return <span />;
  }
  render() {
    return (
      <Section
        cover="ms-hero-img-serve"
        title="Apply to Serve on the Board of Directors"
        subtitle="If You See a Need, Take the Lead."
      >
        <div className="card card-primary mt-3">
          <div className="card=body">
            <div className="text-center">
              <h2>Step 1: Reviews the Bylaws</h2>
              <Link
                to="/bylaws"
                className="btn btn-raised btn-primary"
                target="_blank"
              >
                Bylaws
              </Link>
              <h2>Step 2: Review Openings</h2>
              <Vacancies />
              <h2>
                Step 3: Submit Resume <em>(Optional)</em>
              </h2>
              <p>
                Send your resume to{" "}
                <a href="mailto:info@charlestonpride.org">
                  info@charlestonpride.org
                </a>
              </p>
              <h2>Step 4: Apply</h2>
            </div>
          </div>
        </div>
        <div className="card card-primary">
          <div className="card-body">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScbBqRFiax63FW3t_1toWWZaedKDDOCusB7aOwcgPvz-Ao-SQ/viewform?embedded=true"
              width="800"
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Application"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </Section>
    );
  }
}
