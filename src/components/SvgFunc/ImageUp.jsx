import React, { Component } from 'react';
import "./fullbtn.css"
 
class ImageUploadPreviewComponent extends Component {
 
    fileObj = [];
    fileArray = [];
 
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
 
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
 
    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
 
    render() {
        return (
            <div className='upload_row'>
            <form>
                <div className="form-group multi-preview">
                    {/* {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))} */}
                </div>
 
                <div className="form-group mt-4">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
              
            </form >
            <div>
            <button type="button" className="btn btn-danger btn-block mt-4 upload_btn" onClick={this.uploadFiles}>Upload</button>
            </div>
            </div>
        )
    }
}
export default ImageUploadPreviewComponent;