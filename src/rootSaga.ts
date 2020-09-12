import { call, put, takeEvery } from 'redux-saga/effects'

import { Action } from "redux-act";
import type { MovieSearchRequirement } from "./MovieList";
import { getListOfMovies } from "./api";
import { actions as movieListActions } from "./MovieList";

function* handleSearchRequirement (action: Action<MovieSearchRequirement>) {
    const movieList = yield call(getListOfMovies, action.payload.name, action.payload.page);
    yield put({ type: movieListActions.setMovieList.getType(), payload: movieList });
    yield put({ type: movieListActions.setLoading.getType(), payload: false });
}

function* rootSaga() {
    yield takeEvery(movieListActions.searchRequired.getType(), handleSearchRequirement)
}

export default rootSaga;
