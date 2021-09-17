import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Context from './Context';




const SecondHeader = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    
    const value = useContext(Context);

    const closeMenu = () => {
        if (value.isOpenCity) {
            value.setIsOpenCity(false);
        }
    }

    return (
        <div className="second_header" onClick={closeMenu}>
            <div className="navigation" >
                <Link className="logo_second_header" to="/"> <span className="logo_tickets_second"> Tickets</span> <span className="logo_ua_second">UA</span> </Link>
                <div className="city_menu">
                   City<DownOutlined />
                    <div className="city_list">
                        <Link to='/kyiv'> Kyiv </Link>
                        <Link to='/dnipro'> Dnipro </Link>
                        <Link to='/kharkiv'> Kharkiv </Link>
                    </div>
                </div>
                
                <div className="hamburger_menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <Link classname="cart_link" to='/cart'> <ShoppingCartOutlined className="cart_icon" /> <span className="cart_number"> ({value.cart.length}) </span> </Link>
                <div className="menu" isOpen={isOpen} style={{maxHeight: isOpen ? 300+'px' : 0}}>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/concerts"> Concerts </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/humor"> Humor </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/kids"> Kids </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/theater"> Theater </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/festivals"> Festivals </Link>
                </div>
            </div>
        </div>
        
    )
}


export default SecondHeader;
