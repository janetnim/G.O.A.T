import { all } from 'redux-saga/effects';
import { fetchMovieSaga } from "./home";

function* rootSaga() {
  yield all([fetchMovieSaga]);
}

export default rootSaga;
