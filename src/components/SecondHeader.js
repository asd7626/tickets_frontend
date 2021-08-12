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
            <div className="nav" >
                <Link className="logo_second_header" to="/"> <span className="logo_tickets_second"> Tickets</span> <span className="logo_ua_second">UA</span> </Link>
                <div className="city_menu">
                    <Link className="choose_city_link"  onClick={() => value.setIsOpenCity(!value.isOpenCity)}> City<DownOutlined /> </Link>
                    <div className="city_list" isOpenCity={value.isOpenCity} style={{display: value.isOpenCity ? 'flex' : 'none'}} >
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
                    <Link className="menu_link" to="/category/concerts"> Concerts </Link>
                    <Link className="menu_link" to="/category/humor"> Humor </Link>
                    <Link className="menu_link" to="/category/kids"> Kids </Link>
                    <Link className="menu_link" to="/category/theater"> Theater </Link>
                    <Link className="menu_link" to="/category/festivals"> Festivals </Link>
                </div>
            </div>
        </div>
        
    )
}


export default SecondHeader;
