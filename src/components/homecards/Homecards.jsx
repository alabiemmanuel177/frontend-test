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
      <div className="ourschemes">
        <h1>Our Schemes</h1>
        <div className="our_schemes">
          <div className="ourschemes_card">
            <img
              src="https://borgenproject.org/wp-content/uploads/23379499480_a8b69dc31e_o-705x470.jpg"
              alt=""
            />
            <div className="txt">
              <p>HEALTH</p>
            </div>
          </div>
          <div className="ourschemes_card">
            <img
              src="https://media.istockphoto.com/photos/mortarboard-on-books-and-graduation-scroll-on-the-deskeducation-picture-id1328618978?b=1&k=20&m=1328618978&s=170667a&w=0&h=A6Gowdib9-P6wTU8AxLqwokH0vOFOrxlj62hrwd0yvo="
              alt=""
            />
            <p>EDUCATION</p>
          </div>
          <div className="ourschemes_card">
            <img
              src="https://images.unsplash.com/photo-1636986905406-758b0e280f49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>EMPOWERMENT</p>
          </div>
          <div className="ourschemes_card">
            <img
              src="https://www.un.org/ruleoflaw/wp-content/uploads/2015/04/humanitarian.jpg"
              alt=""
            />
            <p>
              HUMANITARIAN <br />
              RELIEF
            </p>
          </div>
        </div>
        <button
          id="scheme-btn"
          type="button"
          className="btn btn-primary btn-lg"
          color="white !important"
        >
          Read More
        </button>
      </div>
      <Sponsor />
    </div>
  );
};
