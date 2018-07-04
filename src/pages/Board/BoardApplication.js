import React, { Component } from 'react'
import 'react-select/dist/react-select.css';

export default class BoardApplication extends Component {

  SimpleField(props){
    return (
      <div className="form-group label-floating">
        <div className="input-group">
          <span className="input-group-addon">
            <i className={"zmdi zmdi-"+props.icon}></i>
          </span>
          <label className="control-label" for={"ms-form"+props.id}>{props.label}</label>
          <input type={props.type} id={"ms-form"+props.id} className="form-control" />
        </div>
      </div>
    )
  }

  TextArea(props){
    return (
    <div className="form-group label-floating">
      <div className="input-group">
        <label className="control-label" for={"ms-form" + props.id}>{props.label}</label>
        <textarea rows="3" id={"ms-form" + props.id} className="form-control" />
          <span className="help-block">{props.desc}</span>
      </div>
    </div>
    )
  }

  MultiSelect(props){
    return (
      <div className="form-group label-floating">
        <div className="input-group">
          <label className="control-label" for={"ms-form" + props.id}>{props.label}</label>
          <select id={"ms-form" + props.id} className="selectpicker form-control" data-dropup-auto="false">
            {props.children}
          </select>
          <span className="help-block">{props.desc}</span>
        </div>
      </div>
    )
  }

  FileBrowser(props){
    return (
      <div className="form-group label-floating">
        <div className="input-group">
          <label className="control-label" for={"ms-form" + props.id}>{props.label}</label>
          <input type="text" readonly="" className="form-control" placeholder="Browse..."/>
          <input type="file" id={"ms-form" + props.id} multiple=""/>
          <span>{props.desc}</span>
        </div>
      </div>
    )
  }

  Checkbox(props){
    return (
      <div className="form-group">
        <div className="input-group">
          <label for={"ms-form" + props.id}><input type="checkbox" id={"ms-form" + props.id} /> {props.label}</label>     
        </div>
      </div>
    )
  }


  
  render() {
    return (
      <form className="form-horizontal">
        <fieldset>
          <legend>Contact Information</legend>
          <this.SimpleField id="first-name" icon="account" label="First Name" type="text"/>
          <this.SimpleField id="last-name" icon="account-o" label="Last Name" type="text"/>
          <this.SimpleField id="address" icon="home" label="Address (Street, City, State, and Zip)" type="text"/>
          <this.SimpleField id="phone" icon="phone" label="Phone Number" type="tel"/>
          <this.SimpleField id="email" icon="email" label="Email Address" type="email"/>
          <legend>Employment</legend>
          <this.SimpleField id="employer" icon="case" label="Business/Organization Name" type="text"/>
          <this.SimpleField id="employer-title" icon="star" label="Title" type="text"/>
          <this.SimpleField id="employer-address" icon="store" label="Business Address" type="text" />
          <this.SimpleField id="employer-phone" icon="phone" label="Business Phone" type="tel" />
          <legend>Experience</legend>
          <this.TextArea id="volunteer" label="Board/Committee/Volunteer Experience" desc="Please list boards and committees that you serve on, or have served on (business, civic, community, fraternal, political, professional, recreational, religious, social). List the organization, role/title, and dates of service."/>
          <this.TextArea id="benefit" label="How do you feel Charleston Pride would benefit from your involvement on the Board?"/>
          {/* Add MultiSelect */} 
          <this.TextArea id="skills" label="Other applicable skills/experience/interests not listed above"/>
          <this.TextArea id="reference" label="Please list any groups, organizations or businesses that you could serve as a liaison to on behalf of Charleston Pride Festival"/>
          <this.FileBrowser id="resume" label="Upload Resume" desc="Your resume is not required to complete your application, but we encourage you to include it if it shows your experience and qualifications"/>
          <this.Checkbox id="bylaws" label="I have read the CPF Bylaws" />
          <this.Checkbox id="rules" label="I have read the CPF Roles and Responsibilities Document"/>
          <button className="btn btn-raised btn-block btn-primary">Apply Now</button>
            </fieldset>
          </form>
    )
  }
}
