import React from 'react'
import Popup2 from "../Popup/Popup2";
import { useState, useEffect} from "react";
import "./fullbtn.css";
import {BsPerson} from 'react-icons/bs'


const AdminImg = () => {
      const [buttonPopup1, sBtn] = useState();
     
  return (
    <div>
   
    <button className='edit_img' onClick={() => {
            sBtn(true);
          }} > <img src="images/icon.png" className="user-icon" alt="icon" /></button>
    <Popup2 trigger={buttonPopup1} setTrigger={sBtn}>
        <h1>EDIT PROFILE</h1>
        <div className='profile_edit'>
        <div class="upload-btn-wrapper">
        <button className='img_edit' type='file'><BsPerson className='user_icon'/><p>Edit Photo</p></button>
       <input type="file" id="myFile" accept="image/png, image/jpeg"/>
</div>  
       
       <div className='mv'>
       <form className="form-group">
       <input 
          type="text"
          className="form-control"
       ></input>
       </form>
       <button type="submit" className="btn save-btn">
            Save
          </button>
    
          </div>
       </div>
         
        </Popup2>
    </div>
  )
}

export default AdminImg