import React from "react";
import Sidebar from "./sidebar";

const LayoutDashboard = (props) => {
  return (
      <>
      <Sidebar/>
      {props.children}
      </>
  );
};

export default LayoutDashboard
