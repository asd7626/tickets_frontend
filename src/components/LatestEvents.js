import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import SecondHeader from './SecondHeader';
import Cards from './Cards';


function LatestEvents () {

    const [latestEvents, setLatestEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/latest');
        const latest_events = await response.json();
        setLatestEvents(latest_events);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return(
        <div className="latest_events_page">
            <SecondHeader />
            <Cards event_list={latestEvents} header={'New on the site'} />
        </div>
        
    )

}


export default LatestEvents;