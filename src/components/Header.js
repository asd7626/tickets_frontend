import React, {useState, useEffect, useContext} from 'react';
import Context from './Context';
import {Link} from 'react-router-dom';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCity, setIsOpenCity] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const value = useContext(Context);

    useEffect(() => {
        function onScroll() {
          setIsOpen(false);
          setIsOpenCity(false);
          let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
          setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (
        <header style={{background: scrollTop > 0 ? '#000' : 'transparent', backgroundColor: isOpen && scrollTop === 0 ? 'black' : 'transparent'}}>
            <div className="navigation">
                <Link className="logo" to="/"> <span className="logo_tickets"> Tickets</span> <span className="logo_ua">UA</span> </Link>
                <div className="city_menu">
                   City<DownOutlined />
                    <div className="city_list">
                        <Link to='/kyiv'> Kyiv </Link>
                        <Link to='/dnipro'> Dnipro </Link>
                        <Link to='/kharkiv'> Kharkiv </Link>
                    </div>
                </div>
                <div style={{display: value.cart.length === 0? 'none' : 'block'}} className="cart_link"><Link  to='/cart'> <ShoppingCartOutlined className="cart_icon" /> <span className="cart_number"> ({value.cart.length}) </span>  </Link>  </div>
                <div className="hamburger_menu" onClick={() => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className="menu" isOpen={isOpen} style={{maxHeight: isOpen ? 300+'px' : 0}}>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/concerts"> Concerts </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/humor"> Humor </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/kids"> Kids </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/theater"> Theater </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className="menu_link" to="/category/festivals"> Festivals </Link>
                </div>
            </div>
        </header>
        
    )
}



export default Header;