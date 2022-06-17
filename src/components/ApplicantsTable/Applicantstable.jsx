import React from "react";
import "./apptable.css";
import { Table } from "./Table";

export const Applicantstable = ({applicants}) => {
  return (
    <div className="post">
      <h1 className="page-head">Applicants</h1>   
      {applicants.map((p) => (
        <Table applicant={p}/>
      ))}   
    </div>
  );
};
