import { TextField } from "../components/TextField";
import "./signup.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import config from "../config";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/auth/register`, {
        username,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  const validate1 = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8")
      .required("Password is Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          UserName: "",
          Password: "",
        }}
        validationSchema={validate1}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="body">
            <div className="form-holder">
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                rel="stylesheet"
              />
              <img src="images/ibeji.jpg" alt="ibeji" className="logo-size" />
              <Form className="form-width" onSubmit={handleSubmit}>
                <TextField
                  label="UserName"
                  name="firstName"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="mt-3 btn signUp-btn" type="submit">
                  Sign Up
                </button>
              </Form>
              {error && <span style={{ color: "red", marginTop:"10px" }}>Something Wrong!</span>}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
