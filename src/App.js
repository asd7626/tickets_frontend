import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Context from './components/Context';


function App() {

  const [isOpenCity, setIsOpenCity] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState([]);
  

  const addToCart = (eventToAdd) => {
         setCart([...cart, {... eventToAdd }]);
     };
 
  const removeFromCart = (eventToRemove) => {
         setCart(cart.filter((ev) => ev !== eventToRemove));
     };
     
  const clearOffCart = () => {
       setCart([]);
       setTotalValue(0);
     }

     //Все для контекста
     const value = {
        cart,
        addToCart,
        removeFromCart,
        clearOffCart,
        isOpenCity,
        setIsOpenCity,
        totalValue,
        setTotalValue
      }

   
 
     
  
  return (
    
      <Context.Provider value={value}>
        <Router>
          <BaseRouter/>
        </Router>
      </Context.Provider>
    
    
  );
}

export default App;
