import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import About from "./About";
import NavMobile from "./nav";
import RouteMovie from "./RouteMovie";
import Trash from "./trash";

const Routes = () => {
    return (
        <>
        <Router>
            <NavMobile/>
            <Switch>
                <Route exact path="/" component={Trash} />
                <Route exact path="/Movies" component={RouteMovie} />
                <Route exact path="/About" component={About} />
            </Switch>
        </Router>
        </>
    )
}

export default Routes