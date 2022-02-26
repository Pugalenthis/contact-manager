import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./api";
import "./readcontact.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function ReadContact() {
  const [contact, setContact] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => setContact(res));
  }, []);

  const readcontact = contact;

  return (
    <div>
      <div className="container-fluid readcontact-container-fluid">
        <div className="row readcontact-row">
          <div className="col-8 details-column">
            <h1>contact card</h1>
            <ul>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>ID :</b> {readcontact.id}
              </li>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>FIRST NAME :</b> {readcontact.firstname}
              </li>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>LAST NAME : </b> {readcontact.lastname}
              </li>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>EMAIL :</b> {readcontact.email}
              </li>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>PHONE :</b> {readcontact.phone}
              </li>
              <li>
                <StarBorderIcon className="star-icon" />
                <b>LABEL :</b> {readcontact.label}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
