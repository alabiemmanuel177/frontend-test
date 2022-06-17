import React from "react";
import { DelBtn } from "../DelBtn";

export const Table = ({contact}) => {
    const variable = "contact"
  return (
    <div className="table-holder1">
      <table className="table table-bordered table-width fixed">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Message</th>
            <th scope="col">Control</th>
          </tr>
        </thead>
        <tbody>
          <tr className="wrap">
            <td className="hold1">{contact.firstName}</td>
            <td className="hold1">{contact.lastName}</td>
            <td className="hold1">{contact.emailaddress}</td>
            <td className="hold1">{contact.phoneno}</td>
            <td className="hold1">{contact.message}</td>
            <td className="hold1">
              <DelBtn path={contact._id} keys={variable} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
