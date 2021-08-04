import React, {useState} from 'react';

const SubscribeForm = () => {

    const [email, setEmail] = useState('');

    const handleOnChange = (e) => {
        setEmail(e.target.value);
        
    }

    const handleSubmit = () => {
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
    }

    return (
        <div className="subscribe_block">
            <div className="subscribe_header">
                SUBSCRIBE FOR FUTURE UPDATES
            </div>
            
                <div className="subscribe_input_btn">
                    <input onChange={handleOnChange} className="subscribe_input" type="email" name="" placeholder="Your Email ..." />
                    <button onClick={handleSubmit} className="subscribe_btn" type="submit"> Send </button>
                </div>
                
            
        </div>
    
    )

};

export default SubscribeForm;



