import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Context from './components/Context';
import React, {useState} from 'react';

function App() {

     //Cart

     const [cart, setCart] = useState([]);

     const addToCart = (eventToAdd) => {
         setCart([...cart, {... eventToAdd }]);
         console.log('cart list:', cart);
     };
 
     const removeFromCart = (eventToRemove) => {
         setCart(cart.filter((ev) => ev !== eventToRemove));
     };
 
 
     //Все для контекста
     const value = {
       cart,
       addToCart,
       removeFromCart
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
