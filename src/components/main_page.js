import React, {useState, useEffect, useContext} from 'react';
import '../App.css';

import Cards from './Cards';
import Slider from './Slider';
import Header from './Header';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import Context from './Context';
import LoaderComponent from './Loader';




function MainPage() {
  const [events, setEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);
  const [carouselEvents, setCarouselEvents] = useState([]);
  

    const fetchEvents = async () => {
      
        const response = await fetch('http://127.0.0.1:8000/api/');
        const second_response = await fetch('http://127.0.0.1:8000/api/popular');
        const third_response = await fetch('http://127.0.0.1:8000/api/latest/');
        const fourth_response = await fetch('http://127.0.0.1:8000/api/carousel/');

        const events = await response.json();
        const popular_events = await second_response.json();
        const latest_events = await third_response.json();
        const carousel_events = await fourth_response.json();

        
        setEvents(events);
        
        setPopularEvents(popular_events);
        setLatestEvents(latest_events);
        setCarouselEvents(carousel_events);
        

    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchEvents();
    }, []);

  return (
    <div className="App">
        {carouselEvents.length === 0? <LoaderComponent /> : <Header />}
        <Slider event_list={carouselEvents} />
        <div className="Container">
            <Cards event_list={events} header={'All Events'}   />
            <Cards event_list={popularEvents} header={'Most Popular Events'}  />
            {latestEvents.length > 0 && <Cards event_list={latestEvents} header={'New On The Site'}  />}
        </div>
        <SubscribeForm />
        
        <Footer />
    </div>
    
  );
}

export default MainPage;
