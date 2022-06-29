import React from "react";
import "./contacttable.css";
import { Table } from "./Table";

export const ContactTable = ({contacts}) => {
  return (
    <div className="post1">
      <h1 className="page-head">Contacts</h1>
      <table className="table table-bordered table-width fixed mv3">
        <thead>
          <tr>
            <th scope="col" className="hold2">First Name</th>
            <th scope="col" className="hold2">Last Name</th>
            <th scope="col"  className="hold2">Email</th>
            <th scope="col" className="hold2">Phone No</th>
            <th scope="col" className="hold2">Message</th>
            <th scope="col" className="hold2">Control</th>
          </tr>
        </thead>
        </table>
      {contacts.map((p) => (
        <Table contact={p}/>
      ))} 
    </div>
  );
};
