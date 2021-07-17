import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import SecondHeader from './SecondHeader';


const EventsByCity = (props) => {
    const [events, setEvents] = useState([]);
    const [city, setCity] = useState();

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }
    
    const getEvents = async (props) => {
        const event_city = props.match.params.city;
        const response = await fetch(`http://127.0.0.1:8000/api/${event_city}`);
        const events = await response.json();
        console.log(event_city);
        setEvents(events);
        setCity(event_city);
    }
    
    useEffect(() => {
        getEvents(props);
    }, [props]);

    return (
        <div className="events_by_category">
            <SecondHeader />
            <Cards event_list={events} header={`Events in ${capitalizeFirstLetter(city)}`} />
        </div>
    )

}


export default EventsByCity;