import React from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../components/context/Context";
import axios from "axios";
import config from "../config";

export const  Login = ()=> {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      res.data && window.location.replace("/admin");
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  }; 
  return (
    <div className="color">
      <div className="form-arr">
        <div className="login-div">
          <img src="/images/ibeji.jpg" alt="ibeji"  height="50px" className="login-icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="field-holder">
              <input
                type="text"
                name="name"
                placeholder="Username"
                ref={userRef}
                className="field"
              />
              <div className="icon-holder">
                {" "}
                <AiOutlineUser className="icon-pos" />{" "}
              </div>
            </div>
          </label>
          <label>
            <div className="field-holder">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="field"
                ref={passwordRef}
              />
              <div className="icon-holder">
                {" "}
                <AiOutlineLock className="icon-pos" />
              </div>
            </div>
          </label>
          <input type="submit" value="Sign in" className="signin-btn" disabled={isFetching} />
        </form>
      </div>
    </div>
  );
}



