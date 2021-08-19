import React, {useState, useEffect, useContext} from 'react';
import SecondHeader from './SecondHeader';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import {UserOutlined, CalendarOutlined, EnvironmentOutlined, TagOutlined, FireFilled } from '@ant-design/icons';
import Context from './Context';
import LoaderComponent from './Loader';

const EventDetail =  (props) =>  {

    const [ev, setEv] = useState([]);

    const getEvent = async (props) => {
        const eventID = parseInt(props.match.params.eventID);

        const response = await fetch(`http://127.0.0.1:8000/api/${eventID}`);
        const ev = await response.json();
        setEv(ev);
}

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        
        getEvent(props)
         
        
    }, [props]);


    const value = useContext(Context);

    return (
        
        <div className="event_detail_page">
            <SecondHeader/>
            {ev.length === 0 ? <LoaderComponent /> :

            
            <div className="Container" onClick={() => value.setIsOpenCity(false)}>
                <div className="event_detail_page_top">
                    <div className="poster_detail">
                        <img src={ev.poster} className="poster_detail_img" alt={ev.headliner} />
                    </div>
                    <div className="event_detail_info">
                        <div className="event_info event_detail_date_time"> <UserOutlined className="detail_icon" /> {ev.headliner} </div>
                        <div className="event_info event_detail_date_time"> <CalendarOutlined className="detail_icon" /> {ev.date} </div>
                        <div className="event_info event_detail_address"> <EnvironmentOutlined className="detail_icon" /> {capitalizeFirstLetter(`${ev.city}`)}, {ev.address} </div>
                        <div className="event_info event_detail_price"> <TagOutlined className="detail_icon" /> ${ev.price} </div>
                        <div className="event_info event_detail_popular"> <FireFilled className="detail_icon detail_icon_red" /> Popular Event </div>
                        <div className="buy_ticket_btn_block">
                            <button className="buy_ticket_btn" onClick={() => value.addToCart(ev)} > + To Cart </button>
                        </div>
                    </div>  
                </div>
                <div className="event_description" style={{marginBottom: 50+'px'}}>
                        <div className="event_detail_header"> About This Event</div>
                        {ev.description}
                </div>
                 
                    
                
            </div>
            }
            <SubscribeForm />
            <Footer />
        </div>
        
    )
}


export default EventDetail;