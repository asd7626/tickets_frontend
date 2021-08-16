import React, {useState, useContext, Fragment} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Context from './Context';

function OrderForm  ()  {

    const value = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [events, setEvents] = useState([]);

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleOnChangePhone = (e) => {
        setPhone(e.target.value);
        console.log(phone);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const requestOptions = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
                events: [3,7],
                name: name,
                email: email,
                phone: phone
            }),
        };
        console.log(requestOptions);
        fetch('http://127.0.0.1:8000/api/orderlist/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return (
        <div className="order_form">
            <h5>Confirm Your Order Please: </h5>
            
            <input onChange={(e) => handleOnChangeName(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="name" required="true" />
            <input onChange={(e) => handleOnChangeEmail(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="email" required="true" />
            <input onChange={(e) => handleOnChangePhone(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="phone" required="true" />
                
            <div style={{textAlign:'end'}}>
                <button onClick={(e) => handleSubmit(e)} className="confirm_order_btn" type="submit"> Create Order</button>
            </div>
                
        </div>
    )
}

export default OrderForm;