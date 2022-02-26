import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Addcontact } from "./addcontact";
import { Home } from "./home";
import { Editcontact } from "./editcontact";
import { ReadContact } from "./readcontact";
import { Createcontact } from "./createcontact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
          <Createcontact />
        </Route>
        <Route path="/addcontact">
          <Addcontact />
        </Route>

        <Route path="/editcontact/:id">
          <Editcontact />
        </Route>

        <Route path="/readcontact/:id">
          <ReadContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
