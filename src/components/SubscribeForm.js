import React, {useState} from 'react';



const SubscribeForm = () => {

    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
        console.log(email);
    }

    return (
        <div className="subscribe_block">
            <div className="subscribe_header">
                SUBSCRIBE FOR FUTURE UPDATES
            </div>
            
                <div className="subscribe_input_btn">
                    <input onChange={(e) => handleOnChange(e)} className="subscribe_input" type="email" name="email" value={email} placeholder="Your Email ..." />
                    <button onClick={(e) => handleSubmit(e)} className="subscribe_btn" type="submit"> Send </button>
                    
                </div>
                
            
        </div>
    
    )

};

export default SubscribeForm;



