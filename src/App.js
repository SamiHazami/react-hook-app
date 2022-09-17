import React, { useState } from "react";
import {Routes,Route, Link,} from "react-router-dom";

import "./styles.css";
import Movies from "./components/Movies";
import MovieCard from "./components/MovieCard";
import HomePage from "./components/HomePage";

function App() {
  //const [data] = useState(movies);
  // console.log(data);
  return (
    <div>
      
      <nav>
      <h1>My Movies</h1>
         <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/movie" className="link">
            Movies
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="movie" element={<Movies />} />
        <Route path="movie-MovieCard" element={<MovieCard />} />    
      </Routes> 

    </div>
  );
}

export default App;
