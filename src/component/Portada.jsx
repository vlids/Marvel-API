import React from 'react';
import MarvelFondo from './Images/MarvelFondo.jpg';


function Portada() {
  return (
    <div style={{
        height: '100vh',
        
        
        fontSize: '50px',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '1em',
        
    }} >
         <img src={MarvelFondo} style={{
            width: '100%',
            
        }} /> 

    </div>
  )
}

export default Portada