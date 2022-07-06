import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";
import ImgDelete from "../SvgFunc/ImgDelete";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";

export const Table = ({ post }) => {
  const [buttonPopup4, sBtn4] = useState(false);
  return (
    <div className="table-holder2">
      <table className="table table-bordered table-width table-pos">
        <tbody>
          <tr className="wrap">
            <td className="table-spc">{post.title}</td>
            <td className="table-spc">{post.desc}</td>
            <td className="table-spc ">
              {post.photos.map((p) => (
                <ImgDelete post_path={post._id} image={p} />
              ))}{" "}
              <div  className="add_img_holder">
              <button onClick={() => sBtn4(true)} className="add_img">ADD +</button>
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
                // onChange={(e) => MultipleFileChange(e)}
                multiple
              />
            </div>
          </form>
          <div>
            <button
              type="submit"
              className="btn btn-danger btn-block mt-4 upload_btn"
              // onClick={(e) => UploadMultipleFiles(e)}
            >
              Upload
            </button>
            
          </div>
          </div>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="btn btn-primary save-btn"
          >
            Save
          </button>
        </form>
      </Popup4>
              </div>
            </td>
            <td className="table-spc">{post.beneficiary}</td>
            <td className="table-spc">
              <FullBtn path={post._id} post={post} />
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
    
  );
};
