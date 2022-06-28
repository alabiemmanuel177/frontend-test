import React from "react";
import "./sponsor.css";

export const Sponsor = () => {
  return (
    <div className="sponsor" data-aos="fade-down">
      <div className="sponsor-card">
        <h1>
          Our Sponsors & Muslim Organization associated with Ibeji Foundation
        </h1>
        <div className="sponsor-card-images" data-aos="fade-right">
          <div className="image">
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655879249/Ibeji%20Foundation/Markaz_vgxsgn.jpg"
              alt=""
              height={"150px"}
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655879470/Ibeji%20Foundation/nasfat_dkv93x.png"
              alt=""
              height={"100px"}
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src="https://cdn.vanguardngr.com/wp-content/uploads/2019/08/Ansar-ud-Deen.jpg"
              alt=""
              width={"130px"}
              height={"130px"}
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655916348/Ibeji%20Foundation/download_lpbuxi.jpg"
              alt=""
              width={"130px"}
              height={"130x"}
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655879473/Ibeji%20Foundation/unifemga_fyaqtv.jpg"
              height={"150px"}
              alt=""
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              alt=""
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655879682/Ibeji%20Foundation/js_uyrapl.png"
            />
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655879469/Ibeji%20Foundation/Fomwan_fopppm.jpg"
              alt=""
              height={"150px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
