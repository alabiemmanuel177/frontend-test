import React from "react";
import { useEffect, useState } from "react";
import "./project.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import axios from "axios";
import { Posts } from "../components/posts/Posts";
import config from "../config";
export const Project = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${config.baseURL}/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="Project">
      <Navbar />
      <img
        src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655970864/Ibeji%20Foundation/bgOW_hfbzvj.jpg"
        alt=""
        width={"100%"}
      />
      <div id="ourwork" className="ourwork">
        <h1 className="h1">Our Work</h1>
        <h3>
          Real changes take time, and we are commited to this work for the long
          term
        </h3>
      </div>
      <h1 className="whatwefund">What We Fund</h1>
      <div className="whatwe_fund">
        {/* <div id="OW_card" className="card" style={{ width: "18rem" }}>
          <img
            src="https://borgenproject.org/wp-content/uploads/23379499480_a8b69dc31e_o-705x470.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Health</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a id="OW-btn" href="#" className="btn btn-primary">
              VIEW MORE
            </a>
          </div>
        </div>
        <div id="OW_card" className="card" style={{ width: "18rem" }}>
          <img
            src="https://media.istockphoto.com/photos/mortarboard-on-books-and-graduation-scroll-on-the-deskeducation-picture-id1328618978?b=1&k=20&m=1328618978&s=170667a&w=0&h=A6Gowdib9-P6wTU8AxLqwokH0vOFOrxlj62hrwd0yvo="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a id="OW-btn" href="#" className="btn btn-primary">
              VIEW MORE
            </a>
          </div>
        </div>
        <div id="OW_card" className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1636986905406-758b0e280f49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="card-img-top"
            width={"250px"}
            height={"166.59px"}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Empowerment</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a id="OW-btn" href="#" className="btn btn-primary">
              VIEW MORE
            </a>
          </div>
        </div>
        <div id="OW_card" className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.un.org/ruleoflaw/wp-content/uploads/2015/04/humanitarian.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Humanitartian Relief</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a id="OW-btn" href="#" className="btn btn-primary">
              VIEW MORE
            </a>
          </div>
        </div> */}

        <div className="fund_card_holder">
          <div className="fund_card">
            <div className="image_card">
              <img
                src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1656066935/Ibeji%20Foundation/Nigeria-family-planning-2_fxmrjt.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="text_fund_card">
              <h2>Health</h2>
              <p>
                Some quick examples text to build on the card title and make up
                the bulk of the cards content
              </p>
            </div>
            <div className="text_btn-holder">
              <button>View More</button>
            </div>
          </div>
          <div className="fund_card">
            <div className="image_card">
            <img
                src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1656066924/Ibeji%20Foundation/generations-for-peace-ngo-empowerment-women-girls-2014-nigeria-donation-gfp_vpr98v.jpg"
                className="card-img-top"
                alt="..."
                height={"265.22px"}
              />
            </div>
            <div className="text_fund_card">
              <h2>Education</h2>
              <p>
                Some quick examples text to build on the card title and make up
                the bulk of the cards content
              </p>
            </div>
            <div className="text_btn-holder">
              <button>View More</button>
            </div>
          </div>
          <div className="fund_card">
            <div className="image_card">
              <img
                src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1656074499/Ibeji%20Foundation/YEA-1_m6tmds.jpg"
                className="card-img-top"
                alt="..."
                height={"265.22px"}
              />
            </div>
            <div className="text_fund_card">
              <h2>Empowerment</h2>
              <p>
                Some quick examples text to build on the card title and make up
                the bulk of the cards content
              </p>
            </div>
            <div className="text_btn-holder">
              <button>View More</button>
            </div>
          </div>
          <div className="fund_card">
            <div className="image_card">
              <img
                src="https://www.un.org/ruleoflaw/wp-content/uploads/2015/04/humanitarian.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="text_fund_card">
              <h2>Humanitarian Relief</h2>
              <p>
                Some quick examples text to build on the card title and make up
                the bulk of the cards content
              </p>
            </div>
            <div className="text_btn-holder">
              <button>View More</button>
            </div>
          </div>
          <div className="fund_card">
            <div className="image_card">
              <img
                src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1656074305/Ibeji%20Foundation/Nigerian-Muslims_fewztr.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="text_fund_card">
              <h2>Religious Relief</h2>
              <p>
                Some quick examples text to build on the card title and make up
                the bulk of the cards content
              </p>
            </div>
            <div className="text_btn-holder">
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>

      <Posts posts={posts} />
      <Footer />
    </div>
  );
};
