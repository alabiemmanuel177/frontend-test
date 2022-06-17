import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { TextField } from "../components/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../views/appform.css";
import { useState } from "react";
import axios from "axios";

export const AppForm = () => {
  const [name, setName] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  //   const [type, setType] = useState("")
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/applicants", {
        name,
        emailaddress,
        phoneno,
        address,
        // type,
      });
      res.data && window.location.reload("/");
    } catch (err) {
      setError(true);
    }
  };

  const validate = Yup.object({
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
    address: Yup.string().max(150, "address must be more then 150 characters"),
  });
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
          Name: "",
          //   lastName: "",
          Email: "",
          Phoneno: "",
          Dddress: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="form-holder">
            <h1 className="my-4 font-weight-bold-display-4">Apply Here</h1>

            <Form className="form-width" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="firstName"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <TextField label="Last Name" name="lastName" type="text  "onChange={(e) => setTitle(e.target.value)} /> */}
              <TextField label="Email" name="email" type="email" onChange={(e) => setEmailaddress(e.target.value)}/>
              <TextField label="Phoneno" name="phoneno" type="number" onChange={(e) => setPhoneno(e.target.value)}/>
              <div className="select">
              <label className="mr-sm-2" for="inlineFormCustomSelect">Types</label><br></br>
              <select className="custom-select " id="inlineFormCustomSelect">
              <option selected>Choose...</option>
              <option value="1">Loan</option>
              <option value="2">Empowerment</option>
              <option value="3">Three</option>
              </select>
              </div>
              <TextField label="Address" name="address" type="text"onChange={(e) => setAddress(e.target.value)} />
              <button className="mt-3 btn signUp-btn" type="submit">Register</button>
            </Form>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something Wrong!
              </span>
            )}
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
};
