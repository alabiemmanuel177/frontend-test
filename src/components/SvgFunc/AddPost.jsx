import React from "react";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import config from "../../config";
import "./fullbtn.css";

const Add = () => {
  const [appPhotos, setPhotos] = useState(null)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [error, setError] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState([]);
  

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };
  
  const UploadMultipleFiles = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of multipleFiles) {
      formData.append("image", file);
    }
    try {
      const res = await axios.post(
        `${config.baseURL}/api/upload-images`,
        formData,
      );
      const { data } = res.data;
      setPhotos(data);
    } catch (err) {
      console.log(error);
    }
  };
  /**
   * Sets the state of the app photos
   */
  // const setPhotos = (photos) => {
  //   appPhotos = photos;
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {

      if(!appPhotos){
        throw new Error("Upload photo");
      }
      const res = await axios.post(`${config.baseURL}/api/posts`, {
        title,
        desc,
        beneficiary,
        photos: appPhotos,
      });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err)
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
          <h2>Add Posts</h2>
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
          <div className="ddd">
          <form>
            <div className="form-group multi-preview "></div>

            <div className="form-group mt-4 upload_btn2">
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
