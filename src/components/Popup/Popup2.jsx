import React from 'react'
import "./Popup1.css"

function Popup2(props) {
  return (props.trigger) ? (
    <div className='popup3'>
        <div className='popup3-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup2;