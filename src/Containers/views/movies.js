import React, { useState, useEffect } from "react";
import './index.css';

export default function movies() {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      console.log(movies);
    },
    [movies]
  );

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ab7f30f9bf0e2f6538b9870cb4856ef4&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  const movieDetails = movies.map(movie => movie);
  const images = movieDetails.map(movie => <div className="poster-info"><img src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} className="image" alt="image" />
    <div className="movie-content"><div className="title">{movie.title}</div><div className="overview">{movie.overview}</div><p style={{ borderTop: "1px solid #e3e3e3", position: "absolute", bottom: "0"}}>More Info</p></div></div>);

  return (
    <div className="page-wrap">
    <div className="header">
      <div className="content"></div>
      <div className="search-bar">
        <section className="search"></section>
      </div>
    </div>
    <div className="main">
      <div className="main-wrapper">
        <div className="media">Popular</div>
        <div className="discover-movies">{images}</div>
        <div className="pagination-wrapper">1,2,3...next</div>
      </div>
    </div>
    <div className="footer">Footer</div>
    </div>
  );
}
