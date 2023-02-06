import React from 'react'

const Konyvajanlo = ({nev, ar, akcio=false}) => {
    
    let actionClass = "";
    let actionText = "nem akciós";
    
    if(akcio){
        actionClass = "akcio";
        actionText = "akciós";
    }
    
    return (
    <div>
        <h3>{nev}</h3>
        <p>{ar}</p>
        <p className={actionClass}>{actionText}</p>
    </div>
  )
}

export default Konyvajanlo