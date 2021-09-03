import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const LoaderComponent = () => {
    return (
        <div style={{ height:100+'vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Loader
            type="Oval"
            color="aqua"
            height={100}
            width={100}
             //3 secs
        />
        </div>
        
    )
        
    
}


export default LoaderComponent;