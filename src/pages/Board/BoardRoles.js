import React from "react";
import rolesPdf from "./CPF-Board-Roles.pdf";
import "./Board.css";

export default class BoardRoles extends React.Component {
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-roles ms-hero-bg-info">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Roles &amp; Responsibilities
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="border-box card-hero">
            <div className="card-body">
              <a
                className="btn btn-info pull-right btn-raised"
                download
                href={rolesPdf}
              >
                <i className="fa fa-download" /> Download
              </a>
              <Position
                title="Chair / Chief Executive Officer"
                description="The Chair of the Board serves as the Chief Executive Officer of Charleston Pride Festival, Inc.
                             This position serves as a legal officer of the organization.
                             As the Chairman / Chief Executive Officer, you are ultimately responsible for all aspects
                             of the organization, including but not limited to, managing the Executive Board,
                             entering into all legal contracts on behalf of the organization, and coordinating with
                             the City of Charleston for necessary event applications, permits, and filings."
              >
                <li>
                  One of four (4) legal officers of Charleston Pride Festival,
                  Inc.
                </li>
                <li>
                  Manage the Executive Board, including the Chief Operating
                  Officer, Chief Financial Officer, and Secretary of the Board.
                </li>
                <li>
                  Coordinate closely with the Chief Operating Officer in his/her
                  management of the Board of Directors.
                </li>
                <li>
                  Enter into all necessary legal contracts on behalf of
                  Charleston Pride Festival, Inc., including, but not limited
                  to, municipal permits, insurance contracts, and event
                  contracts.
                </li>
                <li>
                  Coordinate closely with the Festival Director and Director of
                  Entertainment regarding the annual Charleston Pride Festival
                  planning throughout the year.
                </li>
              </Position>
              <Position
                title="Vice Chair / Chief Operating Officer"
                description="The Vice Chairman of the Board serves as the Chief Operating Officer of Charleston Pride Festival, Inc.
                                This position serves as a legal officer of the organization. As the Vice Chairman / Chief Operating Officer,
                                you are responsible for managing the Board of Directors, the implementation and management of the
                                CPF website (charlestonpride.org) and other duties as assigned and agreed upon by the Chief Executive
                                Officer."
              >
                <li>
                  One of four (4) legal officers of Charleston Pride Festival,
                  Inc.
                </li>
                <li>
                  Manage the Board of Directors, including the Director of
                  Advertising, Director of Sponsorships, Director of
                  Communications, Director of Fundraising, Director of Outreach,
                  Director of Entertainment and the Festival Director, and
                  ensure they have the tools and training necessary to complete
                  their responsibilities.
                </li>
                <li>
                  Work closely with the Chief Executive Officer in regards to
                  day-to-day details and activities
                </li>
                <li>related to Charleston Pride.</li>
                <li>
                  See to the implementation and management of the Charleston
                  Pride website
                </li>
                <li>(charlestonpride.org).</li>
              </Position>
              <Position
                title="Chief Financial Officer"
                description="The Chief Financial Officer serves as a legal officer of the organization and is the legal custodian of the
                                books. This position serves as the tertiary chair in the absence of the Chairman and Vice Chair. As the
                                Chief Financial Officer you are ultimately responsible for all financial aspects of the organization,
                                including, but not limited to, preparing financial reports, monitoring financial transactions at all events,
                                and daily data entry."
              >
                <li>
                  One of four (4) legal officers of Charleston Pride Festival,
                  Inc.
                </li>
                <li>
                  Provide general ledger reports during regular Board meetings.
                </li>
                <li>
                  Coordinate closely with the Chief Executive Officer to prepare
                  yearly tax filing.
                </li>
                <li>
                  Prepare quarterly retail and admissions license filings.
                </li>
                <li>Issue all necessarily tax receipts and reimbursements.</li>
                <li>
                  Actively maintain Pride Partner Program and communicate with
                  members regarding dues.
                </li>
              </Position>
              <Position
                title="Secretary of the Board"
                description="The Secretary of the Board serves as a legal officer of the organization and is the legal custodian of all
                                documents, including regular Board Meeting minutes and filing related to the organization’s public
                                charity status. As the Secretary of the Board, you are generally responsible for recording minutes at each
                                Board meeting, and maintaining all necessary documents regarding the organization’s public charity
                                status."
              >
                <li>
                  One of four (4) legal officers of Charleston Pride Festival,
                  Inc.
                </li>
                <li>Record minutes at all Board Meetings.</li>
                <li>
                  Maintain all documents regarding 501c3 public charity status.
                </li>
              </Position>
              <Position
                title="Festival Director"
                description="The Festival Director is a required position on the Board of Directors of Charleston Pride Festival, Inc. per
                                the organizational bylaws. This position provides planning and oversight over all Charleston Pride Week
                                festivities with oversight from the Board of Directors. While all Pride Week events require approval from
                                the Board of Directors, the Festival Director is directly responsible for organizing all aspects of the
                                Charleston Pride Festival, including, but not limited to, vendors, park logistics, and necessary service /
                                equipment rentals."
              >
                <li>
                  Plan and / or provide oversight for all Charleston Pride Week
                  festivities
                </li>
                <li>
                  Coordinate with the Board of Directors for approval on all
                  Charleston Pride Week events.
                </li>
                <li>
                  Recruit and communicate with all vendors for the annual
                  Charleston Pride Festival.
                </li>
                <li>
                  Plan and implement logistics for the annual Charleston Pride
                  Festival.
                </li>
                <li>
                  Secure all necessary service and equipment rentals for the
                  annual Charleston Pride Festival.
                </li>
              </Position>
              <Position
                title="Director of Sponsorships"
                description="The Director of Sponsorship’s responsibilities include, but are not limited to, the procurement and
                                cultivation of relationships with sponsors for the Charleston Pride Festival. Sponsors should ideally
                                include both corporate/national/international businesses, as well as local enterprises."
              >
                <li>
                  Knowledge of and familiarity with past sponsors of Charleston
                  Pride.
                </li>
                <li>
                  Knowledge of and familiarity with Charleston Pride sponsorship
                  levels.
                </li>
                <li>
                  Coordinate with Chief Executive Officer and Chief Operating
                  Officer to update and maintain
                </li>
                <li>Charleston Pride’s sponsorship levels.</li>
                <li>
                  Work independently contacting previous sponsors in order to
                  retain their support, as well as new, potential sponsors.
                </li>
                <li>
                  Maintain an organized list of sponsors and ensures that all
                  sponsors receive the benefits associated with their
                  sponsorship level.
                </li>
              </Position>
              <Position
                title="Director of Advertising"
                description="The Director of Advertising responsibilities include, but are not limited to, the sale of all advertising to
                                be placed in the annual Charleston Pride Guide (one week prior to the festival), and the development of
                                a program to promote the sale of ads to be placed on the Charleston Pride Festival website
                                (charlestonpride.org)."
              >
                <li>
                  Knowledge of and familiarity with the Pride Guide and all of
                  its previous iterations and ad purchasers.
                </li>
                <li>
                  Knowledge of and familiarity with Charleston Pride’s
                  advertising offerings
                </li>
                <li>
                  Work independently contacting previous advertisers and
                  potential new advertisers for the current year’s Pride Guide
                </li>
                <li>
                  Secure artwork from advertisers ahead of the set deadline
                </li>
                <li>
                  Manage relationship with designer and printer and project
                  manage Pride Guide creation and distribution
                </li>
              </Position>
              <Position
                title="Director of Communications"
                description="The Director of Communication’s responsibilities include, but are not limited to, the development and
                                execution of a marketing and communication’s strategy for the Charleston Pride Festival. The marketing
                                and communications strategy should include plans for social media, traditional media (print, television,
                                radio), blog posts, posters/flyers, billboards, street banners, light pole banners, and creation and
                                distribution of press releases."
              >
                <li>
                  Knowledge of and familiarity with modes of communication
                  utilized by Charleston Pride in the past.
                </li>
                <li>
                  Develop new and improved modes of communication for Charleston
                  Pride.
                </li>
                <li>
                  Manage Charleston Pride social media (Facebook, Twitter and
                  Google+)
                </li>
                <li>
                  Create regular blog posts on charlestonpride.com to promote
                  Charleston Pride news.
                </li>
                <li>
                  Coordinate Charleston Pride’s relationships with local media
                  (print, radio and television) to ensure regular coverage of
                  Charleston Pride news and events.
                </li>
                <li>
                  Coordinate billboards, street banners, light pole banners,
                  newspaper ads, and other modes ofcommunication as needed
                  leading up to the festival week.
                </li>
                <li>Create and distribute Charleston Pride press releases</li>
              </Position>
              <Position
                title="Director of Entertainment"
                description="The Director of Entertainment serves as a member of the Board of Director. As Director of
                                Entertainment, you are charged with securing entertainment for all events and fundraisers, including
                                the annual Charleston Pride celebration. The Director of Entertainment coordinates closely with the
                                Chief Executive Officer in establishing plans for entertainment at future events and securing all
                                subsequent necessary contracts."
              >
                <li>
                  Provide recommendations for entertainment at all fundraiser
                  events.
                </li>
                <li>
                  Provide recommendations for entertainment during Charleston
                  Pride.
                </li>
                <li>
                  Secure all necessary and desired entertainment contracts for
                  events.
                </li>
                <li>
                  Coordinate with the Chief Executive Officer to sign necessary
                  contracts for entertainment.
                </li>
                <li>
                  Coordinate travel and lodging arrangements for all
                  entertainment bookings.
                </li>
              </Position>
              <Position
                title="Director of Events"
                description="The Director of Events serves as a member of the Board of Director. As Director of Fundraising you are
                                charged with planning or oversight over all major fundraising events throughout the year with general
                                oversight from the Board of Directors. These events include all major annual fundraisers, including the
                                Charleston Rainbow Run, Pride On The Harbor, A Night for Pride, and Charleston Pride Pageant."
              >
                <li>
                  Provide planning and / or oversight over all major fundraising
                  events, excluding Charleston Pride Week festivities.
                </li>
                <li>
                  Coordinate with the Chief Executive Officer during planning on
                  all major fundraisers.
                </li>
                <li>
                  Coordinate with the Director of Entertainment to secure
                  necessary acts and bookings for all major fundraisers.
                </li>
                <li>
                  Provide logistical / financial planning reports to the Board
                  of Directors prior any major fundraiser.
                </li>
                <li>
                  Secure all necessary service / equipment rentals for
                  fundraising events.
                </li>
              </Position>
              <Position
                title="Director of Outreach"
                description="The Director of Outreach’s responsibilities include, but are not limited to, developing and maintaining
                                meaningful and productive relationships between Charleston Pride Festival and other local and regional
                                nonprofit organizations, community groups, and other LGBT organizations."
              >
                <li>
                  Knowledge of and familiarity with the diverse non-profit and
                  community groups represented in our region.
                </li>
                <li>
                  Develop creative strategies for building and strengthening
                  Charleston Pride’s partnership with other organizations and
                  groups.
                </li>
                <li>
                  Develop strategies for increasing the diversity of those
                  involved with Charleston Pride.
                </li>
                <li>
                  Work closely with Festival Director to ensure official
                  festival week events are accessible to all people.
                </li>
                <li>
                  Work closely with the Director of Communications to identify
                  ways to strengthen Charleston Pride’s outreach through our
                  various modes of communication
                </li>
                <li>
                  Serve as liaison between Charleston Pride and other
                  organizations to aid other Charleston Pride Directors in the
                  distribution of information, solicitation of donations, sale
                  of advertising, solicitation for vendors and parade
                  participants, and other possible efforts.
                </li>
              </Position>
              <Position
                title="Volunteer Coordinator"
                description="The Volunteer Coordinator’s responsibilities include, but are not limited to, recruiting volunteers for
                                events, maintaining a volunteer database, and developing long term relationships with volunteers that
                                will encourage them to return time and again to volunteer with the Charleston Pride organization."
              >
                <li>
                  Coordinate volunteer needs with other Charleston Pride
                  Festival board members
                </li>
                <li>Recruit volunteers throughout the year</li>
                <li>
                  Work with Director of Outreach to recruit volunteers through
                  our relationship with other organizations
                </li>
                <li>Maintain regular communication with volunteer base</li>
                <li>Create incentives for volunteers</li>
                <li>Maintain volunteer database</li>
              </Position>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Position(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>General Responsibilities:</h3>
      <ul>{props.children}</ul>
    </div>
  );
}
