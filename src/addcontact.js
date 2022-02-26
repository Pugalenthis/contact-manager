import TextField from "@mui/material/TextField";
import "./addcontact.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { API } from "./api";
import { useHistory } from "react-router-dom";

export function Addcontact() {
  const history = useHistory();
  const [contact, setContact] = useState([]);

  const addContactValidationSchema = yup.object({
    firstname: yup
      .string()
      .required("please enter your firstname")
      .max(10, "Maximum 10 characters only  allowed"),
    lastname: yup
      .string()
      .required("please enter your lastname")
      .max(10, "Maximum 10 characters only  allowed"),
    email: yup.string().required("please enter your email"),
    phone: yup
      .string()
      .required("Please enter your contactnumber")
      .max(10, "Maximum 10 numbers only  allowed"),
    label: yup.string().required("Please enter this contact relation"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      label: "",
      phone: "",
      email: "",
    },
    validationSchema: addContactValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      addContact(values);
    },
  });

  useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => setContact(res));
  }, []);

  const addContact = (values) => {
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history.push("/"));
  };

  return (
    <div>
      <div className="container addcontact-container">
        <div className="row">
          <div className="col-12">
            <div className="input-group flex-column align-content-center">
              <form onSubmit={formik.handleSubmit}>
                <div className="icon-input">
                  <PersonOutlineIcon className="icon" />
                  <TextField
                    id="firstname"
                    name="firstname"
                    type="text"
                    error={formik.touched.firstname && formik.errors.firstname}
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                        ? formik.errors.firstname
                        : ""
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    className="input "
                    label="First Name"
                    color="secondary"
                    focused
                  />
                </div>

                <div className="icon-input">
                  <PersonOutlineIcon className="icon" />
                  <TextField
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    className="input"
                    label="Last Name"
                    color="secondary"
                    focused
                  />
                </div>

                <div className="icon-input">
                  <BusinessIcon className="icon" />
                  <TextField
                    id="label"
                    name="label"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.label}
                    className="input"
                    label="Label"
                    color="secondary"
                    focused
                  />
                </div>

                <div className="icon-input">
                  <LocalPhoneIcon className="icon" />
                  <TextField
                    id="phone"
                    name="phone"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="input"
                    label="Phone"
                    color="secondary"
                    focused
                  />
                </div>

                <div className="icon-input">
                  <MailOutlineIcon className="icon" />
                  <TextField
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="input"
                    label="Email"
                    color="secondary"
                    focused
                  />
                </div>

                <div className="icon-input">
                  <Button
                    type="submit"
                    className="addcontact-button"
                    variant="contained"
                  >
                    Create Contact
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
