import React, {useState} from 'react';
import {Transition} from 'react-transition-group';


const SubscribeForm = () => {

    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.includes('.') || !email.includes('@')) {
            setEmail('');
            setShowMessage(false);
            setErrorMessage(true);
            setTimeout(
                () => setErrorMessage(false), 
                3000
              );
            return;
        }

        const requestOptions = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
                email: email
            }),
        };
        fetch('http://127.0.0.1:8000/api/subscribeemail/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        setEmail('');
        setErrorMessage(false);
        setShowMessage(true);
        setTimeout(
            () => setShowMessage(false), 
            3000
          );
    }

    return (
        <div className="subscribe_block" style={{marginTop: 30+'px'}}>
            <div className="subscribe_header">
                SUBSCRIBE FOR FUTURE UPDATES
            </div>
            
            <div className="subscribe_input_btn">
                <input onChange={(e) => handleOnChange(e)} className="subscribe_input" type="email" name="email" value={email} placeholder="Enter Your Email" />
                <button onClick={(e) => handleSubmit(e)} className="subscribe_btn" type="submit"> Send </button>
                {showMessage &&
                <div className="successful_email_sent_message">
                    <strong>Your email has been saved</strong>
                </div>
                }

                {errorMessage &&
                    <div className="error_email_sent_message">
                        <strong>Wrong Email</strong>
                    </div>
                }
            </div> 

             
            
        </div>
    
    )

};

export default SubscribeForm;



