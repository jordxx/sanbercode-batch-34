import React from "react";
import NavTw from "../Tugas15/Nav";

const LayoutComponent = (props) => {
return(
    <>
    <NavTw/>
    {props.children}
    </>
)
}

export default LayoutComponent