import { put, call, takeLatest } from "redux-saga/effects";
import { GETTING_MOVIE } from "../actionCreators/constants";
import { fetchMovieSuccess, fetchMovieFailure } from "../actionCreators/home";
import HomepageAPI from "../../services/home";

export function* fetchMovieSaga(action) {
  try {
    const response = yield call(HomepageAPI.getMovie, action.requestId);
    yield put(fetchMovieSuccess(response.data));
  } catch (error) {
    yield put(fetchMovieFailure(error));
  }
}

export function* watchMovieSaga() {
  yield takeLatest(GETTING_MOVIE, fetchMovieSaga);
}
