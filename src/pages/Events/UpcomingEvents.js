import React from 'react';
import Event from './UpcomingEvent';
import firebase from "../../firebase";


class UpcomingEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('events').orderByKey();
        itemsRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapShot => {
                var eventDate = new Date(childSnapShot.val().date);
                eventDate.setHours(23);
                if(eventDate < new Date()){
                    return;
                }
                let event = {id: childSnapShot.key, meta: childSnapShot.val()};
                let storageRef = firebase.storage().ref();
                let graphicRef = storageRef.child('events/' + event.meta.graphic);
                graphicRef.getDownloadURL().then(url => {
                        event.meta.graphicPath = url;
                        this.state.events.push(event);
                        this.setState({
                            events: this.state.events
                        })
                    }
                ).catch(error => {
                    this.setState(
                        {
                            error: "Error: " + error.code
                        }
                    )
                })

            })
        });
    }

    render() {
        let events = this.state.events;
        //events.sort((s1,s2) => new Date(s1.meta.date) - new Date(s2.meta.date));
        events.sort(function(a, b){
            var dateA = new Date(a.meta.date);
            var dateB = new Date(b.meta.date);
            var compare = dateA-dateB;
            if(compare === 0){
                if( a.meta.order <= b.meta.order){
                    return -1;
                }
                return 1;
            }
            return compare;
        })
        return (
            <div className="wrap bg-primary color-dark">
                <div className="container text-center">
                    <h2>Upcoming Events</h2>
                    <div className="row">
                        {events.map(s => <Event key={s.id} meta={s.meta}/>)}
                    </div>
                </div>
            </div>)
    }
}

export default UpcomingEvents;