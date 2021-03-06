import React, {useState, useEffect, useContext, Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Context from './Context';
import { useHistory } from 'react-router';

function OrderForm  ()  {
    
    const value = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);    
    const [nameErrorMessage, setNameErrorMessage] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState(false);
    

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        
    }

    const handleOnChangePhone = (e) => {
        setPhone(e.target.value);
        
    }

    const handleOnChangeComment = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || name.length < 4) {
            setName('');
            setEmailErrorMessage(false);
            setPhoneErrorMessage(false);
            setNameErrorMessage(true);
            setTimeout(
                () => setNameErrorMessage(false), 
                5000
              );
            return;
        }

        if(!email.includes('.') || !email.includes('@') || email === '@.' || email === '.@') {
            setEmail('');
            setNameErrorMessage(false);
            setPhoneErrorMessage(false);
            setEmailErrorMessage(true);
            setTimeout(
                () => setEmailErrorMessage(false), 
                5000
              );
            return;
        }

        if(!phone.startsWith(380) || phone.length !== 12) {
            setPhone('');
            setNameErrorMessage(false);
            setEmailErrorMessage(false);
            setPhoneErrorMessage(true);
            setTimeout(
                () => setPhoneErrorMessage(false), 
                5000
              );
            return;
        }

        setNameErrorMessage(false);
        setEmailErrorMessage(false);
        setPhoneErrorMessage(false);

        const requestOptions = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
                events: value.eventIds,
                name: name,
                email: email,
                phone: phone,
                total: value.totalValue,
                comment: comment
                
            }),
        };
        console.log(requestOptions);
        console.log(value.totalValue);
        fetch('http://127.0.0.1:8000/api/orderlist/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))

        
        setName('');
        setEmail('');
        setPhone('');
        setComment('');
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
                <h5 style={{color: '#fff'}}>Confirm Your Order Please: </h5>
                
                    <InputGroup size="lg" style={{marginBottom:15+'px'}}>
                        <InputGroup.Text style={{width:115+'px'}} id="inputGroup-sizing-lg">Name</InputGroup.Text>
                        <FormControl placeholder="Example: Ivan Ivanov" disabled={value.cart.length===0}  value={name} onChange={(e) => handleOnChangeName(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="name" required />
                    </InputGroup>

                    <InputGroup size="lg" style={{marginBottom:15+'px'}}>
                        <InputGroup.Text style={{width:115+'px'}} id="inputGroup-sizing-lg">Email</InputGroup.Text>
                        <FormControl placeholder="Example: Ivanov@gmail.com" disabled={value.cart.length===0} value={email} onChange={(e) => handleOnChangeEmail(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="email" required />
                    </InputGroup>
                    
                    <InputGroup  size="lg" style={{marginBottom:15+'px'}}>
                        <InputGroup.Text style={{width:115+'px'}} id="inputGroup-sizing-lg">Phone</InputGroup.Text>
                        <FormControl placeholder="Format: 380XXXXXXXXX" disabled={value.cart.length===0} value={phone} onChange={(e) => handleOnChangePhone(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="number" name="phone" required />
                    </InputGroup>

                    <InputGroup size="lg" >
                        <InputGroup.Text style={{width:115+'px'}} id="inputGroup-sizing-lg">Comment</InputGroup.Text>
                        <FormControl style={{}} placeholder="Enter Your Comment Here (not necessary)" disabled={value.cart.length===0}  value={comment} onChange={(e) => handleOnChangeComment(e)} className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm"  name="comment" />
                    </InputGroup>
                
                <div style={{position:'relative'}}>
                    {nameErrorMessage &&
                        <div style={{position:'absolute', left:0, fontSize:25+'px', color: 'red', fontWeight: 700}}>
                            <strong> Empty Name </strong>
                        </div>
                    }

                    {emailErrorMessage &&
                        <div style={{position:'absolute', left:0, fontSize:25+'px', color: 'red', fontWeight: 700}}>
                            <strong> Wrong Email </strong>
                        </div>
                    }

                    {phoneErrorMessage &&
                        <div style={{position:'absolute', left:0, fontSize:25+'px', color: 'red', fontWeight: 700}}>
                            <strong> Wrong Phone </strong>
                        </div>
                    }

                    <div style={{textAlign:'end', marginBottom:30+'px'}}>
                        <button disabled={value.cart.length === 0}  onClick={(e) => handleSubmit(e)} className="confirm_order_btn" type="submit"> Create Order</button>
                    </div>

                </div>
                
            </div>
        </Fragment>
    )
}

export default OrderForm;