import { call, put, takeEvery } from 'redux-saga/effects'

import { Action } from "redux-act";
import { getListOfMovies } from "./api";
import { actions as movieListActions } from "./MovieList";
import { actions as searchBoxActions } from "./SearchBox";

function* handleSearchRequirement (action: Action<string>) {
    const movieList = yield call(getListOfMovies, action.payload);
    yield put({ type: movieListActions.setMovieList.getType(), payload: movieList });
}

function* rootSaga() {
    yield takeEvery(searchBoxActions.searchRequired.getType(), handleSearchRequirement)
}

export default rootSaga;
