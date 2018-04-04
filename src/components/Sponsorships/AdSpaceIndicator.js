import React from "react";
class AdSpace extends React.Component {
    render(props){
        if(this.props.value === 1){
            return (<span>{this.props.value} Page</span>) 
        }
        if(this.props.value === .75){
            return (<span>¾ Page</span>) 
        }
        if(this.props.value === .5){
            return (<span>½ Page</span>)   
        }
        if(this.props.value === .25){
            return (<span>¼ Page</span>)   
        }
        if(this.props.value === 0){
           return( <i className="fa fa-minus"></i>)
        }
        return(<span>{this.props.value} Pages</span>)
    }
}

export default AdSpace;