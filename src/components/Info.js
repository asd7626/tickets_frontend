import React, {useState, useEffect} from 'react';
import SecondHeader from './SecondHeader';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import { toOrganizatorsText, guarantees } from './InfoText';


function Info(props) {

    const [text, setText] = useState('');
    

    const howToBuyText = 'how to buy 1112gjfgjtjkgjrj';
    
    const returnTicketsText = 'return tickets jafjajajdjasjdas';
    const shippingText = 'shipping bla bla bla';
    

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
            setText(guarantees);
            
        }
    }

    useEffect(() => {
        getInfo(props);
    }, [props]);


    return (
        <div>
            <SecondHeader />
            <div className="event_description">
                {text}
            </div>
            <SubscribeForm />
            <Footer />
            
        </div>
    )
}


export default Info;