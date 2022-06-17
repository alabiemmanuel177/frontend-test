import React from "react";
import { useState } from "react";
import Popup5 from "./Popup/Popup5";
import "./delbtn2.css";
import axios from "axios";
import config from "../config";


export const PasswordChange = ({id}) => {
  const [passwordPopup, setPasswordPopup] = useState();
  const [update, updateMode] = useState(false);
  const [password, setPassword] = useState("")

  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/user+id`,{
        password,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <button className="password-btn" onClick={() => {setPasswordPopup(true); updateMode(true);}}>
        Change Password
      </button>
      <Popup5 trigger={passwordPopup} setTrigger={setPasswordPopup}>
        <form>
          <h2>Change Password</h2>
          <div className="form-row">
            <div className="form-group form-edit">
              <label>Old Password</label>
              <input
                className="form-control input-edit"
                placeholder="Old Password"
                type="password"
              />
            </div>
            <div className="form-group">              
              <label>New Password</label>
              {update ? (<input
                className="form-control"
                placeholder="New Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />) : (<input
                className="form-control"
                placeholder="New Password"
                type="password"
              />)}
              
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary save-btn" onClick={handleUpdate}>
            Save
          </button>
        </form>
      </Popup5>
    </div>
  );
}



