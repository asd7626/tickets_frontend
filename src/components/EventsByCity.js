import React from 'react';
import { useState, useEffect, useContext, Fragment } from 'react';
import Cards from './Cards';
import SecondHeader from './SecondHeader';
import Context from './Context';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import LoaderComponent from './Loader';

const EventsByCity = (props) => {
    const [allEvents, setAllEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [city, setCity] = useState();

    const value = useContext(Context);

    const getEvents = async (props) => {
        const event_city = props.match.params.city;
        const response = await fetch(`http://127.0.0.1:8000/api/${event_city}`);
        const events = await response.json();
        console.log(event_city);
        setAllEvents(events);
        setEvents(events);
        setCity(event_city);
    }

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        getEvents(props);
    }, [props]);

    const filterItems = (category) => {
        if(category === 'all') {
            setEvents(allEvents);
            return;
        }
        const eventsByCategory = allEvents.filter((ev) => ev.category === category);
        setEvents(eventsByCategory);
    }

    return (
        <Fragment>
            <SecondHeader />
            <div style={{marginTop:25+'px', display:'flex', flexDirection:'column', rowGap:10+'px', justifyContent:'center', alignItems:'center'}}>
                <div style={{display:'flex', columnGap:15+'px'}}>
                    <button className="filter_btn" onClick={() => filterItems('all')}> All Events </button>
                    <button className="filter_btn" onClick={() => filterItems('concerts')}>Concert</button>
                    <button className="filter_btn" onClick={() => filterItems('humor')}>Humor</button>
                </div>
                <div style={{display:'flex', columnGap:15+'px'}}>
                    <button className="filter_btn" onClick={() => filterItems('kids')}>For Kids</button>
                    <button className="filter_btn" onClick={() => filterItems('theater')}>Theater</button>
                    <button className="filter_btn" onClick={() => filterItems('festivals')}>Festivals</button>
                </div>
            </div>
            
            {events.length === 0?  <LoaderComponent /> :
                
                    <div onClick={() => value.setIsOpenCity(false)}>
                        <Cards event_list={events} header={capitalizeFirstLetter(`${city}`)}  />
                    </div>
                    
                
            }
            <SubscribeForm />
            <Footer />
        </Fragment>
        
        
    )

}


export default EventsByCity;