import React from "react";
import "./posttable.css";
import { Table } from "./Table";
import Add from "../SvgFunc/Add";

export const PostTable = ({ posts }) => {
  return (
    <div>
      <div className="posts">
        <h1 className="page-head">Post Configuration</h1>
        <div className="table-holder">
          <Add className="add-btn"/>
        <table className="table table-bordered table-width">
        <thead>
          <tr>
           
            <th scope="col" className="table-spc">Post Header</th>
            <th scope="col" className="table-spc">Post Summary</th>
            <th scope="col" className="table-spc">Post Image </th>
            <th scope="col" className="table-spc">Beneficiary</th>
            <th scope="col" className="table-spc">Controls</th>
          </tr>
        </thead>
        </table>
       
        {posts.map((p) => (
          <Table post={p} 
          />
        ))}
         </div>
      </div>
    </div>
  );
};

export default PostTable;
