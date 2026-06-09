// import React from "react";

import NavBar from "./components/NavBar";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="movie-grid">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default App;
