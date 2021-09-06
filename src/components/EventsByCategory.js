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
    const [allEvents, setAllEvents] = useState([]);
    const [category, setCategory] = useState();
    const [month, setMonth] = useState('all');
    
    const value = useContext(Context);

    const getEvents = async (props) => {
        const event_category = props.match.params.category;
        const response = await fetch(`http://127.0.0.1:8000/api/category/${event_category}`);
        const events = await response.json();
        setEvents(events);
        setAllEvents(events);
        setCategory(event_category);
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
        getEvents(props);
    }, [props]);

    const filterItemsByMonth = (month) => {
        if(month === 'all') {
            setMonth('all');
            setEvents(allEvents);
            return;
        }
        const eventsByMonth = allEvents.filter((ev) => ev.month === month);
        setEvents(eventsByMonth);
        
    }

    const handleChange = (e) => {
        setMonth(e.target.value);
        
    }

    return (
        <Fragment>
            <SecondHeader />
            <div className="select_field"> 
                        <span style={{fontFamily: 'Anton', color: '#fff',  fontSize:30+'px'}}>Month: </span>
                        <select onChange={handleChange}>
                            <option value="all"> All </option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                        <button className="submit_month_btn" onClick={() => filterItemsByMonth(month)} type="submit"> Submit </button>
            </div>


            {events.length === 0? <div style={{textAlign:'center', color:'white', fontSize:30+'px'}}>No events in this month in this category</div> :
                <div onClick={() => value.setIsOpenCity(false)}>
                    <Cards event_list={events} header={`category: ${category}`} />
                </div>
            }
            <SubscribeForm />
            <Footer />
        </Fragment>
    )

}


export default EventsByCategory;