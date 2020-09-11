import * as actions from './actions';

import type { Movie } from "./actions";
import { createReducer } from "redux-act";

export interface State {
    movies: Movie[];
    totalCount: number;
    currentPage: number;
    loading: boolean;
}

const defaultState: State = {
    movies: [],
    totalCount: 0,
    currentPage: 1,
    loading: false
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.setMovieList, (state, payload): State => ({
    ...state,
    movies: payload.list,
    totalCount: payload.totalCount,
    currentPage: 1
}));

reducer.on(actions.setLoading, (state, payload): State => ({ ...state, loading: payload }));

export default reducer;
