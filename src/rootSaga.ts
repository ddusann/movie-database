import { call, takeEvery } from 'redux-saga/effects'

import { Action } from "redux-act";
import { actions } from "./SearchBox";
import { getListOfMovies } from "./api";

function* handleSearchRequirement (action: Action<string>) {
    yield call(getListOfMovies, action.payload);
}

function* rootSaga() {
    yield takeEvery(actions.searchRequired.getType(), handleSearchRequirement)
}

export default rootSaga;
