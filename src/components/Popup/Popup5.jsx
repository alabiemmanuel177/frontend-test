import React from 'react'
import "./Popup1.css"


function Popup5(props) {
  return (props.trigger) ? (
    <div className='popup5'>
        <div className='popup5-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup5;