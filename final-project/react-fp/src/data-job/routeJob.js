import React from "react"
import { RouteJobProvider } from "./jobContext"
import Joblist from "./jobList"

const RouteJob = () => {
    return(
        <RouteJobProvider>
            <Joblist/>
        </RouteJobProvider>
    )
}

export default RouteJob