import React from "react";
import NavLanding from "./nav";

const LayoutComp = (props) => {
    return(
        <>
        <NavLanding transparent/>
        {props.children}
        </>
    )
}

export default LayoutComp