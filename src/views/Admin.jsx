import React, { useContext } from "react";
import "./admin.css";
import PostTable from "../components/PostTable/PostTable";
import { Applicantstable } from "../components/ApplicantsTable/Applicantstable";
import { useState, useEffect } from "react";
import config from "../config";
import AdminImg from "../components/SvgFunc/AdminImg";
import { ContactTable } from "../components/ContactTable/ContactTable";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTable, AiOutlineContacts } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";
import { Context } from "../components/context/Context";
import { PasswordChange } from "../components/PasswordChange";
// necessery file imports

export const Admin = () => {
  // api consumption begin
  const [active, setActive] = useState("FirstTable");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${config.baseURL}/api/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await axios.get(`${config.baseURL}/api/applicants`);
      setApplicants(res.data);
    };
    fetchApplicants();
  }, []);

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get(`${config.baseURL}/api/contacts`);
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="admin-holder">
      {/* bootsrap link */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* sidebar container */}
      <div className="sidebar">
        <div>
          <div className="sidebar1">
            <div className="user1">
              <h4>Ibeji Foundation</h4>
              {/* <img src="images/icon.png" className="user-icon" alt="icon" /> */}
              {/* profile pic icon */}
              <AdminImg/>
              <div className="dropdown">
                {/* logout and change password drop down */}
                <div className="logout-dropdown">
                  <p>
                    {user.username}
                    <MdArrowDropDown className="aIcon-pos" />
                  </p>
                </div>
                <div className="dropdown-content">
                  <h4  onClick={handleLogout}>
                    {user && "Logout"}
                  </h4>
                  <PasswordChange id={user._id} />
                </div>
              </div>
            </div>
            <hr></hr>
            {/* side navbar begins */}
            <div className="options">
              <div className="option">
                <BsPeople className="o-icon" />
                <h4  onClick={() => setActive("FirstTable")}>
                  Posts
                </h4>
              </div>
              <div className="option">
                <AiOutlineTable className="o-icon" />
                <h4  onClick={() => setActive("SecondTable")}>
                  Applicants
                </h4>
              </div>
              <div className="option">
                <AiOutlineContacts className="o-icon" />
                <h4 onClick={() => setActive("ThirdTable")}>Contacts</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <PostTable posts={posts} />}
      {active === "SecondTable" && <Applicantstable applicants={applicants} />}
      {active === "ThirdTable" && <ContactTable contacts={contacts} />}
    </div>
    // side navbar end
  );
};
