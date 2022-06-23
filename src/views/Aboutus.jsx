import React from "react";
import "./aboutus.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Aboutus = () => {
  return (
    <div className="aboutus_div">
      <Navbar />
      <div>
        <img
          src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655970864/Ibeji%20Foundation/bgOW_hfbzvj.jpg"
          alt=""
          width={"100%"}
          
        />
        <div id="ourwork" className="ourwork">
          <h1 className="h1">About Us</h1>
          <h3>
            Real changes take time, and we are commited to this work for the
            long term
          </h3>
        </div>
        <div className="history">
          <div className="history_image">
            <img
              src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png"
              alt=""
              height={"200px"}
              style={{marginTop: '20px'}}
            />
          </div>
          <div className="history_text">
            <h1 style={{ marginBottom: "50px" }} className="h1">
              OUR HISTORY
            </h1>
            <h3 className="h3">
              The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji
              Ebiti Jama'a in Islam) this foundation was formed in memory of
              late Ismail Bolaji Ebiti who died and was buried on the 14th of
              June 1986 with its aim and objective as a charity organization for
              the promotion of the religious education, spiritual, economic and
              social welfare of mankind based on the teachings of Islam.
              <br />
              <br /> It was also established to carry out activities towards
              empowering the Muslim youths through building capacity programs
              and schools sponsorship , entrepreneurial development , granting
              aids , providing stipends to students and aged ones ; and also
              alleviating poverty by helping the less privileged through our
              corporate social responsibility progamme by giving them
              opportunities to make a livelihood etc.
              <br />
              <br />
              Ibeji foundation came into existence in the year 2010 registered
              with the co-operate affair commission (CAC) of Nigeria as an
              incorporation of Trustee . A Non-Governmental organization that
              provides access to quality education, research, vocational and
              humanitarian activities.
            </h3>
          </div>
        </div>
        <div className="aboutus_content">
          <div className="ourvision">
            <img
              src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655994514/Ibeji%20Foundation/vision_xti82k.png"
              alt=""
              width={"150px"}
              height={"150px"}
              style={{ marginBottom: "50px" }}
            />
            <div className="ourvision_text">
              <h1 className="h1">Our vision</h1>
              <h3 className="h3">
                We aim at providing the best services to humanity as practiced
                by our Prophet Mohammed (S.A.W).
              </h3>
            </div>
          </div>
          <div className="ourmission">
            <svg
              style={{ marginBottom: "50px" }}
              width="150px"
              height="150px"
              viewBox="0 0 496 496"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M477.072 480L407.224 332.088L448 291.312L480 323.312V216H372.688L404.688 248L379.44 273.248L341.072 192H286.208L268.752 160H256V112H438.128L408.904 63.288L427.816 16H256V0H240V160H170.944L18.944 480H0V496H496V480H477.072ZM256 32H404.184L391.096 64.712L409.872 96H256V32ZM427.312 248L411.312 232H464V284.688L448 268.688L320 396.688L264 340.688L152 452.688L131.312 432L268 295.312L324 351.312L427.312 248ZM36.656 480L181.056 176H259.248L304.976 259.832L319.024 252.168L294.928 208H330.928L367.416 285.272L324 328.688L268 272.688L108.688 432L152 475.312L264 363.312L320 419.312L395.208 344.104L459.376 480H36.656Z"
                fill="#28DA6C"
              />
              <path d="M288 64H272V80H288V64Z" fill="#28DA6C" />
              <path d="M320 64H304V80H320V64Z" fill="#28DA6C" />
              <path d="M352 64H336V80H352V64Z" fill="#28DA6C" />
            </svg>

            {/* <img
              src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655994956/Ibeji%20Foundation/goal-svgrepo-com_ko50eg.svg"
              alt=""
              width={"150px"}
              height={"150px"}
              style={{ marginBottom: "50px" }}
            /> */}
            <h1 className="h1">Mission Statement</h1>
            <h3 className="h3">
              “Wisdom is better than weapons of war” by professing , practicing,
              preaching, protecting and propagating the deen of Islam with
              beautiful exhortations." Quran: C16 Vs125s
            </h3>
          </div>
        </div>

        {/* <div className="image-holder">
          <div className="founder-img">
            <img
              src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655558183/Ibeji%20Foundation/MENA.max-1500x500_geuz5c.jpg"
              width="100%"
              height=""
              alt=""
              className="founder1"
            />
          </div>
          <div className="founder-txt" data-aos="fade-down-left">
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
        </div> */}
        <div>
          <div className="spc1">
            <div className="red">
              <h1 className="head-color h1" data-aos="fade-right">
                Our Esteemed Team
              </h1>
            </div>
            <p className="h3">
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to
            </p>
            <p className="h3">
              excellence, creativity, and innovation to the day to day operation
              of the company.
            </p>

            <div className="team">
              {/* <h1 className="center head-color">Our Team</h1> */}
              <div className="team-arr">
                <div className=" ">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
                <div className="mb-5">
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                    <p className="team-name">Iyidemilade Nasiru Halim</p>
                    <p>head of sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
