import React from "react";
import "./foundation.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

const imageURL =
  "data:image/jpeg;base64,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";

export const Foundation = () => {
  return (
    <div className="thefoundation">
      <Navbar />
      <div className="our_initiatives">
        <div className="initiatives_text">
          <h2>Ibeji Foundation</h2>
          <h1>Our Initiatives</h1>
          <p>
            The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji
            Ebiti Jama'a in Islam)<br></br>
            This foundation was formed in memory of late Ismail Bolaji Ebiti who
            <br></br>
            died and was buried on the 14th of June 1986 with its aim and
            <br></br>
            objective as a charity organization for the promotion of the
            <br></br>
            religious education, spiritual , economic and social welfare of
            <br></br>
            mankind based on the teachings of Islam.
          </p>
        </div>
      </div>
      <div className="foundation_scheme">
        <div className="scheme">
          <div className="scheme_text">
            <h1>Health</h1>
            <p>
              We support Some indigent sick people whose treatment involve major
              <br></br>
              surgeries or operations are treated free of charge with our
              <br></br>
              affiliate Health care centre ( Federal Medical Centre Ebute Meta )
              .
            </p>
            <p>
              The foundation has supported some pregnant women that cannot
              <br></br>
              afford to pay their Labour fees , We have also supported some
              <br></br>
              hospitals in Nigeria by purchasing medical equipments for their
              <br></br>
              emergency and accidental units. We have purchased Endo Skelental
              <br></br>
              Prosthesis for a NYSC corper of olabisi Onabanjo University
              <br></br>
              graduate serving at Sokoto who was involved in a fatal accident.
            </p>
          </div>
          <div className="scheme_post">
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
          </div>
        </div>
        <div className="scheme">
          <div className="scheme_text">
            <h1>Religious Reliefs</h1>
            <p>
              As part of The foundation community development it has supported
              <br></br>
              various communities in building new mosques and renovating old
              mosques :<br></br>
            </p>
            <p>
              Oba Mosque,isale – Eko Lagos Island ( Painting of the entire
              mosque ) . <br></br>
              Alakia Central Mosque. <br></br>
              Medical School Mosque Army Cantonment , Ojo( Rebuilding of the
              mosque ) <br></br>
              Federal College of Education (Technology) Central Mosque.
              <br></br>
              Alaba international Central Mosque Ojo , Lagos ( Painting and
              renovation works like plumbing , fixing electricity ) <br></br>
              Apapa Central Mosque. <br></br>
              Oke-Koto Central Mosque, Agege. Federal Polytechnic Central
              Mosque. <br></br>
              Irorun Oluwa Central Mosque Oba Mosque ,isale - Eko Lagos Island
              ( Painting of the entire mosque ) <br></br>
              Imam Labala Mosque , Ilorin , Kwara State ( supported with the
              construction )
            </p>
          </div>
          <div className="scheme_post">
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
          </div>
        </div>
        <div className="scheme">
          <div className="scheme_text">
            <h1>Education</h1>
            <p>
              We have supported and sponsored some Nigerian Scholars in the
              <br></br>
              Publication of useful books for the society. Provision of<br></br>
              infrastructural facilities to religious places and communities
              <br></br>
              such as drilling of borehole for portable water ; such as<br></br>
              Temi-tope Mosque Ita Odo ijebu Ogbomosho etc<br></br>
            </p>
            <p>
              Financed the modern translation of the holy Qur'an from Arabic to
              <br></br>
              Yoruba. This is awaiting publication. Involve in research work
              <br></br>
              that are beneficial to the generality of people and community.
              <br></br>
            </p>
          </div>
          <div className="scheme_post">
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
          </div>
        </div>
        <div className="scheme">
          <div className="scheme_text">
            <h1>Empowerment</h1>
            <p>
              We support Some indigent sick people whose treatment involve major
              <br></br>
              surgeries or operations are treated free of charge with our
              <br></br>
              affiliate Health care centre ( Federal Medical Centre Ebute Meta )
              <br></br>.
            </p>
            <p>
              The foundation has supported some pregnant women that cannot
              <br></br>
              afford to pay their Labour fees , We have also supported some
              <br></br>
              hospitals in Nigeria by purchasing medical equipments for their
              <br></br>
              emergency and accidental units. We have purchased Endo Skelental
              <br></br>
              Prosthesis for a NYSC corper of Olabisi Onabanjo University
              <br></br>
              graduate serving at Sokoto who was involved in a fatal accident.
              <br></br>
            </p>
          </div>
          <div className="scheme_post">
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
          </div>
        </div>
        <div className="scheme">
          <div className="scheme_text">
            <h1>Humanitarian Relief</h1>
            <p>
              By sponsoring Special Prayers with Radio Stations during Ramadan
              <br></br>
              Period; supporting Muslim Burials, Walimatul Qur'an and Islamic
              <br></br>
              Competitions, School end of year programs.<br></br>
            </p>
            <p>We have also donated to support Sokoto Flood Victims</p>
          </div>
          <div className="scheme_post">
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
            <div className="sch_post">
              <img src={imageURL} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
