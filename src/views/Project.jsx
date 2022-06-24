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
        className="banner-head"
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
