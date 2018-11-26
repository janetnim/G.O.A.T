import {
  GETTING_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE
} from "./constants";

export const fetchMovie = requestId => ({
  type: GETTING_MOVIE,
  requestId
});

export const fetchMovieSuccess = payload => ({
  type: GET_MOVIE_SUCCESS,
  payload
});

export const fetchMovieFailure = error => ({
  type: GET_MOVIE_FAILURE,
  error
});
