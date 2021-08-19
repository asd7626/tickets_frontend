import React from 'react';
import { useState, useEffect, useContext, Fragment } from 'react';
import Cards from './Cards';
import SecondHeader from './SecondHeader';
import Context from './Context';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import LoaderComponent from './Loader';

const EventsByCity = (props) => {
    const [events, setEvents] = useState([]);
    const [city, setCity] = useState();

    const value = useContext(Context);

    const getEvents = async (props) => {
        const event_city = props.match.params.city;
        const response = await fetch(`http://127.0.0.1:8000/api/${event_city}`);
        const events = await response.json();
        console.log(event_city);
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

    

    return (
        <Fragment>
            <SecondHeader />
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