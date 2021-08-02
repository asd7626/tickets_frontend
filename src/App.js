import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Context from './components/Context';
import React, {useState} from 'react';

function App() {

     //Cart

     const [cart, setCart] = useState([]);
     const [totalValue, setTotalValue] = useState(0);

     const addToCart = (eventToAdd) => {
         let val = totalValue;
         setCart([...cart, {... eventToAdd }]);
         val += eventToAdd.price;
         setTotalValue(val);
         
     };
 
     const removeFromCart = (eventToRemove) => {
         let val = totalValue;
         setCart(cart.filter((ev) => ev !== eventToRemove));
         val -= eventToRemove.price;
         setTotalValue(val);
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
       totalValue
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
