import React, { Component } from 'react'

export default class CountdownClock extends Component {

    constructor(props) {
    super(props)

        this.state = {
            remainingDays: 0,
            remainingHours: 0,
            remainingMinutes: 0,
            remainingSeconds: 0,
            showTime: false
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    tick() {
        let currentTimeInMilliseconds = new Date().getTime();
        let targetTimeInMilliseconds = new Date(this.props.eventTime).getTime();
        let timeRemaingInSeconds = (targetTimeInMilliseconds - currentTimeInMilliseconds)/1000;
        if(timeRemaingInSeconds <= 0){
            this.setState(prevState => ({
                showTime: false
            }));
            return;
        }
        let seconds = Math.floor(timeRemaingInSeconds % 60);
        timeRemaingInSeconds = timeRemaingInSeconds / 60;
        let minutes = Math.floor(timeRemaingInSeconds % 60);
        timeRemaingInSeconds = timeRemaingInSeconds / 60;
        let hours = Math.floor(timeRemaingInSeconds % 24);
        let days = Math.floor(timeRemaingInSeconds / 24);
        this.setState(prevState => ({
            remainingDays: days,
            remainingHours: hours,
            remainingMinutes: minutes,
            remainingSeconds: seconds,
            showTime: true
        }));
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }

  render() {
      if(!this.state.showTime){
          return (<div></div>)
      }
    return (

        <div>
            <ul className={"coming-date color-"+ this.props.color}>

                <li>{this.formatUnitOfTime(this.state.remainingDays)} <span>Days</span></li>
                <li className="colon">:</li>
                <li>{this.formatUnitOfTime(this.state.remainingHours)} <span>Hours</span></li>
                <li className="colon">:</li>
                <li>{this.formatUnitOfTime(this.state.remainingMinutes)} <span>Minutes</span></li>
                <li className="colon">:</li>
                <li>{this.formatUnitOfTime(this.state.remainingSeconds)} <span>Seconds</span></li>
            </ul>
        </div>
    )
  }
}
