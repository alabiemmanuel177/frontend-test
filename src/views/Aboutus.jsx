import React from "react";
import { Sponsor } from "../components/sponsor/Sponsor";
import "./aboutus.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <div className="aboutus">
        <div className="aboutus-intro">
          <div className="header">
            <h1> About Us</h1>
          </div>
          <div className="intro">
            <p className="text">
            The IBEJI FOUNDATION which is an abbreviation of (Ismail Bolaji Ebiti Jama’a
in Islam) this foundation was formed in memory of late Ismail Bolaji Ebiti who
died and was buried on the 14th of June 1986 with its aim and objective as a
charity organization for the promotion of the religious education, spiritual,
economic and social welfare of mankind based on the teachings of Islam.
It was also established to carry out activities towards empowering the Muslim
youths through building capacity programs and schools sponsorship ,
entrepreneurial development , granting aids , providing stipends to students
and aged ones ; and also alleviating poverty by helping the less privileged
through our corporate social responsibility progamme by giving them
opportunities to make a livelihood etc.
Ibeji foundation came into existence in the year 2010 registered with the cooperate affair commission (CAC) of Nigeria as an incorporation of Trustee . A
Non-Governmental organization that provides access to quality education,
research, vocational and humanitarian activities.

            </p>
            <p className="text car">
              OUR VISION : We aim at providing the best humanitarian services as practiced by our Prophet
           Mohammed (S.A.W).
            </p>
           
          </div>
        </div>
        <div className="mission-statement " id="mission">
          
         <h1 className="text">MISSION STATEMENT</h1>
          <p className="poss text">“Wisdom is better than weapons of war” by professing , practicing, preaching,
        protecting and propagating the deen of Islam with beautiful exhortations.
        Quran: C16 Vs125s<br></br><br></br>
        Ibeji foundation has been known to have committed its organization to support
         different categories of charity programmes since inception in 2010:
         The foundation was established with the following aims and objectives
         amongst others.<br></br><br></br><br></br>
         </p>
          {/* <ul className="text car list-space">
         
            
            <li className="text">
              To establish passion among Muslim and oppressed through
              Administration of charity ( Zakat and Sadaqah) as well as welfare package
              programmes for both young and old in the society .
            </li>
            <li className="text">
              To defend and Promote the teaching and practice of correct tenets of
              islam as conferred in the Holy Quran and Sunna of the Prophet
              Mohammed (PBUH) and course of islam anywhere and anytime through
              all means .
            </li>
            <li className="text">
             To promote Educational Activities Such as funding and maintaining
              educational institution , moral and organizing Islamic programmes for
              cultural advancement of citizens
            </li>
            <li className="text">
              To cater for the welfare of indigents and less privileged people in the
              society.

            </li>
            <li className="text">
             To support and empower Muslim clerics .
            </li>
            <li className="text">
              To assist the old citizens and the sick.
            </li>
            <li className="text">
             To provide necessary support for the widows, orphans and people in an
             emergency situation.
            </li>
            <li className="text">
            To cater for the poor and the needy in alleviating poverty.
            </li>
            <li className="text">
                To provide infrastructural facilities for the house of worship irrespective
                of the religion by expanding the crusade of the religion . 
            </li>
            <li className="text">
               Participating in communal developments through our corporate social
               responsibility program e.g providing portable water ( Borehole) ,
               renovation of classes,renovation of mosques , paying monthly stipends to
               unemployed youths to acquire skills.
            </li>
            <li className="text">
              To assist in Sponsoring Hajj Pilgrims 
            </li>
      
          </ul> */}
          </div>
        
        <div className="relief-activities" id="relief">
          <h1 className="color1 space2">RELIEF ACTIVITIES</h1>
       <p className="text"> 
      <span className="bold"> Educational Scholarship Programme</span> :- Educational Scholarship
sponsorships are given to over 100 privileged children from some
selected Primary schools , Secondary schools and Tertiary institutions
by having affiliations with them e.g Sadiyyah Model Schools Akute ,
Markaz Agege, Crescent University , Summit University Offa, OAU Ile-ife
etc
The foundation also recognizes the best outstanding students in
some notable universities by empowering them on our students
scholarship schemes and awarding them with plagues .
The foundation has sponsored some graduating students to further their
education through master degree programmes , law schools , school of nursing
ICT etc .<br></br>
 <span className="bold">Empowering Muslim Clerics</span>: - One of our Welfare packages is
