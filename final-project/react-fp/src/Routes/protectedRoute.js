import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({children, path}) => {
    const {AuthToken} = useContext(AuthContext)

    if(!AuthToken) return<Redirect to="/Login"/>
    return <Route path={path}>{children}</Route>
}

export default ProtectedRoute