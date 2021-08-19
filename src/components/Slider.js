import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import LoaderComponent from './Loader';


function Slider({event_list}) {
    
    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    
    return (
        
        <Carousel pause={false} prevLabel={''} nextLabel={''}>
            
            {event_list.map((item, index) => {
                const {id, poster, headliner, date, city} = item;
                return (
                    
                        <Carousel.Item interval={5000} >
                            <Link to={`/${id}`}>
                                <img
                            className=""
                            src={poster}
                            alt={headliner}
                            />
                                <Carousel.Caption>
                                    <div className="slider_headliner">{headliner}</div>
                                    <div className="slider_city">{capitalizeFirstLetter(`${city}`)}</div>
                                    <div className="slider_date">{date}</div>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                
                    
                            
                        
                    
                    
                )
                })}
         </Carousel> 
            
          
        
    )
            
}

export default Slider;
