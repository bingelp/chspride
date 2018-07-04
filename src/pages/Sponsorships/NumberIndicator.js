import React from "react";
class NumberIndicator extends React.Component {

    render(props){
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        if(this.props.value === 0){
           return(<i className="fa fa-minus"></i>)
        }
        return(<span>{numberWithCommas(this.props.value)}</span>)
    }
}

export default NumberIndicator;