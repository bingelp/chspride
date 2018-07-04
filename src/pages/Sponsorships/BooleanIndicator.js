import React from "react";
class BooleanIndicator extends React.Component {
    render(props){
        if(this.props.value){
        return (<i className="fa fa-check"></i>) 
        }
        return(<i className="fa fa-minus"></i>)
    }
}

export default BooleanIndicator;