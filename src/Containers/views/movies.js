import React, { useState, useEffect, useReducer } from "react";
import "./index.css";

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

  // try useReducer with something new, like a counts, articles etc that I can test by consoling
  const initialState = {
    isFetching: false,
    success: false
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHING_MOVIES": {
        return { isFetching: true };
      }
      case "FETCHING_MOVIES_SUCCESS": {
        return { isFetching: false, success: true };
      }
      case "FETCHING_MOVIES_FAILURE": {
        return { isFetching: false, success: false };
      }
      default: {
        return state;
      }
    }
  };

  const [{ isFetching, success }, dispatch] = useReducer(reducer, initialState);

  const delayFunc = setTimeout(() => {
    console.log("Waiting for 10 seconds");
  }, 10000);

  const handleData = () => {
    dispatch({ type: "FETCHING_MOVIES" });
    delayFunc();
    dispatch({ type: "FETCHING_MOVIES_SUCCESS" });
    delayFunc();
    dispatch({ type: "FETCHING_MOVIES_FAILURE" });
    delayFunc();
    console.log("====================================");
    console.log(isFetching, success);
    console.log("====================================");
  };
  console.log(handleData);

  const movieDetails = movies.map(movie => movie);
  const images = movieDetails.map(movie => (
    <div className="poster-info">
      <img
        src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
        className="image"
        alt="avatar"
      />
      <div className="movie-content">
        <div className="title">{movie.title}</div>
        <div className="overview">
          {movie.overview.substring(0, 200) + "..."}
        </div>
        <p
          style={{
            borderTop: "1px solid #e3e3e3",
            position: "absolute",
            bottom: "0",
            width: "100%",
            fontWeight: "400",
            fontSize: "0.9em"
          }}
        >
          More Info
        </p>
      </div>
    </div>
  ));

  //const wordLimit = movies.overview.length <= 267 ? movies.overview : `${movies.overview.substring(0, 267)} ...`
  //{movie.overview.substring(0, 266) + '...'}

  return (
    <div className="page-wrap">
      <div className="header">
        <div className="content" />
        <div className="search-bar">
          <section className="search" />
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
