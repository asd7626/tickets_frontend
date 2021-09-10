import React, {useState, useEffect, useContext} from 'react';
import Context from './Context';
import SecondHeader from './SecondHeader';
import {Link} from 'react-router-dom';
import EventInCart from './EventInCart';
import OrderForm from './OrderForm';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';

function Cart ()  {
    
    const value = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
        
    });
    
    return (
        <div>
            <SecondHeader />
            <div className="cart_top_section">
                <h2 style={{color: '#fff'}}> Your Order: </h2>
                <h5 style={{color: '#fff'}}> Events: {value.cart.length} </h5>
                <h5 style={{color: '#fff'}}> Total: ${value.totalValue}  </h5>
                {value.cart.length === 0? <Link to='/'><button className="back_btn"> Back To Events </button> </Link> : <button className="clear_btn" onClick={value.clearOffCart}> Clear Cart </button>}
            </div>
            
            <div className="cart_events">
                {value.cart.map((item) => {
                    return (
                        <EventInCart item={item}  />
                    )
                } )}
            </div>
            <OrderForm />
            <SubscribeForm />
            <Footer />
        </div>
        
    )

}

export default Cart;




//<div className="cardWrap">
                                //<div className="card cardLeft">
                                    //<h1> TICKETS UA </h1>
                                    //<div className="title">
                                        //<h2>{headliner}</h2>
                                        //<span>headliner</span>
                                    //</div>
                                    //<div className="name">
                                        //<h2>{city}, {address}</h2>
                                        //<span>city, address</span>
                                    //</div>
                                    //<div className="seat_time">
                                        //<div className="seat">
                                            //<h2>{date}</h2>
                                            //<span>date, time</span>
                                        //</div>
                                        
                                    //</div>
                                //</div>

                                //<div className="card cardRight">
                                    //<CloseSquareFilled title="Remove Ticket" onClick={() => value.removeFromCart(item)} className="delete_ticket_icon" /> 
                                    //<div className="eye"></div>
                                    
                                    //<div className="number">
                                        //<h3> ${price} </h3>
                                        //<span>price</span>
                                    //</div>
                                    //<div className="barcode"></div>
                                //</div>
                            //</div>