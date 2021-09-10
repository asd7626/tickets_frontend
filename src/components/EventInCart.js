import React, {useState, useContext, useEffect} from 'react';
import Context from './Context';
import { CloseSquareFilled } from '@ant-design/icons';


const EventInCart = ({item}) => {

    const value = useContext(Context);
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    

    useEffect(() => {
        setTotal(amount * item.price);    
    }, [item.price, amount, total])

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    const handlePlus = () => {
        setAmount(prev => prev + 1);
        value.setTotalValue(prev => prev + item.price);
    }

    const handleMinus = () => {
        setAmount(prev => prev - 1);
        if(amount === 1) {
            setAmount(1);
        }
        if(amount > 1) {
            value.setTotalValue(prev => prev - item.price);
        }
        

}

    return (
            <div className="Event_In_Cart">
               
                <div className="Event_In_Cart_Left">
                    <div className="Event_In_Cart_Left_Top">
                        <span className="Event_In_Cart_HeadLiner">{item.headliner} </span> | <span className="Event_In_Cart_City"> {capitalizeFirstLetter(`${item.city}`)} </span>
                    </div>
                    <div className="Event_In_Cart_Left_Top2">
                        <span className="Event_In_Cart_Date">{item.date}</span>
                    </div>
                    <div className="Event_In_Cart_Left_Middle">
                        <span className="Event_In_Cart_Address">{item.address}</span> 
                    </div>
                    <div className="Event_In_Cart_Left_Bottom">
                        <span className="Event_In_Cart_Price"> ${item.price}</span> 
                    </div>
                    <CloseSquareFilled title="Remove Ticket" onClick={() => value.removeFromCart(item)} className="delete_ticket_icon" />
                    
                </div>
                
                <div className="Event_In_Cart_Right">
                    <button className="plus_minus_btn" onClick={handlePlus}> + </button>
                    <div className="quantity_number"> {amount} </div>
                    <button className="plus_minus_btn" onClick={handleMinus}> - </button>
                    <div className="total_number"> x{amount}: ${total}  </div>
                </div>
                
            </div>
    
    )
}


export default EventInCart;