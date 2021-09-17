import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from './Context';
import {ShoppingCartOutlined } from '@ant-design/icons';


const Card = ({event_item}) => {
    
    const value = useContext(Context);
    
    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <div className="event_card" key={event_item.id}>
            <Link to={`/${event_item.id}`}>
            <div className="event_card_img_wrapper">
                <img src={event_item.poster} alt={event_item.headliner} />
            </div>
            <div className="event_card_items">
                <div className="event_card_singer">  {event_item.headliner} </div>
                                    
                <div className="event_card_city"> {capitalizeFirstLetter(`${event_item.city}`)} | {event_item.date} </div>
                <div className="event_card_price">  ${event_item.price} </div>
                <div className="buy_ticket_btn_on_card_block">
                    <Link>
                        <button className="buy_ticket_btn_on_card" onClick={() => value.addToCart(event_item)}> <ShoppingCartOutlined/> Add </button> 
                    </Link>
                </div>
            </div>
            
            
            </ Link >
                              
        </div>
    
    )

};

export default Card;

