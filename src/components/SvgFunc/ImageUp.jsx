import React, { Component } from "react";
import "./fullbtn.css";
import { useState } from "react";
import axios from "axios";
import config from "../../config";

class ImageUploadPreviewComponent extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("file", this.state.file);
    axios
      .post(`${config.baseURL}/upload-images`, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="upload_row">
        <form>
          <div className="form-group mt-4">
            <input
              type="file"
              className="form-control"
              // onChange={(e) => MultipleFileChange(e)}
              multiple
            />
          </div>
        </form>
        <div>
          <button
            type="submit"
            className="btn btn-danger btn-block mt-4 upload_btn"
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}
export default ImageUploadPreviewComponent;
