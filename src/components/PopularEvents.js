import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import SecondHeader from './SecondHeader';
import Cards from './Cards';


function PopularEvents () {

    const [popularEvents, setPopularEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/popular');
        const popular_events = await response.json();
        setPopularEvents(popular_events);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return(
        <div className="popular_events_page">
            <SecondHeader />
            <Cards event_list={popularEvents} header={'The most popular events'} />
        </div>
        
    )

}


export default PopularEvents;