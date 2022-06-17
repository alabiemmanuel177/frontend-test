import React from "react";
import "./homecards.css";
import { Sponsor } from "../sponsor/Sponsor";
import { Link } from "react-router-dom";

export const Homecards = () => {
  return (
    <div className="card-container">
      <div className="home_aboutus">
        <div className="home_aboutus_image">
          <img
            src="https://preview.colorlib.com/theme/chariter/assets/img/gallery/xabout.jpg.pagespeed.ic.jiiWnfFI-S.webp"
            height={"510px"}
            width={"636px"}
            alt=""
          />
        </div>
        <div className="home_aboutus_text">
          <h1>Who we are ?</h1>
          <h2>
            The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji
            Ebiti Jama'a in Islam)
          </h2>
          <p>
            This foundation was formed in memory of late<br></br>
            Ismail Bolaji Ebiti who died and was buried on the 14th of June 1986
            with its aim and objective<br></br>
            as a charity organization for the promotion of the religious
            education, spiritual , economic <br></br>
            and social welfare of mankind based on the teachings of Islam.
          </p>
          <button
            id="homecard-btn"
            type="button"
            className="btn btn-primary btn-lg"
            color="white !important"
          >
            Learn More
          </button>
        </div>
      </div>
      <Sponsor />
    </div>
  );
};
