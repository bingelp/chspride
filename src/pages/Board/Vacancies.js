import React, { Component } from "react";
import VacantBoardMember from "./VacantBoardMember";

class Vacancies extends Component {
  render() {
    return (
      <div className="row">
        <VacantBoardMember
          id="cfo"
          title="Chief Financial Officer"
          description="The Chief Financial Officer serves as a legal officer of the organization and is the legal custodian of the books. This position serves as the tertiary chair in the absence of the Chairman and Vice Chair. As the Chief Financial Officer you are ultimately responsible for all financial aspects of the organization, including, but not limited to, preparing financial reports, monitoring financial transactions at all events, and daily data entry."
          showApply={this.props.showApply}
        />
        <VacantBoardMember
          id="sponsorships"
          title="Director of Sponsorships"
          description="The Director of Sponsorship’s responsibilities include, but are not limited to, the procurement and cultivation of relationships with sponsors for the Charleston Pride Festival. Sponsors should ideally include corporate, national, and international businesses, as well as local enterprises."
          showApply={this.props.showApply}
        />
      </div>
    );
  }
}

export default Vacancies;
