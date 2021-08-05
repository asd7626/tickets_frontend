import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from './Context';
import {UserOutlined, CalendarOutlined, EnvironmentOutlined, TagOutlined, FireFilled } from '@ant-design/icons';


const Cards = ({event_list, header, cart, addToCart}) => {
    const [visible, setVisible] = useState(2);
    
    const viewMoreEvents = () => {
        setVisible((prev) => prev + 2);
        
    }

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    const value = useContext(Context);

    return( 
        <div style={{paddingTop: 20+'px'}}>
            <p className="event_cards_header" > Events in {header} </p>
            {event_list.length === 0? <div className="no_events_div"> No Events Yet :) <Link to='/'><button className="back_btn"> Back To Index </button> </Link> </div> :
            <div className="event_cards">
                {event_list.slice(0, visible).map((event_item) => {
                    const {id, poster, headliner, city, date, price} = event_item;
                    return (
                        
                            <div className="event_card" key={id}>
                                <Link to={`/${id}`}>
                                <div className="event_card_img_wrapper">
                                    <img src={poster} alt={headliner} />
                                </div>
                                <div className="event_card_items">
                                    <div className="event_card_singer">  {headliner} </div>
                                    
                                    <div className="event_card_city">  {capitalizeFirstLetter(`${city}`)} | {date} </div>
                                    <div className="event_card_price">  ${price} </div>
                                </div>
                                </ Link >
                                <button className="buy_ticket_btn_on_card" onClick={() => value.addToCart(event_item)}> + To Cart </button>
                                
                                
                            </div>
                        
                        
                    )
                })}
            
            </div> }
            
            <div className="view_more_btn_block">
                {event_list.length > 0 && visible >= event_list.length?  
                <p style={{fontSize: 30+'px', fontWeight:700}}>That's all here :)</p> : 
                <button className={event_list.length < 5 ? 'disabled_btn' : 'view_more_btn'} onClick={viewMoreEvents}>More Events ({event_list.length - visible})</button>
                }
                
            </div>
        </div>
    )
}


export default Cards;