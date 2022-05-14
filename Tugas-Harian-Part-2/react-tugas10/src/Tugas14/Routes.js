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
import Nav from "./Nav";

import { RouteMahasiswaProvider } from "./RouteContext";
import RouteMahasiswaForm from "./RouteForm";
import RouteMahasiswa from "./RouteMahasiswa";


function Routes() {
  return (
    <>
      <Router>
          <Nav/>

          <Switch>
            <Route exact path="/" component={MyForm}/>
            <Route exact path="/Tugas10" component={MyForm}/>
            <Route exact path="/Tugas11" component={Tugas11}/>   
            <Route exact path="/Tugas12" component={Tugas12}/>  
            <Route exact path="/Tugas13" component={Mahasiswa}/>
            <Route exact path="/Tugas14" component={RouteMahasiswa} />

            <RouteMahasiswaProvider> 
            <Route exact path="/Tugas14/create" component={RouteMahasiswaForm}/>
            <Route exact path="/Tugas14/edit/:Id" component={RouteMahasiswaForm} />
            </RouteMahasiswaProvider>

       
         
          </Switch>
      </Router>
    </>
  );
}

export default Routes;
