import React from "react";
import { RouteMahasiswaProvider } from "./RouteContext";
import RouteMahasiswaList from "./RouteList";

const RouteMahasiswa = () => {
    return (
      <RouteMahasiswaProvider>
        <RouteMahasiswaList />
      </RouteMahasiswaProvider>
    );
}

export default RouteMahasiswa