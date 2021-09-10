import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Context from './components/Context';




function App() {

  const [isOpenCity, setIsOpenCity] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [eventIds, setEventIds] = useState([]);
  

  

  const addToCart = (eventToAdd) => {
        if(!eventIds.includes(eventToAdd.id)) {
          setCart([...cart, {... eventToAdd }]);
          setEventIds([... eventIds, eventToAdd.id]);
          setTotalValue(prev => prev + eventToAdd.price);
        }
     };
 
  const removeFromCart = (eventToRemove) => {
         
         setCart(cart.filter((ev) => ev !== eventToRemove));
         setEventIds(eventIds.filter((ev) => ev !== eventToRemove.id));
        
     };
     
  const clearOffCart = () => {
       setCart([]);
       setEventIds([]);
       setTotalValue(0);
       
     }

  

     //Все для контекста
     const value = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearOffCart,
        isOpenCity,
        setIsOpenCity,
        totalValue,
        setTotalValue,
        eventIds,
        setEventIds,
        
      }

   
 
     
  
  return (
    
      <Context.Provider value={value}>
        <Router >
          <BaseRouter/>
        </Router>
      </Context.Provider>
    
    
  );
}

export default App;
