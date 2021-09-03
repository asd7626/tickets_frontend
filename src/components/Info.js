import React, {useState, useEffect} from 'react';
import SecondHeader from './SecondHeader';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import { howToBuyText, toOrganizatorsText, returnTicketsText, shippingText, guaranteesText } from './InfoText';


function Info(props) {

    const [text, setText] = useState('');
    

    const getInfo = (props) => {
        let info;
        info = props.match.params.info;
        
        if (info==='how-to-buy') {
            setText(howToBuyText);
            
        } else if (info==='to-organizators') {
            setText(toOrganizatorsText);
            
        } else if (info === 'return-tickets') {
            setText(returnTicketsText);
            
        } else if (info === 'shipping') {
            setText(shippingText);
            
        } else if (info === 'guarantees') {
            setText(guaranteesText);
            
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getInfo(props);
    }, [props]);


    return (
        <div>
            <SecondHeader />
            <div className="event_description" style={{color: '#fff', paddingTop: 3+'rem', paddingBottom: 3+'rem', margin: 'auto', width: 80+'%' }}>
                {text}
            </div>
            <SubscribeForm />
            <Footer />
            
        </div>
    )
}


export default Info;