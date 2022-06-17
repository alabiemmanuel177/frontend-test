import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";

export const Table = ({ post }) => {
  return (
    <div className="table-holder2">
      <table className="table table-bordered table-width table-pos">
        <tbody>
          <tr className="wrap">
            <td className="table-spc">{post.title}</td>
            <td className="table-spc">{post.desc}</td>
            <td className="table-spc">Farm.jpg</td>
            <td className="table-spc">{post.beneficiary}</td>
            <td className="table-spc">
              <FullBtn
                path={post._id}
                post={post}                
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
