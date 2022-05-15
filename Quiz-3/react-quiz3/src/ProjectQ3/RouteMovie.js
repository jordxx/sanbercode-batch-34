import React from "react";
import MoviesList from "./Movies";
import { RouteMovieProvider } from "./moviesContext";

const RouteMovie = () => {
    return(
        <RouteMovieProvider>
            <MoviesList/>
        </RouteMovieProvider>
    )
}

export default RouteMovie