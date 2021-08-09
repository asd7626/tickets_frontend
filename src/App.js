import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Context from './components/Context';
import ContextQuantity from './components/Card';

function App() {

  const [isOpenCity, setIsOpenCity] = useState(false);
  const [cart, setCart] = useState([]);
  

  const addToCart = (eventToAdd) => {
         setCart([...cart, {... eventToAdd }]);
     };
 
  const removeFromCart = (eventToRemove) => {
         setCart(cart.filter((ev) => ev !== eventToRemove));
     };
     
  const clearOffCart = () => {
       setCart([]);
     }

  // const handlePlus = () => {
  //   setQuantity(prev => prev + 1);
  // }

  // const handleMinus = () => {
  //     setQuantity(prev => prev - 1);
  //     if(quantity === 1) {
  //         setQuantity(1);
  //     }
  // }
  
  

  

     //Все для контекста
     const value = {
        cart,
        addToCart,
        removeFromCart,
        clearOffCart,
        isOpenCity,
        setIsOpenCity,
        //handleMinus,
        //handlePlus
        
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