supporting some Muslim clerics in our societies by paying monthly
stipends to Imams , Scholars Muazins, Mosque cleaners, privileged
students ,Indigents , The elderly people.<br></br>
<span className="bold">Humanitarian Services</span> :- by sponsoring Special Prayers with Radio
Stations during Ramadan Period; supporting Muslim Burials, Walimatul
Qur’an and Islamic Competitions, School end of year programs
We have also donated to support Sokoto Flood Victims<br></br>
<span className="bold">Community Mosque projects</span>  :- as part of The foundation community
development it has supported various communities in building new
mosques and renovating old mosques :<br></br>
<div className="r-list">
<ul>
          <li> Oba Mosque,isale – Eko Lagos Island ( Painting of the entire
mosque ) .</li>
          <li> Alakia Central Mosque</li>
          <li>Medical School Mosque Army Cantonment , Ojo( Rebuilding
of the mosque ) </li>
<li>Federal College of Education (Technology) Central Mosque</li>
<li>Alaba international Central Mosque Ojo , Lagos ( Painting
and renovation works like plumbing , fixing electricity ) </li>
<li>Apapa Central Mosque.</li>
<li>Oke-Koto Central Mosque, Agege.</li>
<li>Federal Polytechnic Central Mosque</li>
<li>Irorun Oluwa Central Mosque </li>
<li>Oba Mosque ,isale – Eko Lagos Island ( Painting of the entire
mosque ) </li>
<li>Imam Labala Mosque , Ilorin , Kwara State ( supported with
the construction )</li>
        </ul><br></br> </div>
        
        
      <span className="bold">HAJJ Sponsorship Programme :- </span>  The foundation has sponsored over
100 privileged people for Hajj and Umrah programme since inception
annually .<br></br>
<span className="bold">Rural and Social Empowerment programme</span> :- Through the
foundation’s Corporate Social Responsibilities it has been empowering
Over 30 communities unemployed youths for human development by
paying them monthly stipends to empower themselves to be a better
person to the society in order to acquire various skills acquisition also
the foundation has been empowering the women societies like FOWMAN
etc<br></br>

<span className="bold">Medical Aids </span>:– we support Some indigent sick people whose treatment
involve major surgeries or operations are treated free of charge with our
affiliate Health care centre ( Federal Medical Centre Ebute Meta ) .
The foundation has supported some pregnant women that cannot afford
to pay their Labour fees ,
We have also supported some hospitals in Nigeria by purchasing medical
equipments for their emergency and accidental units.
We have purchased Endo Skelental Prosthesis for a NYSC corper of
olabisi Onabanjo University graduate serving at Sokoto who was involved
in a fatal accident.<br></br>
<span className="bold">SCHOOL Feeding Programme</span>:-The foundation has been supporting
some selected community schools with our weekly feeding programmes
and also supporting schools by packaging food items during any
organized school events .
We also support by feeding some selected mosque in these communities
on a monthly basis.
Distribution of food items to Ikoyi prison is one of our notable yearly
feeding programmes.
<ul className="r-list">
<li>Establishment and Financing of Quranic and Arabic School e.g. AlItikmah School at Alagbado, Obadeyi and Mushin , Umu-Hujatullah
Quranic Centre.</li>
RAMADAM Programmes :- The foundation has supported by
sponsoring Ramadan broadcast on both Radio stations and T.V stations ;
The glorious month of Ramadan is full of activities among which are
distribution of money and food items to the fasting Muslims,
Sponsorship of Radio and Television programs for public enlightenment,
printing and distribution of tracks containing Islamic messages;
organizing symposium and seminars etc.
<li>Other empowerment Programmes initiative for alleviating poverty of the
vulnerable ones in the society like the physicaly challenged , widows,
orphans and elderly ones by uplifting them from that stage of life.</li>
<li>Purchase and distribution of Qur’an and other Islamic Literatures.</li>
<li>Donation of Rams during Eid-ul-Adha to the Indigent Muslim leaders
and Scholars.</li>
Supporting Scholars: - we have supported and sponsored some Nigerian
Scholars in the Publication of useful books for the society.
<li>Provision of infrastructural facilities to religious places and communities
such as drilling of borehole for portable water ; such as Temi-tope
Mosque Ita Odo ijebu – Ogbomosho etc </li> 
<li>Financed the modern translation of the holy Qur’an from Arabic to
Yoruba. This is awaiting publication.</li>
<li>Involve in research work that are beneficial to the generality of people
and community.</li>
</ul>





</p>


     
        </div>
        <div className="islamic-org" id="partners">
       <h1>PARTNERS</h1>
       <ul className="text islamic-list">
          <li>ANSAR UD –DEEN SOCIETY OF NIGERIA</li> 
          <li>MARKAZ</li> 
          <li>AL- HIKMA ISLAMIC ASSEMBLE</li> 
          <li>MUSLIM STUDENTS SOCIETY OF NIGERIA</li>
          <li>MUHARRAM SISTERS</li>
           <li>MUSWEN</li> 
          <li>UNIFEMGA</li>
          <li>FOMWAN( Federation Of Muslim Women Association of Nigeria)</li>
          <li>JAMITUL ISLAMIYYAH</li>
          <li>NASFAT</li> 
          <li>ISLAMIC FORUM AND WELFARE FORUM</li> 
          </ul>
       </div>
        <div className="Sponsor" id="sponsor">
          <Sponsor />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
