import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import "./fullbtn.css";
import Popup1 from "../Popup/Popup1";
import Popup2 from "../Popup/Popup2";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import config from "../../config";

function FullBtn({ path }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, sBtn] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [beneficiary, setBeneficiary] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${config.baseURL}/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setBeneficiary(res.data.beneficiary);
    };
    getPost();
  }, [path]);


  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/posts/${path}`);
      window.location.replace("/admin");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/posts/${post._id}`,{
        title,
        desc,
        beneficiary
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <div className="fullbtn">
        <button
          onClick={() => {
            setButtonPopup(true);
            setUpdateMode(true);
          }}
          className="spc"
        >
          <Svg1></Svg1>
        </button>
        <Popup1 trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form className="edit-popup">
            <h2>Edit Employee Info</h2>
            <div className="form-row">
              <div className="form-group form-edit">
                <label>Post Header</label>
                {updateMode ? (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="Post Header"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="Post Header"
                  />
                )}
              </div>
              <div className="form-group">
                <label>Post Summary</label>
                {updateMode ? (
                  <textarea
                    className="txt-area "
                    id="exampleFormControlTextarea1"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                ) : (
                  <textarea
                    className="txt-area "
                    id="exampleFormControlTextarea1"
                  />
                )}
              </div>
            </div>
            <div className="form-group">
              <label >Beneficiary</label>
              {updateMode ? (
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  value={beneficiary}
                  onChange={(e) => setBeneficiary(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                />
              )}
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
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary save-btn"
              onClick={handleUpdate}
            >
              Save
            </button>
          </form>
        </Popup1>
        <button
          onClick={() => {
            sBtn(true);
          }}
          className="spc2"
        >
          <Svg2></Svg2>
        </button>
        <Popup2 trigger={buttonPopup1} setTrigger={sBtn}>
          <h3>Are you sure you want to delete this Post</h3>
          <button type="submit" className="btn del-btn" onClick={handleDelete}>
            Delete
          </button>
        </Popup2>
      </div>
    </div>
  );
}

export default FullBtn;
