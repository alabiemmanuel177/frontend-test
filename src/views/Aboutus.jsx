import React from "react";
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
        </div>
        <div>
          <div className="spc1">
            <div className="red">
              <h1 className="head-color" data-aos="fade-right">
                Our Esteemed Team
              </h1>
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
        <div className="history">
          <div className="history_image"></div>
          <div className="history_text">
            <h1 style={{marginBottom:"50px"}} className="h1">OUR HISTORY</h1>
            <h3 className="h3">
              The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji
              Ebiti Jama'a in Islam) this foundation was formed in memory of
              late Ismail Bolaji Ebiti who died and was buried on the 14th of
              June 1986 with its aim and objective as a charity organization for
              the promotion of the religious education, spiritual, economic and
              social welfare of mankind based on the teachings of Islam.
              <br /><br/> It was also established to carry out activities towards
              empowering the Muslim youths through building capacity programs
              and schools sponsorship , entrepreneurial development , granting
              aids , providing stipends to students and aged ones ; and also
              alleviating poverty by helping the less privileged through our
              corporate social responsibility progamme by giving them
              opportunities to make a livelihood etc.
              <br /><br/>
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
            <img src="" alt="" />
            <div className="ourvision_text">
              <h1 className="h1">Our vision</h1>
              <h3 className="h3">
                We aim at providing the best services to humanity as practiced
                by our Prophet Mohammed (S.A.W).
              </h3>
            </div>
          </div>
          <div className="ourmission">
            <h1 className="h1">Mission Statement</h1>
            <h3 className="h3">
              “Wisdom is better than weapons of war” by professing , practicing,
              preaching, protecting and propagating the deen of Islam with
              beautiful exhortations." Quran: C16 Vs125s
            </h3>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
