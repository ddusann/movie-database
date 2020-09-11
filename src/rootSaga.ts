import { call, put, takeEvery } from 'redux-saga/effects'

import { Action } from "redux-act";
import type { MovieSearchRequirement } from "./MovieList";
import { actions } from "./MovieList";
import { getListOfMovies } from "./api";

function* handleSearchRequirement (action: Action<MovieSearchRequirement>) {
    const movieList = yield call(getListOfMovies, action.payload.name, action.payload.page);
    yield put({ type: actions.setMovieList.getType(), payload: movieList });
    yield put({ type: actions.setLoading.getType(), payload: false });
}

function* rootSaga() {
    yield takeEvery(actions.searchRequired.getType(), handleSearchRequirement)
}

export default rootSaga;
