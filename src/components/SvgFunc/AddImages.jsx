import React from "react";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";
import axios from "axios";
import config from "../../config";

export const AddImages = ({post_path}) => {
  const [buttonPopup4, sBtn4] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [appPhotos, setPhotos] = useState(null);
  const [error, setError] = useState(false);

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
        formData
      );
      const { data } = res.data;
      setPhotos(data);
    } catch (err) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      if (!appPhotos) {
        throw new Error("Upload photo");
      }
      const res = await axios.patch(`${config.baseURL}/api/posts/${post_path}`, {
        photos:appPhotos,
      });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add_img_holder">
      <button onClick={() => sBtn4(true)} className="add_img">
        ADD +
      </button>
      <Popup4 trigger={buttonPopup4} setTrigger={sBtn4}>
        <form>
          <h2>Add Image</h2>

          <div className="ddd">
            <form>
              <div className="form-group multi-preview "></div>

              <div className="form-group mt-4 upload_btn2">
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={(e) => MultipleFileChange(e)}
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
            className="btn btn-primary save-btn"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </Popup4>
    </div>
  );
};
