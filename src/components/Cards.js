import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';

const Cards = ({event_list, header}) => {
    const [visible, setVisible] = useState(2);
    
    const viewMoreEvents = () => {
        setVisible((prev) => prev + 2);
    }

    return( 
        <div style={{paddingTop: 20+'px'}}>
            <p className="event_cards_header" > Events in {header} </p>
            {event_list.length === 0? <div className="no_events_div"> No Events Yet :) <Link to='/'><button className="back_btn"> Back To Index </button> </Link> </div> :
            <div className="event_cards">
                {event_list.slice(0, visible).map((event_item) => {  
                    return (
                            <Card event_item={event_item} quantity={1} /> 
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