import React from 'react'
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import "./fullbtn.css";
import Popup1 from "../Popup/Popup1";
import Popup2 from "../Popup/Popup2";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const ImgDelete = () => {
    const [buttonPopup1, sBtn] = useState(false);

    const handleDelete = async () => {
        try {
          await axios.delete(`${config.baseURL}/posts/`);
          window.location.replace("/admin");
        } catch (err) {}
      };
    
  return (
    <div className='imgdel_holder'>
        <div className='img_name'>
         Table.jpg
         </div>
   <button
          onClick={() => {
            sBtn(true);
          }}
          className="spc2"
        >
           
          <Svg2></Svg2>
        </button>
        <Popup2 trigger={buttonPopup1} setTrigger={sBtn}>
          <h3>Are you sure you want to delete this Image</h3>
          <button type="submit" className="btn del-btn" onClick={handleDelete}>
            Delete
          </button>
        </Popup2>

    </div>
  )
}

export default ImgDelete