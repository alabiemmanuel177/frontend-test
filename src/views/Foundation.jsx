import React from "react";
import "./foundation.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Foundation = () => {
  return (
    <div className="thefoundation">
      <Navbar/>

      <div className="header">
        <h1>The Foundation</h1>
      </div>
      <div className="thefoundation-info">
        <div className="foundation_text">
          <p>
            The foundation carrying out charity project under the following
            headings:
          </p>
          <p>1. MOSQUE PROJECTS (Construction, Renovation and Resigns)</p>
          <p>2. SHOLARSHIP (Secondary Educations, University and Research)</p>
          <p>
            3. HUMANITARIAN DONATION (Medical, Social welfare and General
            support – …..Widows, Orphans and less privilege, Shouts for Janaza)
          </p>
          <p>
            4. ISLAMIC ORGANIZATION (Capacity building, Knowledge Support and
            Endowment of Islamic Societies)
          </p>
          <p>5. RAMADAN</p>
          <p>6. HAJJ</p>
          <p>7. SUNDRIES</p>
          <p>
            For anyone that has passion for listed projects or wishes to any of
            the above, please contact us at
          </p>
          <p>
            IBEJI FOUNDAITON: <br></br>
            165 HERBERT MACAULAY STREET <br></br>
            EBUTE METTA LAGOS.
          </p>
        </div>
        <div className="foundation-logo">
            <img src="" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
