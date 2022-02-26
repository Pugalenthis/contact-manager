import CallIcon from "@mui/icons-material/Call";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Createcontact } from "./createcontact";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./api";

export function Home() {
  const history = useHistory();

  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => setContact(res));
  }, []);

  console.log(contact);

  return (
    <div>
      <div className="container main-container">
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-dark bg-primary">
              <div className="navbar-brand">
                <CallIcon className="m-3 navbar-icon" />
                <span className="navbar-brand navbar-title">
                  Contact Manager
                </span>
              </div>
            </nav>

            <div className="container floating-add-button-container">
              <Fab
                onClick={() => history.push("/addcontact")}
                className="floating-add-button"
                color="primary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
