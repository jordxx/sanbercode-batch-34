import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyForm from "../Tugas10/checkbox";
import Tugas11 from "../Tugas11/crud";
import Tugas12 from "../Tugas12/axios";
import Mahasiswa from "../Tugas13/mahasiswa";
import NavTw from "./Nav";
import RouteMahasiswa from "../Tugas14/RouteMahasiswa";
import RouteMahasiswaFormtw from "./RouteForm";
import { RouteMahasiswaProvider } from "../Tugas14/RouteContext";
import {RouteMahasiswiProvider} from "./RouteContext"
import RouteMahasiswatw from "./RouteMahasiswa";
import RouteMahasiswaForm from "../Tugas14/RouteForm";


function RoutesTw() {
  return (
    <>
      <Router>
        <NavTw />

        <Switch>
          <Route exact path="/" component={MyForm} />
          <Route exact path="/Tugas10" component={MyForm} />
          <Route exact path="/Tugas11" component={Tugas11} />
          <Route exact path="/Tugas12" component={Tugas12} />
          <Route exact path="/Tugas13" component={Mahasiswa} />
          <Route exact path="/Tugas14" component={RouteMahasiswa} />
          <Route exact path="/Tugas15" component={RouteMahasiswatw} />

          <RouteMahasiswaProvider>
            <Route
              exact
              path="/Tugas14/create"
              component={RouteMahasiswaForm}
            />
            <Route
              exact
              path="/Tugas14/edit/:Id"
              component={RouteMahasiswaForm}
            />
          </RouteMahasiswaProvider>

          <RouteMahasiswiProvider>
            <Route
              exact
              path="/Tugas15/create"
              component={RouteMahasiswaFormtw}
            />
            <Route
              exact
              path="/Tugas15/edit/:Id"
              component={RouteMahasiswaFormtw}
            />
          </RouteMahasiswiProvider>
        </Switch>
      </Router>
    </>
  );
}

export default RoutesTw;
