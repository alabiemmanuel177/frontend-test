import React from "react";
import { DelBtn } from "../DelBtn";


export const Table = ({ applicant }) => {
  const variable = "applicant"
  return (
    <div className="table-holder3">
      <table className="table table-bordered table-width fixed">
        <thead>
          <tr>
           
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number </th>
            <th scope="col">Home Address</th>
            <th scope="col">Types of Application</th>
            <th scope="col">Control</th>
          </tr>
        </thead>
        <tbody>
          <tr className="wrap">
           
            <td className="hold1">{applicant.name}</td>
            <td className="hold1">{applicant.emailaddress} </td>
            <td className="hold1">{applicant.phoneno}</td>
            <td className="hold1">{applicant.address}</td>
            <td className="hold1">{applicant.type}</td>
            <td className="hold1">
              <DelBtn path={applicant._id} keys={variable} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
