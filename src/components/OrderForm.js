import React, {useState, useEffect, useContext, Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Context from './Context';
import { useHistory } from 'react-router';

function OrderForm  ()  {
    let history = useHistory();
    const value = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);    
    
    

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
                events: value.eventIds,
                name: name,
                email: email,
                phone: phone
            }),
        };
        console.log(requestOptions);
        fetch('http://127.0.0.1:8000/api/orderlist/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))

        
        setName('');
        setEmail('');
        setPhone('');
        value.clearOffCart();
        setSuccessMessage(true);
        setTimeout(
            () => setSuccessMessage(false), 
            5000
          );
        
        
    }

    return (
        <Fragment>
            {successMessage &&
                <div className="successful_order_message">
                        <strong> Order has been accepted! </strong>
                </div>
            }   

            <div className="order_form">
                <h5>Confirm Your Order Please: </h5>
                
                    <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                        <FormControl  value={name} onChange={(e) => handleOnChangeName(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="name" required={true} />
                    </InputGroup>

                    <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                        <FormControl value={email} onChange={(e) => handleOnChangeEmail(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="email" required={true} />
                    </InputGroup>
                    
                    <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">Phone</InputGroup.Text>
                        <FormControl value={phone} onChange={(e) => handleOnChangePhone(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="phone" required={true} />
                    </InputGroup>
                
                <div style={{textAlign:'end'}}>
                    <button onClick={(e) => handleSubmit(e)} className="confirm_order_btn" type="submit"> Create Order</button>
                </div>
                
            </div>
        </Fragment>
    )
}

export default OrderForm;