import React from "react";
import {Link} from "react-router-dom";
import MovieCard from "./MovieCard";

const Movies = () => {
  //console.log(props);
  return (
    <div className="home-page">
      <h1> hello my movies are </h1>
      <button>
        <Link to="/Movies-MovieCard"> Movie Card </Link>
      </button>

    </div>
  );
};

export default Movies;