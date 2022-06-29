import React from "react";
import "./aboutus.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
// import { AiOutlineArrowRight } from "react-icons/ai";

export const Aboutus = () => {
  return (
    <div className="aboutus_div">
      {/* navbar component */}
      <Navbar />
      <div>
        {/* banner  */}
        <img
          src="https://res.cloudinary.com/manlikeemma/image/upload/v1655970864/Ibeji%20Foundation/bgOW_hfbzvj.jpg"
          alt=""
          width={"100%"}
          className="banner-head"
          
        />
        {/* banner ends */}
        <div id="ourwork" className="ourwork">
          <h1 className="h1">About Us</h1>
          <h3>
            Real changes take time, and we are commited to this work for the
            long term
          </h3>
        </div>
        {/* our history container */}
        <div className="history">
          <div className="history_image">
            {/* ibeji logo */}
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png"
              alt=""
              height={"200px"}
              style={{marginTop: '20px'}}
              className="hist_img"
            />
          </div>
          <div className="history_text">
            {/* our history text*/}
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
        {/* End of our history container */}

        {/* our vision and mission container */}
        <div className="aboutus_content">
          {/* our vision container */}
          <div className="ourvision">
            {/* our vision image */}
            <img
              src="https://res.cloudinary.com/manlikeemma/image/upload/v1655994514/Ibeji%20Foundation/vision_xti82k.png"
              alt=""
              width={"150px"}
              height={"150px"}
              style={{ marginBottom: "50px" }}
            />
            {/* our vision text container */}
            <div className="ourvision_text">
              <h1 className="h1">Our vision</h1>
              <h3 className="h3">
                We aim at providing the best services to humanity as practiced
                by our Prophet Mohammed (S.A.W).
              </h3>
            </div>
          </div>
          {/* our mission container */}
          <div className="ourmission"> 
            <svg
              style={{ marginBottom: "50px" }}
              width="150px"
              height="150px"
              viewBox="0 0 496 496"
              fill="none"
              // our mission svg
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

           {/* our mission statement text container */}
            <h1 className="h1">Mission Statement</h1>
            <h3 className="h3">
              “Wisdom is better than weapons of war” by professing , practicing,
              preaching, protecting and propagating the deen of Islam with
              beautiful exhortations." Quran: C16 Vs125s
            </h3>
          </div>
        </div>
        {/* End of mission and vision statement container */}
                  {/* our founder container */}
                <div className="ourfounder">
           <div className="founder-holder">
           <div className="text-holder">
           
              <div className="head-color1">
             <h2 className="founder_spc">About Our Founder</h2> 
             </div>
             {/* our founder image on screen sizes 425px - 320px */}
             <div className="img-holder">
              <img src="/images/founder2.jpg" width="400px" alt="" className="responsive2 display_img" />
            </div>
            {/* our founder text */}
             <div className="text_hold_2">
           <p className="ssss">Alhaji R.A Ebiti is a graduate of Obafemi Awolowo University in Ife, Osun State of Nigeria. 
            He is a fellow of the prestigious Institute of Chartered Accountant of Nigeria (ICAN). 
            He is a seasoned Accountant and entrepreneur per excellent.</p>
            <p> He started his professional 
            career with an international renowned firm of chartered accountants KPMG where he handle large and medium
             sized audit of companies in different sector of the economy.Alhaji Rafiu Ebiti; he is Chairman of the Foundation ;  He is a devoted Muslim and a distinguished Business man;
              A great Philanthropist and Humanitarian.</p>
              </div>
              
             <div className="x_holder ">
              {/* founder other positions/jobs */}
             <div className="x founder_font " data-aos="flip-left">
              {/* our founder job icons */}
              <div className="mb-3"><img src="/icons/suitcase.png" height="50px" alt="" /></div>
              {/* our founder jobs text */}
             <p className=""> Alhaji Rafiu Adisa Ebiti is currently the Pro-chancellor/ Chairman, 
              Governing Council of Summit University Kwara State.; He spearheads other Muslim Organizations in Nigeria; 
              He has over 30 years managing experience with the company.</p>

</div>
             <div className="y" data-aos="flip-left">
              {/* our founder skills and expertise container */}
              <div className="founder_font mb-3 ">
               {/* our founders skills and expertise icon  */}
              <img src="/icons/skill.png"  height="50px" alt="" />
              </div>
              {/* our founder skills text */}
              <p className="founder_font">
              He gained vast ocean of knowledge and skill in the areas of accounting, taxation, secretarial practice, auditing,
               investigation, business management receivership and liquidation.  auditing,
               investigation, business management receivership and liquidation.

              </p>
            
</div>
          
             </div>
           </div>
           {/* our founder image at full screen */}
            <div className="img-holder">
              <img src="/images/founder2.jpg" width="400px" alt="" className="responsive1 display_img2" />
            </div>
            
           </div>

         </div>
         {/* End of  our founder container */}
         {/* Our team container */}
        <div>
         <div className="spc1">
            <div className="red">
              <h1 className="head-color h1" data-aos="fade-right">
                Our Esteemed Team
              </h1>
            </div>
            <p className="h3 team-p">
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to
            </p>
            <p className="h3 team-p mb-3" >
              excellence, creativity, and innovation to the day to day operation
              of the company.
            </p>

            

            <div className="team">
              {/* <h1 className="center head-color">Our Team</h1> */}
              <div className="team-arr">
                <div className=" ">
                  {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  {/* team member name and positions */}
                  <div className="text-arr">
                    <p className="team-name">Dr ABDULRASAQ MOYOSORE EBITI</p>
                    <p>BOARD OF TRUSTEE MEMBER</p>
                  </div>
                </div>
                <div className="">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">ENGR. IBRAHIM OLUWATOSIN EBITI</p>
                    <p>BOARD OF TRUSTEE MEMBER</p>
                  </div>
                </div>
                <div className="">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">ENGR. TOYOSI MARIAM EBITI- LABINJO</p>
                    <p>BOARD OF TRUSTEE MEMBER</p>
                  </div>
                </div>
                <div className="mb-5">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">ABDULLAHI OLAOLUWA EBITI</p>
                    <p>BOARD OF TRUSTEE MEMBER</p>
                  </div>
                </div> 
                <div className="mb-5">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">Mrs Naomi Ogunlana</p>
                    <p>WELFARE MANAGER</p>
                  </div>
                </div>
                <div className="mb-5">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">Mr . Mikhail Zakariyyah</p>
                    <p>WELFARE MANAGER</p>
                  </div>
                </div>
                <div className="mb-5">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">Mr. Jubril Atolani</p>
                    <p>WELFARE MANAGER</p>
                  </div>
                </div>
                <div className="mb-5">
                     {/* team member images */}
                  <img
                    src="/images/staticStaff.jpg"
                    className="staff-img"
                    width="250px"
                    alt=""
                  />
                  <div className="text-arr">
                      {/* team member name and positions */}
                    <p className="team-name">Rafiat Gbadamosi</p>
                    <p>TREASURER/ACCOUNTANT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of out team container */}
          {/* footer component */}
        <Footer />
      </div>
    </div>
  );
};
