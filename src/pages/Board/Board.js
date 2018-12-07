import React from 'react';
import BoardMember from './BoardMember';
import VacantBoardMember from './VacantBoardMember';
import './Board.css'
import pete from './Pete.jpg';
import adam2 from './Adam2.jpg';
import tony from './Tony.jpg';
import vanity from './Vanity.jpg';
import regina from './Gina.jpg';
import mollie from './Mollie.jpg';
import clark from './Clark.jpg';
import evan from './Evan.jpg';



class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-board ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Board of Directors</h1>
              <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">The Board of Directors is formed from four permanent positions, including Chief Executive, Chief Operating Officer, Secretary of the Board, and Chief Financial Officer, which form the Executive Committee, and up to nine additional directorship positions which are created and removed at the discretion of the Executive Committee. Elections are held at the beginning of every fiscal year to fill the Executive Committee. The newly elected Executive Committee is then responsible for creating the additional director-level positions to assist in the management and administration of the <strong>Charleston Pride Festival</strong>.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center">2019 Board of Directors</h2>
          <div className="row">
            <BoardMember id="1" exec="true" firstName="Tony" lastName="Williams" elected="February 2016" email="tony.williams" title="Chair / Chief Executive Officer" photoSrc={tony} pronouns="He/Him/His" >
              <p>Tony is a native Charlestonian, College of Charleston graduate, holds a Master’s Degree in Public Administration and an employee at Blackbaud, Inc. Tony began his work with Charleston Pride at its inception, when he served as the Logistics/Park Coordinator. He joined the board in an official capacity, serving as the Treasurer, Vice Chair and Chair. Tony was elected to a third term as Chair in 2017.</p>
            </BoardMember>
            <BoardMember id="2" exec="true" firstName="Mollie" lastName="Soto" elected="November 2017" email="mollie.soto" title="Vice Chair / Chief Operating Officer" photoSrc={mollie} pronouns="She/Her/Hers" >
              <p>Mollie is a 2009 graduate of Francis Marion University, where she holds a B.S. in Elementary Education and a B.A. in Spanish. Originally from Florence, Mollie began her studies at College of Charleston and fell in love with Charleston’s charm and diversity.</p>
              <p>Mollie has traveled in Latin America, teaching English in Mexico and Peru. Currently, she teaches high school and Continuing Education Spanish courses in the Charleston area. She has a passion for travelling, teaching, and volunteering in the community.</p>
              <p>As Director of Events, Mollie hopes to develop more diverse Pride events and volunteer opportunities in the community. Outside of work, you may find Mollie on the tennis courts, the beach or hanging out with her dog Marley.</p>
              </BoardMember>
            <BoardMember id="3" exec="true" firstName="Evan" lastName="Nowell" elected="May 2018" email="evan.nowell" title="Chief Financial Officer" photoSrc={evan} pronouns="He/Him/His" >
              <p>Evan is a native South Carolinian, who recently returned to his home state from New York and launched his own PR consulting firm, The Nowell Group. He works with industry experts and organizations across the country to inform and inspire the public around some of today’s most pressing issues.</p>
              <p>Evan joined PRIDE in 2018 with the goal of expanding its reach and resources to LGBTQ+ communities who are too often overlooked. He currently serves as Chief Financial Officer.</p>
              <p>Prior to founding The Nowell Group and joining Charleston PRIDE, Evan was a Senior Director at RF|Binder where he oversaw strategic communications programs and partnerships for the agency’s Education and Corporate clients. He joined RF|Binder in 2015 from Columbia Business School, where he was the Assistant Director of Media Relations in the Office of Marketing and Communications. During his time at Columbia, Evan worked to expand the scope of the School’s press coverage, amplifying groundbreaking business research and thought leadership. He also held positions as Media Relations Manager and Media Relations Coordinator. Evan began his career in PR at Cohn &amp; Wolfe in New York.</p>
              <p>He holds a Master's in Negotiation and Conflict Resolution from Columbia University and a Bachelor's in Business Administration in Marketing from the University of Georgia's Terry College of Business.</p>
            </BoardMember>
            <BoardMember id="4" firstName="Adam" lastName="Cabe" elected="November 2017" email="adam.cabe" title="Festival Director" photoSrc={adam2} pronouns="He/Him/His" >
              <p>Bio coming soon.</p>
            </BoardMember>
            <BoardMember id="5" firstName="Clark" lastName="Haywood" elected="November 2017" email="clark.haywood" title="Director of Communications" photoSrc={clark} pronouns="He/Him/His" >
              <p>Clark is a graduate of Columbia College Chicago where he received his Bachelor of Arts in Theatre and Administration in 2010. Originally from Birmingham, AL, Clark moved to Charleston in 2015 to be with his better-half Jason who was already living in the Holy City.</p>
              <p>Clark has worked in Charleston with Blackbaud, Amazon Kindle Content, and volunteers regularly with Lowcountry AIDS Services in their educational and fundraising efforts. Clark is a founding board member of Amazon Kindle Content’s first LGBTQ+ work place affinity group, GLAmazon.</p>
              <p>Clark is a classically trained pastry artist and can be found in the kitchen or with Jason and their furball Bella at the park or beach. Clark services as the Director of Communications and looks forward to his opportunity to work with and for the LGBTQ+ community of Charleston.</p>
            </BoardMember>
            <BoardMember id="6" firstName="Pete" lastName="Bingel" elected="November 2017" email="peter.bingel" title="Director of Technology" photoSrc={pete} pronouns="He/Him/His" >
              <p>Pete is a Charleston native and grew up in Mount Pleasant. After graduating from the University of South Carolina in 2008 with a BS in Computer Science, he returned to Charleston to work in Charleston’s growing tech industry. In his free time, he can be found sipping on a Bloody Mary while enjoying a wonderful brunch or relaxing at home with his fiancé Ben.</p>
              <p>As the first-ever Director of Technology, his goal is to help Charleston Pride by designing and implementing software solutions in order to support its mission and business objectives.</p>
            </BoardMember>
            <BoardMember id="7" firstName="Vanity" lastName="Deterville" elected="January 2018" email="vanity.deterville" title="Director of Outreach" photoSrc={vanity} pronouns="She/Her/Hers" >
              <p>She is a Political Science student concentrating in Public Policy at the College of Charleston and a native of Charleston, SC. She has dedicated her time as an activist to LGBTQ initiatives and populations throughout the Lowcountry experiencing housing and food insecurity here in Charleston.</p>
              <p>Some of her creative projects include an unprecedented play in the city’s history as she highlights her intersecting identities as a person of color and a trans-woman with a collaborative effort in the form of a poetic play entitled “Sugar In the Grits” which was showcased in last year’s annual MOJA Arts festival.</p>
              <p>She believes that tradition has sometimes maintained a restrictive stronghold on southern families and queer youth of color. An attendee of “Transformative Teaching Collective” meetings, she is an advocate of art for social change and wants to implement the appropriate change necessary for inclusive and progressive thinking, to provide support and professional development for queer youth and youth of color inside CCSD schools while recently graduating from the Charleston RISE program, an extension of the National 50 Can organization and through the words of her ongoing poetry.</p>
            </BoardMember>
            <BoardMember id="8" firstName="Regina" lastName="Duggins" elected="July 2017" email="regina.duggins" title="Director At-Large" photoSrc={regina} pronouns="She/Her/Hers" >
              <p>Originally from Coney Island-Brooklyn, NY. Regina has lived in Charleston, SC for 7 years. Regina has a Master’s in Special Education and is currently mid- way completion of her Doctoral Degree in Educational Leadership from Grand Canyon University.</p>
              <p>She came to the board as a willing participant in support of adding diversity awareness to the community at-large. She hopes to reach out to the LGBTQ of Color community of Charleston and to provide them with support and love.</p>
              <p>My greatest achievements are my family and being a local poet and author. I enjoy spreading my messages in all arenas. Regina is a lover of people and supporter for positive change being made in marginalized communities.</p>
            </BoardMember>
          </div>
          <h2 className="text-center">Vacancies</h2>
          <div className="row">

            <VacantBoardMember id="9" title="Secretary of the Board" />
            <VacantBoardMember id="10" title="Director of Sponsorships" />
            <VacantBoardMember id="11" title="Director of Events" />
            <VacantBoardMember id="12" title="Director of Volunteers" />
            <VacantBoardMember id="13" title="Director of Advertising" />
            <VacantBoardMember id="14" title="Director of Entertainment" />
            <VacantBoardMember id="15" title="Director At-Large" />
          </div>
        </div>
      </div>
    )
  }
}


export default Board;
