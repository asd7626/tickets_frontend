import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import SecondHeader from './SecondHeader';


const EventsByCategory = (props) => {
    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState();
    
    const getEvents = async (props) => {
        const event_category = props.match.params.category;
        const response = await fetch(`http://127.0.0.1:8000/api/category/${event_category}`);
        const events = await response.json();
        setEvents(events);
        setCategory(event_category);
    }
    

    useEffect(() => {
        getEvents(props);
    }, [props]);

    return (
        <div className="events_by_category">
            <SecondHeader />
            <Cards event_list={events} header={`Events in category: ${category}`} />
        </div>
    )

}


export default EventsByCategory;