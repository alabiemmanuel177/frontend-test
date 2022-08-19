import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";
import ImgDelete from "../SvgFunc/ImgDelete";
import { AddImages } from "../SvgFunc/AddImages";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
export const TableT = ({ post }) => {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="tablecell">{post.title}</TableCell>
          <TableCell className="tablecell">{post.desc}</TableCell>
          <TableCell className="tablecell">
            {post.photos.map((p) => (
              <ImgDelete post_path={post._id} image={p} />
            ))}
            <AddImages post_path={post._id} />
          </TableCell>
          <TableCell className="tablecell">{post.beneficiary}</TableCell>
          <TableCell className="tablecell">
            <FullBtn path={post._id} post={post} />
          </TableCell>
        </TableRow>
      </TableBody>
    </>
    // <div className="table-holder2">
    //   <table className="table table-bordered table-width table-pos">
    //     <tbody>
    //       <tr className="wrap">
    //         <td className="table-spc">{post.title}</td>
    //         <td className="table-spc">{post.desc}</td>
    //         <td className="table-spc ">
    //           {post.photos.map((p) => (
    //             <ImgDelete post_path={post._id} image={p} />
    //           ))}

    //           <AddImages post_path={post._id}/>
    //         </td>
    //         <td className="table-spc">{post.beneficiary}</td>
    //         <td className="table-spc">
    //           <FullBtn path={post._id} post={post} />
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>

    // </div>
  );
};
