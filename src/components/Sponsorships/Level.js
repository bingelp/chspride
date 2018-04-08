import React from "react";
import BooleanIndicator from "./BooleanIndicator"
import AdSpaceIndicator from "./AdSpaceIndicator"
import NumberIndicator from "./NumberIndicator"
class Level extends React.Component {
    constructor(props){
        super(props);

        let headerClass ="pricing-table-head-"
        switch (props.level.id) {
            case 1:
                headerClass += "danger";
                break;
            case 2:
                headerClass += "warning";
                break;
            case 3:
                headerClass += "caution";
                break;
            case 4:
                headerClass += "info";
                break;
            case 5:
                headerClass += "success";
                break;
        
            default:
                headerClass += "royal";
                break;
        } 
        this.state = {"headerClass": headerClass, "headerWidth": "col-md-6 pricing-col col-lg-" + props.level.columns};
    }
    render(props){
        return(
                <div className={this.state.headerWidth}>
                    <div className="pricing-table">
                    <div className={this.state.headerClass}>
                        <h2>{this.props.level.name}
                        </h2>
                        <h3 className="price">$<NumberIndicator value={this.props.level.price}/></h3>
                    </div>
                    <ul className="pricing-table-content">
                        <li> <NumberIndicator value={this.props.level.namingRights}/>
                        <span className="d-block d-lg-none">Naming Rights to Pride Event</span>
                        </li>
                        <li> <NumberIndicator value={this.props.level.mediaPosts}/>
                        <span className="d-block d-lg-none"> Custom Media Post </span>
                        </li>
                        <li><BooleanIndicator value={this.props.level.tShirt}/>
                        <span className="d-block d-lg-none">Recognition on Pride T-shirt</span>
                        </li>
                        <li><NumberIndicator value={this.props.level.prismParty}/>
                        <span className="d-block d-lg-none">Tickets to the Prism Party</span>
                        </li>
                        <li> <BooleanIndicator value={this.props.level.boothDiscount}/>
                        <span className="d-block d-lg-none"> Discount on Booth at Festival</span>
                        </li>
                        <li> <AdSpaceIndicator value={this.props.level.adSpace}/>
                        <span className="d-block d-lg-none">Ad Space in Pride Guide</span>
                        </li>
                        <li>
                        <BooleanIndicator value={this.props.level.festivalRecognition}/>
                        <span className="d-block d-lg-none">Sponsor Recognition at Pride Festival</span>
                        </li>
                        <li>
                        <BooleanIndicator value={this.props.level.website}/>
                        <span className="d-block d-lg-none">Logo Attribution on Website</span>
                        </li>
                        <li>
                        <BooleanIndicator value={this.props.level.prideGuide}/>
                        <span className="d-block d-lg-none">Logo Attribution in Pride Guide</span>
                        </li>
                        <li>
                        <BooleanIndicator value={this.props.level.marketing}/>
                        <span className="d-block d-lg-none">Use of “Official Charleston Pride Sponsor *”</span>
                        </li>
                        <li>
                        <BooleanIndicator value={this.props.level.paradeEntryFeeWaived}/>
                        <span className="d-block d-lg-none">Parde Entry Fee Waived</span>
                        </li>
                    </ul>
                    </div>
                </div>
        )}}

export default Level;