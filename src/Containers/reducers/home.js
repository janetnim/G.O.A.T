import {
  GETTING_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE
} from "../actionCreators/constants";

const initialState = {
  movieItem: {},
  isFetching: false,
  success: false,
  error: ''
}

const movieReducer = (state = initialState, action) => {
  const {type, payload, error} = action;
  switch(type){
    case GETTING_MOVIE:
    return {...state, isFetching: true};

    case GET_MOVIE_SUCCESS:
    return {...state, movieItem: payload, isFetching: false, success: true, error: ''}

    case GET_MOVIE_FAILURE:
    return {...state, movieItem: {}, isFetching: false, success: false, error}

    default:
    return state;
  }
};

export default movieReducer;
