import React, {useState, useContext} from 'react';
import Context from './Context';
import { CloseSquareFilled } from '@ant-design/icons';


const EventInCart = ({item}) => {

    const value = useContext(Context);
    const [amount, setAmount] = useState(1);
    
    
    const handlePlus = () => {
        setAmount(prev => prev + 1);
    }

    const handleMinus = () => {
        setAmount(prev => prev - 1);
        if(amount === 1) {
            setAmount(1);
    }
}

    return (
        <div className="cart_item_whole">
            <div className="cart_item">
                <CloseSquareFilled title="Remove Ticket" onClick={() => value.removeFromCart(item)} className="delete_ticket_icon" />
                    <div className="cart_item_items">
                        <div className="cart_item_event"> <span>Event: </span>{item.headliner} in {item.city} </div>
                        <div className="cart_item_place"> <span>Place: </span>{item.address} </div>
                        <div className="cart_item_date"> <span>Date: </span> {item.date} </div>
                        <div className="cart_item_price"> <span>Price: </span>${item.price} </div>
                    </div>
            </div>
            <div className="cart_item_right">
                <button className="plus_minus_btn" onClick={handlePlus}> + </button>
                <div className="quantity_number"> {amount} </div>
                <button className="plus_minus_btn" onClick={handleMinus}> - </button>
                <div className="total_number"> x{amount}: ${amount * item.price}  </div>
            </div>
        </div>
    )
}


export default EventInCart;