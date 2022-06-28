import React from "react";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import config from "../../config";
// import ImageUploadPreviewComponent from "../SvgFunc/ImageUp";
import "./fullbtn.css";

const Add = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [error, setError] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState("");

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };
  const UploadMultipleFiles = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    console.log(formData);
    try {
      const res = await axios.post(`${config.baseURL}/upload-images`, {
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(error)
    }
  };

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
          {/* <ImageUploadPreviewComponent /> */}
          <form>
            <div className="form-group multi-preview"></div>

            <div className="form-group mt-4">
              <input
                type="file"
                className="form-control"
                onChange={(e) => MultipleFileChange(e)}
                multiple
              />
            </div>
          </form>
          <div>
            <button
              type="submit"
              className="btn btn-danger btn-block mt-4 upload_btn"
              onClick={(e) => UploadMultipleFiles(e)}
            >
              Upload
            </button>
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
