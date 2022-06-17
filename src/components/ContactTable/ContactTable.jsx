import React from "react";
import "./contacttable.css";
import { Table } from "./Table";

export const ContactTable = ({contacts}) => {
  return (
    <div className="post">
      <h1 className="page-head">Contacts</h1>
      {contacts.map((p) => (
        <Table contact={p}/>
      ))} 
    </div>
  );
};
