import React from "react";
import { Sponsor } from "../components/sponsor/Sponsor";
import "./aboutus.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="image-holder">
          <div className="founder-img">
            <img
              src="/images/founder.jpg"
              width="100%"
              height="700px"
              alt=""
              className="founder1"
            />
          </div>
          <div className="founder-txt">
            <div className="cart"></div>
            <div className="cart2 aboutus-font">
              <h1 className="head-color">Iyidemilade Nasiru</h1>
              <h2>Group President & Chief Executive</h2>
              <hr></hr>
              <p className="about  aboutus-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quidem minima assumenda molestias voluptate, sequi aperiam fugit
                eum veniam consectetur illum eligendi nesciunt repellendus
                distinctio maiores aliquam explicabo suscipit deserunt.
              </p>
              <button className="long-btn">Read More</button>
              <button className="btn-arr">
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="spc1">
            <div className="red">
              <h1 className="head-color">Our Esteemed Team</h1>
            </div>
            <p>
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to
            </p>
            <p>
              excellence, creativity, and innovation to the day to day operation
              of the company.
            </p>

            <div className="team">
              {/* <h1 className="center head-color">Our Team</h1> */}
              <div className="team-arr">
                <div className=" ">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img src="/images/staticStaff.jpg" width="250px" alt="" />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
