import React from 'react';
import {FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer_logo_icons">
                <div className="footer_logo"> TICKETS.UA </div>
                <div className="social_media">
                    <FacebookOutlined />
                    <TwitterOutlined />
                    <YoutubeOutlined />
                    <InstagramOutlined />
                </div>
            </div>

            <div className="footer_info_numbers">
                <div className="footer_info">
                    <Link to='/info/how-to-buy'> How To Buy </Link>
                    <Link to='/info/to-organizators'> To Organizators </Link>
                    <Link to='/info/return-tickets'> Return Tickets</Link>
                    <Link to='/info/shipping'> Shipping </Link>
                    <Link to='/info/guarantees'> Guarantees </Link>
                </div>
                
                <div className="footer_phone_numbers">
                    <div> +38(097) 123-45-67 </div>
                    <div> +38(095) 987-65-43 </div>
                    <div> +38(060) 456-78-90 </div>
                    <div> +38(098) 654-32-10 </div>
                </div>
            </div>
            
        </footer>
    )
}


export default Footer;