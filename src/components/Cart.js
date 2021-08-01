import React, {useState, useContext} from 'react';
import Context from './Context';
import SecondHeader from './SecondHeader';

function Cart ()  {
    const value = useContext(Context);

    return (
        <div>
            <SecondHeader />
            <div className="Container">
            <h1> Your Order: </h1>
            <div className="order_cards">
                {value.cart.map((item) => {
                    const {id, headliner, city, address, date, price} = item;
                    return (
                        <div className="cardWrap">
                            <div className="card cardLeft">
                                <h1> TICKETS UA </h1>
                                <div className="title">
                                    <h2>{headliner}</h2>
                                    <span>headliner</span>
                                </div>
                                <div className="name">
                                    <h2>{city}, {address}</h2>
                                    <span>city, address</span>
                                </div>
                                <div className="seat_time">
                                    <div className="seat">
                                        <h2>{date}</h2>
                                        <span>date, time</span>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="card cardRight">
                                <div className="eye"></div>
                                <div className="number">
                                    <h3> ${price} </h3>
                                    <span>price</span>
                                </div>
                                <div className="barcode"></div>
                            </div>
                        </div>
                            
                    )
                } )}
            </div>
            </div>
            
        
        
            
            
        </div>
    )

}

export default Cart;