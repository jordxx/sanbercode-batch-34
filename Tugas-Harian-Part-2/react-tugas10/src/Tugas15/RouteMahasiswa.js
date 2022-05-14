import React from "react";
import { RouteMahasiswiProvider } from "./RouteContext";

import RouteMahasiswaListtw from "./RouteList";

const RouteMahasiswatw = () => {
    return (
      <RouteMahasiswiProvider>
        <RouteMahasiswaListtw />
      </RouteMahasiswiProvider>
    );
}

export default RouteMahasiswatw