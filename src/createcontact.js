import React from "react";
import Button from "@mui/material/Button";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useHistory } from "react-router-dom";
import { API } from "./api";
import { useEffect, useState } from "react";
import "./App.css";

export function Createcontact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => setContact(res));
  }, []);

  const reFetch = () => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => setContact(res));
  };

  return (
    <>
      <div className="container main-container createcontact-container">
        <div className="row  createcontact-row">
          {contact.map((ele) => (
            <CreateContactForm
              firstname={ele.firstname}
              lastname={ele.lastname}
              email={ele.email}
              phone={ele.phone}
              id={ele.id}
              label={ele.label}
              reFetch={reFetch}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function CreateContactForm({
  firstname,
  lastname,
  email,
  label,
  phone,
  id,
  reFetch,
}) {
  const history = useHistory();

  const deleteContact = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => reFetch());
  };

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 solo-contact-column">
      <div className="container solo-contact-inner-container">
        <div className="row">
          <div className="col-4 d-flex flex-wrap">
            <img
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
          </div>
          <div className="col-8 d-flex flex-wrap">
            <li style={{ width: "80%", height: "30%" }} class="list-group-item">
              <b>NAME :</b> {firstname}
            </li>
            <Button
              className="bg-warning"
              style={{ width: "10%", height: "30%", marginLeft: "5px" }}
              variant="contained"
              href="#contained-buttons"
            >
              <RemoveRedEyeOutlinedIcon
                onClick={() => history.push(`/readcontact/${id}`)}
              />
            </Button>
            <li style={{ width: "80%", height: "30%" }} class="list-group-item">
              <b>EMAIL :</b> {email}
            </li>
            <Button
              onClick={() => history.push(`/editcontact/${id}`)}
              style={{ width: "10%", height: "30%", marginLeft: "5px" }}
              variant="contained"
              href="#contained-buttons"
            >
              <ModeEditOutlineOutlinedIcon />
            </Button>
            <li style={{ width: "80%", height: "30%" }} class="list-group-item">
              <b>CONTACT NUMBER :</b> {phone}
            </li>
            <Button
              className="bg-danger"
              style={{ width: "10%", height: "30%", marginLeft: "5px" }}
              variant="contained"
              href="#contained-buttons"
            >
              <DeleteOutlineOutlinedIcon onClick={() => deleteContact(id)} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
