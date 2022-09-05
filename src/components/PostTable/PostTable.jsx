import React from "react";
import "./posttable.css";
import { TableT } from "./Table";
import Add from "../SvgFunc/AddPost";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const PostTable = ({ posts }) => {
  return (
    <>
      <div className="table-holder">
        {" "}
        <React.Fragment>
          <h1 className="page-head">Post Configuration</h1>
          <Add className="add-btn" />
          <Table size="big" className="pst">
            <TableHead>
              <TableRow>
                <TableCell className="tablecell">Title</TableCell>
                <TableCell className="tablecell">Summary</TableCell>
                <TableCell className="tablecell">Image</TableCell>
                <TableCell className="tablecell">Beneficiary</TableCell>
                <TableCell className="tablecell">Controls</TableCell>
              </TableRow>
            </TableHead>
            {posts.map((p) => (
              <TableT post={p} />
            ))}
          </Table>
        </React.Fragment>
      </div>
    </>
    // <div>
    //   <div className="posts">
    //     <h1 className="page-head">Post Configuration</h1>
    //     <div className="table-holder">
    //       <Add className="add-btn" />
    //       <table className="table table-bordered table-width">
    //         <thead>
    //           <tr>
    //             <th scope="col" className="table-spc">
    //               Title
    //             </th>
    //             <th scope="col" className="table-spc">
    //                Summary
    //             </th>
    //             <th scope="col" className="table-spc">
    //               Image{" "}
    //             </th>
    //             <th scope="col" className="table-spc">
    //               Beneficiary
    //             </th>
    //             <th scope="col" className="table-spc">
    //               Controls
    //             </th>
    //           </tr>
    //         </thead>
    //       </table>

    //       {posts.map((p) => (
    //         <Table post={p} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostTable;
