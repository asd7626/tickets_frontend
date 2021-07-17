import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe_block">
            <div className="subscribe_header">
                SUBSCRIBE FOR FUTURE UPDATES
            </div>
            <form className="subscribe_form">
                <div className="subscribe_input_btn">
                    <input className="subscribe_input" name="email" type="email" placeholder="Your Email ..." />
                    <button className="subscribe_btn" type="submit"> Send </button>
                </div>
                
            </form>
        </div>
    
    )

};

export default SubscribeForm;