import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from './Context';

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
        <div>
            
            <div className="event_cards_header"> {header} </div>
            
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
                                    <div className="event_card_singer"> {headliner} </div>
                                    <div className="event_card_date"> {date} </div>
                                    <div className="event_card_city"> {capitalizeFirstLetter(`${city}`)} </div>
                                    <div className="event_card_price"> От {price} грн </div>
                                </div>
                                </ Link >
                                <button className="buy_ticket_btn_on_card" onClick={() => value.addToCart(event_item)}> + To Cart </button>
                                
                                
                            </div>
                        
                        
                    )
                })}
            
            </div>
            <div className="view_more_btn_block">
                <button className={event_list.length < 5 ? 'disabled_btn' : 'view_more_btn'} onClick={viewMoreEvents}>More Events</button>
            </div>
        </div>
    )
}


export default Cards;