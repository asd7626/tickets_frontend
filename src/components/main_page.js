import '../App.css';
import Cards from './Cards';
import Slider from './Slider';
import Header from './Header';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import {useState, useEffect} from 'react';


function MainPage() {
  const [events, setEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/');
        const second_response = await fetch('http://127.0.0.1:8000/api/popular');
        const third_response = await fetch('http://127.0.0.1:8000/api/latest/');

        const events = await response.json();
        const popular_events = await second_response.json();
        const latest_events = await third_response.json();

        setEvents(events);
        setPopularEvents(popular_events);
        setLatestEvents(latest_events);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

 


  return (
    
    <div className="App">
        <Header />
        
        <Slider event_list={events} />
        <div className="Container">
          
            <Cards event_list={events} header={'Upcoming events'}  />
            <Cards event_list={popularEvents} header={'The most popular events'}  />
            <Cards event_list={latestEvents} header={'New on the site'}  />
          

        </div>
        <SubscribeForm />
        <Footer />
    </div>
    
  );
}

export default MainPage;
