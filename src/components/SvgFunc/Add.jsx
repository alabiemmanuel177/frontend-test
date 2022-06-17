import React from "react";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import config from "../../config";

const Add = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/posts`, {
        title,
        desc,
        beneficiary,        
      });
      res.data && window.location.reload("/");
    } catch (err) {
      setError(true);
    }
  };
  const [buttonPopup3, sBtn3] = useState(false);
  return (
    <div className="add-btn">
      <button onClick={() => sBtn3(true)} className="spc">
        <AiOutlineUserAdd />
      </button>
      <Popup4 trigger={buttonPopup3} setTrigger={sBtn3}>
        <form>
          <h2>Add Employee</h2>
          <div className="form-row">
            <div className="form-group form-edit">
              <label>Post Header</label>
              <input
                type="text"
                className="form-control input-edit"
                id="inputAddress"
                placeholder="Post Header"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Post Summary</label>
              <textarea
                className="txt-area "
                id="exampleFormControlTextarea1"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Beneficiary</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              onChange={(e) => setBeneficiary(e.target.value)}
            ></input>
          </div>
          <div className="form-row">
            <div className="input-group mb-3 mt-2">
              <div className="custom-file">
                <label>Post Image</label>
                <br></br>
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                ></input>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary save-btn"
          >
            Save
          </button>
        </form>
      </Popup4>
    </div>
  );
};

export default Add;
