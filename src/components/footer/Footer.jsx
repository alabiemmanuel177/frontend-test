import React from "react";
import "./footer.css";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextArea } from "../TextArea";
import axios from "axios";
import { useState } from "react";
import config from "../../config";

export const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/api/contacts`, {
        firstName,
        lastName,
        emailaddress,
        phoneno,
        message,
      });
      res.data && window.location.reload("/");
    } catch (err) {
      setError(true);
    }
  };

  const validate2 = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Required"),
    phoneno: Yup.number()
      .min(11, "Phone No must be at least 11 digit")
      .max(11, "Phone No must not be more then 11 digits")
      .required("required")
      .integer("Phone No cannot have decimal")
      .typeError("Not a number"),
    message: Yup.string().required("required"),
  });
  return (
    <div className="footer">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          Email: "",
          Phone: "",
          Message: "",
        }}
        validationSchema={validate2}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="footer-form">
            <p>Contact Us</p>

            <Form className="row g-" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <TextField
                  label="FirstName"
                  name="firstName"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="LastName"
                  name="lastName"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmailaddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Phone"
                  name="phoneno"
                  type="number"
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </div>
              <div className="label-txt">
                <TextArea
                  label="Message"
                  name="message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <button type="submit" className="btn signUp-btn">
                  Submit
                </button>
              </div>
            </Form>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something Wrong!
              </span>
            )}
          </div>
        )}
      </Formik>
      <div className="fold">
      <div className="footer-links">
        <div className="footer-logo">
          <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png" className="ibeji-logo" height={"150px"} alt="" />
        </div>
        <div className="footer-socials">
          <img src="icons/facebook.png" alt="" />
          <img src="icons/linkedin.png" alt="" />
          <img src="icons/twitter.png" alt="" />
          <img src="icons/instagram.png" alt="" />
        </div>
      </div>
      <div className="google_maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2304095148406!2d3.3794393153391216!3d6.492483625322979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c887fdd5879%3A0xe4973e73d556bede!2s165%20Herbert%20Macaulay%20Way%2C%20Adekunle%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1655499750959!5m2!1sen!2sng" width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="car"/>
      </div>
      </div>
    </div>
  );
};
