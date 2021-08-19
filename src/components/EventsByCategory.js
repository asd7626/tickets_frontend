import React from 'react';
import {Fragment, useState, useEffect, useContext } from 'react';
import Cards from './Cards';
import SecondHeader from './SecondHeader';
import Context from './Context';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import LoaderComponent from './Loader';

const EventsByCategory = (props) => {
    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState();
    
    const value = useContext(Context);

    const getEvents = async (props) => {
        const event_category = props.match.params.category;
        const response = await fetch(`http://127.0.0.1:8000/api/category/${event_category}`);
        const events = await response.json();
        setEvents(events);
        setCategory(event_category);
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
        getEvents(props);
    }, [props]);

    return (
        <Fragment>
            <SecondHeader />
            {events.length === 0? <LoaderComponent /> :
                <div onClick={() => value.setIsOpenCity(false)}>
                    <Cards event_list={events} header={` category: ${category}`} />
                </div>
            }
            <SubscribeForm />
            <Footer />
        </Fragment>
    )

}


export default EventsByCategory;