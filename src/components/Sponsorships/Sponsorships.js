import React from "react";
import './sponsors.scss';
import LevelTable from "./LevelTable";

const levels = [
  {
      "id": 1,
      "name": "Red",
      "price": 10000,
      "namingRights": 1,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 6,
      "boothDiscount": true,
      "adSpace": 2,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 2,
      "name": "Orange",
      "price": 7500,
      "namingRights": 0,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 6,
      "boothDiscount": true,
      "adSpace": 2,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 3,
      "name": "Yellow",
      "price": 5000,
      "namingRights": 0,
      "mediaPosts": 2,
      "tShirt": true,
      "prismParty": 4,
      "boothDiscount": true,
      "adSpace": 1,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 4,
      "name": "Green",
      "price": 2500,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": true,
      "prismParty": 2,
      "boothDiscount": true,
      "adSpace": 0.5,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },
  {
      "id": 5,
      "name": "Blue",
      "price": 1000,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": false,
      "prismParty": 0,
      "boothDiscount": false,
      "adSpace": 0.25,
      "festivalRecognition": true,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  },        
  {
      "id": 6,
      "name": "Purple",
      "price": 500,
      "namingRights": 0,
      "mediaPosts": 0,
      "tShirt": false,
      "prismParty": 0,
      "boothDiscount": false,
      "adSpace": 0,
      "festivalRecognition": false,
      "website": true,
      "prideGuide": true,
      "marketing": true,
      "paradeEntryFeeWaived": true,
      "columns": 1
  }
];

class Sponsorships extends React.Component {
  render(){
      return(
    <div className="container">
      <LevelTable levels={levels}/>
    </div>)
  }
}

export default Sponsorships;