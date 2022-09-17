import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate();

  const routeToMovies = event => {
    history.push("/movie");
  };
  return (
    <div className="home-page">
      <h1>Welcome to some of Your favourite Movies</h1>
      
    </div>
  );
};

export default HomePage;
