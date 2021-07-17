import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';


const SecondHeader = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCity, setIsOpenCity] = useState(false);
    

    return (
        <div className="second_header">
            <div className="nav">
                <Link className="logo" to="/"> <span className="logo_tickets"> Tickets</span> <span className="logo_ua">UA</span> </Link>
                <div className="city_menu">
                    <Link className="choose_city_link"  onClick={() => setIsOpenCity(!isOpenCity)}> City<DownOutlined /> </Link>
                    <div className="city_list" isOpenCity={isOpenCity} style={{display: isOpenCity ? 'flex' : 'none'}} >
                        <Link to='/kyiv'> Kyiv </Link>
                        <Link to='/dnipro'> Dnipro </Link>
                        <Link to='/kharkiv'> Kharkiv </Link>
                    </div>
                </div>
                
                <div className="hamburger_menu" onClick={() => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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